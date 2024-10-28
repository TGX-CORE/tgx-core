import { AuxiliariesRegistry, type AuxiliariesRegistryOptions } from './Registries/AuxiliaryRegistry'
import { CommandsRegistry, type CommandsRegistryOptions } from './Registries/CommandsRegistry'
import { EventsRegistry, type EventsRegistryOptions } from './Registries/EventsRegistry'
import { Extension, type ExtensionMetadata } from './Extension'

import { scanRoot } from '../Internals/scanner'
import type { Client } from '../Client/Client'

export interface RegistriesOptions {
    root?: string
    auxiliaries?: AuxiliariesRegistryOptions
    commands?: CommandsRegistryOptions
    events?: EventsRegistryOptions
}

export class Registries extends Extension<RegistriesOptions> {

    public auxiliaries: AuxiliariesRegistry
    public commands: CommandsRegistry
    public events: EventsRegistry

    public root: string

    public constructor(client: Client, metadata: ExtensionMetadata<RegistriesOptions>){
        super(client, {
            ...metadata
        })

        this.root = this.metadata.options.root ?? scanRoot().root

        this.commands = new CommandsRegistry(this, metadata.options.commands)

        this.events = new EventsRegistry(this, metadata.options.events)

        this.auxiliaries = new AuxiliariesRegistry(this, metadata.options.auxiliaries)

    }

    public async onLoad(){
        await this.commands.loadAll()
        await this.events.loadAll()
        await this.auxiliaries.loadAll()
    }

}