import { ClientEvent } from '../../Types/ClientEvent';
import { Client } from '../Client';
import { GenericAction } from './Generic';
export type Constructable<T, P, E extends any[] = []> = new (client: Client, packet: P, extras?: E) => T;
export declare class GenericCreator<H, P, E extends any[] = []> extends GenericAction {
    hold: Constructable<H, P, E>;
    pointer: ClientEvent;
    constructor(client: Client, hold: Constructable<H, P, E>, pointer: ClientEvent);
    handle(_packet: P, prepack?: boolean): any;
}
