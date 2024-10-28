import type { MTProtoClient } from '../MTProtoClient'

import { BaseManager } from './BaseManager'

export class TransportManager extends BaseManager {

    public constructor(client: MTProtoClient){
        super(client)
    }

}