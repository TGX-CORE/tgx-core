import type { Client } from '../Client/Client';
export declare abstract class BaseClass<T, P extends object = any> {
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
    static isClass(value: any): boolean;
    /**
     * @hidden
     */
    static defaults(defaults: any, context?: any, top_layer?: boolean): any;
    /**
     * @hidden
     */
    defaults(defaults: any, context?: any, top_layer?: boolean): any;
}
//# sourceMappingURL=BaseClass.d.ts.map