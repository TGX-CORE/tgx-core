import type { AbstractConstructor } from '@sapphire/utilities';
import { Collection } from '@discordjs/collection';
import { Piece } from '../../Classes/Piece';
import { Strategy } from './Strategy';
import { Client } from '../Client';
import { Registries } from '../../Types/Client';
export interface RegistryOptions {
    name: string;
}
export declare class Registry<T extends Piece<any>> extends Collection<string, any> {
    Constructor: AbstractConstructor<T>;
    strategy: Strategy<T>;
    id?: Registries;
    client: Client;
    name: string;
    paths: Set<string>;
    constructor(client: Client, constructor: AbstractConstructor<T>, options: RegistryOptions);
    register(path: string): this;
    unregister(path: string): this;
    loadAll(): Promise<void>;
    unload(name: string | T): T;
    private loadPath;
    private read;
    resolve(resolve: string | T): T;
    private insert;
    private construct;
}
