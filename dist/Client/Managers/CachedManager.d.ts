import { DataManager } from './DataManager';
interface Cacheable {
    _patch(data: any): this;
    _clone(): this;
}
export declare class CachedManager<K, V extends Cacheable> extends DataManager<K, V> {
    constructor(client: any, holds?: new (...args: any[]) => V, iterable?: any[]);
    /**
     * Gets the cache collection of the manager.
     */
    get cache(): import("@discordjs/collection").Collection<K, V>;
    /**
     * Add data with cache check to the current manager.
     *
     * @param data The data to add to the cache manager.
     * @param cache Pass *True* to cache the data.
     * @param param2 Additional data to pass.
     */
    _add(data: any, cache?: boolean, { id, extras, force, holds }?: any): any;
}
export {};
