import { Registries } from '../../Types/Client';
import { Auxiliary } from '../../Classes/Auxiliary';
import { Registry } from './Registry';
import { Client } from '../Client';
export declare class AuxiliariesRegistry extends Registry<Auxiliary> {
    client: Client;
    id: Registries;
    constructor(client: Client);
    loadAll(): Promise<void>;
}
