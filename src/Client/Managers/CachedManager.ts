import { DataManager } from './DataManager'

interface Cacheable {
    _patch(data: any): this
    _clone(): this
}

export class CachedManager<K, V extends Cacheable> extends DataManager<K, V> {

    public constructor(client: any, holds?: new (...args: any[]) => V, iterable?: any[]){
        super(client, holds)
        if(iterable){
            for(const hold of iterable){
                this._add(hold)
            }
        }
    }

    /**
     * Gets the cache collection of the manager.
     */
    public get cache() {
        return this._cache
    }

    /**
     * Add data with cache check to the current manager.
     * 
     * @param data The data to add to the cache manager.
     * @param cache Pass *True* to cache the data.
     * @param param2 Additional data to pass.
     */
    public _add(data: any, cache: boolean = true, { id, extras = [ ], force, holds }: any = { }): any {
        const existing = this.cache.get(id ?? data.id)
        if(existing && !force){
            if(cache){
                existing._patch(data)
                return existing
            }
            const clone = existing._clone()
            clone._patch(data)
            return clone
        }
        const entry = holds || this.holds ? new (holds ?? this.holds)(this.client, data, extras ?? undefined) : data
        if(cache) this.cache.set(id ?? entry.id, entry)
        return entry
    }
  
}