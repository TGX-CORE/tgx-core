import type { AbstractConstructor } from '@sapphire/utilities'
import { Collection } from '@discordjs/collection'
import { promises } from 'fs'
import { join } from 'path'

import { Piece } from '../../Classes/Piece'
import { Strategy } from './Strategy'
import { Client } from '../Client'
import { Registries } from '../../Types/Client'

export interface RegistryOptions {
    name: string
}

export class Registry<T extends Piece<any>> extends Collection<string, any> {

    
    public Constructor: AbstractConstructor<T>
    public strategy: Strategy<T> = new Strategy()
    
    public id?: Registries

    public client: Client
    public name: string
    public paths: Set<string>

    public constructor(client: Client, constructor: AbstractConstructor<T>, options: RegistryOptions) {
        super()
        this.paths = new Set()
        this.name = options.name
        this.client = client
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

    public unload(name: string|T): T {
        const piece = this.resolve(name)
        this.delete(piece.name)
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

    public resolve(resolve: string|T): T {
        if(typeof resolve === 'string'){
            const resolved = this.get(resolve)
            if(typeof resolved === undefined) throw 'Resolve cannot be found.'
            return resolved
        }
        if(resolve instanceof this.Constructor) return resolve
        throw 'Resolve cannot be found.'
    }

    private async insert(insert: T): Promise<T> {
        insert.onLoad()
        this.set(insert.name, insert)
        return insert
    }

    private construct(constructor: any, hydrated: any): any {
        return new constructor({ registry: this, root: hydrated.root, path: hydrated.path, name: hydrated.name },{ name: hydrated.name, enabled: true })
    }

}