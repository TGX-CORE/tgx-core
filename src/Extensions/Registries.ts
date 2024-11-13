import { AuxiliariesRegistry, type AuxiliariesRegistryOptions } from './Registries/AuxiliaryRegistry'
import { CommandsRegistry, type CommandsRegistryOptions } from './Registries/CommandsRegistry'
import { EventsRegistry, type EventsRegistryOptions } from './Registries/EventsRegistry'
import { Extension, type ExtensionMetadata } from './Extension'

import { Registry as _Registry } from './Registries/Registry'
import type { Client } from '../Client/Client'

import { scanRoot } from '../Internals/scanner'
import { classExtends, Constructor } from '../Internals/shared'
import { ErrorCodes, TGXTypeError } from '../Error'
import { Collection } from '@discordjs/collection'

export interface RegistriesOptions {
    [key: string]: any,

    root?: string
    auxiliaries?: AuxiliariesRegistryOptions
    commands?: CommandsRegistryOptions
    events?: EventsRegistryOptions
}

export class Registries extends Extension<RegistriesOptions> {

    private _cache: Collection<string, _Registry<string, any>>

    public root: string

    public constructor(client: Client, metadata: ExtensionMetadata<RegistriesOptions>){
        super(client, {
            ...metadata
        })

        this.root = this.metadata.options.root ?? scanRoot().root

        this._cache = new Collection()

        this.register('auxiliaries', metadata.options.auxiliaries, AuxiliariesRegistry)
        this.register('commands', metadata.options.commands, CommandsRegistry)
        this.register('events', metadata.options.events, EventsRegistry)
    }

    /**
     * Register a registry to the extension.
     * 
     * @param name The name to register the registry as and can be accessed via; Registries."name".
     * @param registry The registry class itself.
     */
    public register<Registry extends Constructor<_Registry>>(name: string, options: any, registry: Registry){
        if(!classExtends(registry, _Registry)) throw new TGXTypeError(ErrorCodes.InvalidRegistry, registry.name)
        this._cache.set(name, this.instantiate(registry, this, options))
        return this
    }

    private instantiate<Registry extends Constructor<_Registry>>(registry: Registry, ...args: any[]): _Registry {
        return new registry(...args)
    }

    /**
     * Load all registered registry.
     */
    public async onLoad(): Promise<void> {
        let promises: any = [ ]
        this._cache.forEach(async (value) => {
            promises.push(value.loadAll())
        })

        await Promise.all(promises)
    }

    public get(){
        return this._cache.get.bind(this)
    }

}