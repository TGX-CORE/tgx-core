import type { Extensions } from '../../Extensions'
import type { Client } from '../Client'

import { Extension, type ExtensionMetadata } from '../../Extensions/Extension'
import { classExtends } from '../../Internals/shared'
import { BaseManager } from './BaseManager'

import { Collection } from '@discordjs/collection'
import { parse } from 'path'

import chalk from 'chalk'

type ExtensionCosntructor<T extends Extension<any> = Extension<any>> = new(client: Client, metadata: ExtensionMetadata<any>) => T;

export interface ExtensionsManagerOptions {
    load: [typeof Extensions|string, any][]
}

/**
 * @property length Returns the count of loaded extensions.
 */
export class ExtensionsManager extends BaseManager {

    private _cache: Collection<string, any> = new Collection()

    /**
     * An object of record for each extension, where the key is the name of the class and the value as the extension it was loaded from.
     */
    public trace: any = { }

    public constructor(client: Client){
        super(client, 'extensions', {
            load: [
                [ ]
            ],
        })

        for(let extension of this.options.load.map((value: any) => Array.isArray(value) ? value : [value, undefined])){
            this.register(extension[0], extension[1])
        }
    } 

    public async initialize(): Promise<void> {
        for(let [name, extension] of this._cache){
            try {
                await extension.onLoad()
                this.client.logger.debug(chalk.green(`The extension ${name} from ${this.trace[name]} has been loaded.`))
            } catch(e){
                this.error(name, e as string)
            }
        }
    }

    public async register<T extends Extension<any>>(extension: ExtensionCosntructor<T>|string, options: any = { }){
        if(typeof extension === 'string'){
            let extensions = Object.values(require(extension)).filter((value) => classExtends(value, Extension))
            for(let i = 0; i < extensions.length; i++){
                let name = `${parse(extension).name}${ i === 0 ? '' : `_${i}`}`
                this.trace[name] = parse(extension).name
                this.register(extensions[i] as unknown as ExtensionCosntructor<T>, { ...options, name })
            } return
        }

        let hydrated = { options }
        let constructed: T = new extension(this.client, hydrated)

        let { clientExtension, name: _name } = constructed.metadata
        let { name = _name } = options

        if(clientExtension){
            if(this.client[clientExtension]){
                this.error(name, `The client extension "${clientExtension}" has already been activated.`)
            } else {
                this.client[clientExtension] = constructed
            }
        }

        this._cache.set(name, constructed)
        return this
    }

    private error(extension_name: string, error: string){
        return this.client.logger.error(chalk.red(`The extension ${extension_name} from ${this.trace[extension_name]} failed to load.`), `\n`, `${error}`)
    }

    public get get(){
        return this._cache.get.bind(this._cache)
    }

} 