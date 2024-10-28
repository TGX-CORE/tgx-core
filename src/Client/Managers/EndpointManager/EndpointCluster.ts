import type { EndpointOptions } from '../../../Types/EndpointManager'

import { EndpointManager } from '.'

import { defaults } from '../../../Internals/shared'

export abstract class EndpointCluster<T> {

    public readonly declare endpoint_manager: EndpointManager

    public constructor(endpoint_manager: EndpointManager, _defaults: EndpointOptions){
        Object.defineProperty(this, 'endpoint_manager', { value: endpoint_manager })

        defaults(_defaults, endpoint_manager.options)
    }

    public get client(){
        return this.endpoint_manager.client
    }

    public get options(): T {
        return this.endpoint_manager.options as T
    }

    public async initialize(): Promise<void> { }

}