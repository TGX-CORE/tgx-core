import { Event } from '../../Classes/Event'
import { Registries } from '../Registries'
import { Registry } from './Registry'

export interface EventsRegistryOptions { 
    load?: boolean
    path?: string
}

export class EventsRegistry extends Registry<string, Event> {

    public cache: any = [ ]

    public constructor(registry: Registries, options?: EventsRegistryOptions){
        super(registry, Event, {
            name: 'events'
        })

        if(options?.load) this.register(options?.path ?? `${registry.root}/events`)
    }

}