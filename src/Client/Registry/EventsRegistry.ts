import { Registries } from '../../Types/Client'
import { Event } from '../../Classes/Event'
import { Registry } from './Registry'
import { Client } from '../Client'

export class EventsRegistry extends Registry<Event> {

    public id: Registries = Registries.Events
    
    public constructor(client: Client){
        super(client, Event, { name: 'events' })
    }

}