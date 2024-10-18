import { Collection } from '@discordjs/collection';
import { BaseManager } from './BaseManager';
export declare class DataManager<K, V> extends BaseManager {
    /**
     * @hidden
     */
    protected holds: unknown;
    /**
     * @hidden
     */
    protected _cache: Collection<K, V>;
    constructor(client: any, holds: unknown);
}
