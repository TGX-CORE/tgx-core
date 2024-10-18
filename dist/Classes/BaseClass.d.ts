import type { Client } from '../Client/Client';
import { Base } from './Base';
export declare abstract class BaseClass<T, P> {
    readonly client: Client;
    constructor(client: Client, packet?: P);
    /**
     * @hidden
     */
    _patch(data: P): this;
    /**
     * @hidden
     */
    _clone(): T;
    /**
     * @hidden
     */
    _update(data: P): T;
    /**
     * @hidden
     */
    get defaults(): (defaults: any, context?: any, top_layer?: boolean) => any;
    /**
     * @hidden
     */
    get nest(): typeof Base.nest;
}
