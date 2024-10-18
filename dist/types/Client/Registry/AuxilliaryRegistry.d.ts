import { Auxiliary } from '../../Classes/Auxiliary';
import { Registry } from './Registry';
import { Client } from '../Client';
export declare class AuxiliariesRegistry extends Registry<Auxiliary> {
    client: Client;
    constructor(client: Client);
    loadAll(): Promise<void>;
}
//# sourceMappingURL=AuxilliaryRegistry.d.ts.map