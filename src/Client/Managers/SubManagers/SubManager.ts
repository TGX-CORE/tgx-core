import type { BaseManager } from '../BaseManager'
import type { Client } from '../../Client'

export class SubManager<M extends BaseManager> {

    public declare readonly manager: M

    public constructor(manager: M){
        Object.defineProperty(this, 'manager', { value: manager })
    }

    public get client(): Client {
        return this.manager.client
    }
    
}