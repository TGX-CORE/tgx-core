import type { MTProtoClientOptions } from '../Types/MTProtoClient'

import { EnvironmentVariables } from '../Internals/shared'
import { ClientEvent } from '../Types/ClientEvent'

import { MTProtoBaseClient } from './MTProtoBaseClient'
import { Transport } from './Transport/Transport'

export class MTProtoClient extends MTProtoBaseClient {

    public transport: Transport

    constructor(options: MTProtoClientOptions){
        super(options)

        this.transport = new Transport(this)

    }

    public async intiialize(
        api_id: number = Number(process.env[EnvironmentVariables.Api]),
        api_hash: string = process.env[EnvironmentVariables.Hash]!
    ): Promise<void> {
        await this.transport.initialize()

        this.emit(ClientEvent.Ready, this)
    }
    
}