import type { MTProtoClient } from '../MTProtoClient'

import { Base } from '../../Classes/Base'
import { defaults as _defaults } from '../../Internals/shared'

export abstract class BaseManager<T = any> extends Base {

    public declare readonly client: MTProtoClient
    public declare readonly options: T
    public declare readonly default?: T

    public constructor(client: MTProtoClient, pointer?: string, defaults?: T){
        super()

        Object.defineProperty(this, 'client', { value: client })

        Object.defineProperty(this, 'default', { value: defaults })

        let value = pointer && defaults ? 
            _defaults(defaults, client.options[pointer])
        : pointer ? client.options[pointer] : undefined

        Object.defineProperty(this, 'options', { value })

    }

}