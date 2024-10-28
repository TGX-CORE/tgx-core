import type { Client } from '../../Client/Client'
import type { Piece } from '../../Classes/Piece'

import { AbstractConstructor } from '../../Internals/shared'
import { Collection } from '@discordjs/collection'
import { Strategy } from './Strategy'

import { promises } from 'fs'
import { join } from 'path'
import { Registries } from '../Registries'

export interface RegistryOptions {
    name: string
}

export abstract class Registry<K, T extends Piece<any>> extends Collection<K, T> {

    public Constructor: AbstractConstructor<T>

    public declare readonly registry: Registries

    public paths: Set<string>
    public name: string

    public strategy: Strategy<K, T> = new Strategy()

    public constructor(registry: Registries, constructor: AbstractConstructor<T>, options: RegistryOptions){
        super()

        Object.defineProperty(this, 'registry', { value: registry })

        this.paths = new Set()
        this.name = options.name
        this.Constructor = constructor
    }

    public register(path: string): this {
        this.paths.add(path)
        return this
    }

    public unregister(path: string): this {
        this.paths.delete(path)
        return this
    }

    public async loadAll(): Promise<void> {
        const registries: any[] = []
        for(const directory of this.paths){
            try {
                const stat = await promises.stat(directory)
                if (!stat.isDirectory()) continue
            } catch (e) {
                continue
            }

            for await(const module of this.loadPath(directory)){
                if( module ) registries.push(module)
            }
        }
        
        for(const registry of registries){
            this.insert(registry)
        }
    }

    public unload(name: K|T): T {
        const piece = this.resolve(name)
        this.delete(piece.name as K)
        return piece
    }

    private async *loadPath(root: string): AsyncIterableIterator<T> {
        for await (const child of this.read(root)){
            const data = this.strategy.filter(child)
            if(!data) continue
            try {
                const hydrated = { root, ...data }
                for await(const module of this.strategy.load(this, hydrated)){
                    yield this.construct(module, hydrated)
                }
            } catch(e) {
                throw e
            }
        }
    }

    private async *read(root: string): AsyncIterableIterator<string> {
        try {
            const directory = await promises.opendir(root)
            for await (const file of directory){
                if(file.isFile()) yield join(directory.path, file.name)
                else if(file.isDirectory()) yield* this.read(join(directory.path, file.name))
            }
        } catch(e) {
            throw e
        }
    }

    public resolve(resolve: K|T): T {
        if(typeof resolve === 'string'){
            const resolved = this.get(resolve)
            if(typeof resolved === undefined) throw 'Resolve cannot be found.'
            return resolved!
        }
        if(resolve instanceof this.Constructor) return resolve
        throw 'Resolve cannot be found.'
    }

    public get client(): Client {
        return this.registry.client
    }

    private async insert(insert: T): Promise<T> {
        insert.onLoad()
        this.set(insert.name as K, insert)
        return insert
    }

    private construct(constructor: any, hydrated: any): any {
        return new constructor({ registry: this, root: hydrated.root, path: hydrated.path, name: hydrated.name },{ name: hydrated.name, enabled: true })
    }

}