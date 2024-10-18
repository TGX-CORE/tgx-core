import { Piece } from '../../Classes/Piece';
import { Registry } from '../Registry/Registry';
import { Collection } from '@discordjs/collection';
import { CommandsRegistry } from '../Registry/CommandsRegistry';
import { EventsRegistry } from '../Registry/EventsRegistry';
export interface RegistriesOptions {
    loadAll?: boolean;
    selectedLoad?: Array<string>;
}
export declare class RegistryManager extends Collection<string, any> {
    constructor();
    register<T extends Piece<any>>(store: Registry<T>): this;
    deregister<T extends Piece<any>>(store: Registry<T>): this;
    registerPath(root?: string): void;
}
export interface Registries {
    events: EventsRegistry;
    commands: CommandsRegistry;
}
//# sourceMappingURL=RegistryManager.d.ts.map