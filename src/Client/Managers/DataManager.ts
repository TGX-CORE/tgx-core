import { Collection } from '@discordjs/collection'
import { BaseManager } from './BaseManager'

export class DataManager<K, V> extends BaseManager {

    /**
     * @hidden
     */
    protected holds: unknown

    /**
     * @hidden
     */
    protected _cache: Collection<K, V> = new Collection()

    public constructor(client: any, holds: unknown){
        super(client)
        this.holds = holds
    }
  
}