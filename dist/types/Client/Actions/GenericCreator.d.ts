import { Client } from '../Client';
import { GenericAction } from './Generic';
export type Constructable<T, P, E extends any[] = []> = new (client: Client, packet: P, extras?: E) => T;
export declare class GenericCreator<H, P, E extends any[] = []> extends GenericAction {
    hold: Constructable<H, P, E>;
    pointer: string;
    constructor(client: Client, hold: Constructable<H, P, E>, pointer: string);
    handle(packet: P): any;
}
//# sourceMappingURL=GenericCreator.d.ts.map