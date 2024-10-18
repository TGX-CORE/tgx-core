import { EventEmitter } from 'node:events';
export declare abstract class Base extends EventEmitter {
    constructor();
    /**
     * @hidden
     */
    static nest(object: any, additional: any, fn: (id: any, value: any) => any): any;
}
