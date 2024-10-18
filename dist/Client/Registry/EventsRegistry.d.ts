import { Registries } from '../../Types/Client';
import { Event } from '../../Classes/Event';
import { Registry } from './Registry';
import { Client } from '../Client';
export declare class EventsRegistry extends Registry<Event> {
    id: Registries;
    constructor(client: Client);
}
