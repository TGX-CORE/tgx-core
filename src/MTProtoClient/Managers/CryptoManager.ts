import type { MTProtoClient } from '../MTProtoClient'

import { BaseManager } from './BaseManager'

import crypto from 'node:crypto'

export class CryptoManager extends BaseManager {

    public constructor(client: MTProtoClient){
        super(client)
    }



    public sha1(data: any){
        data = new Uint8Array(data)
        const hash = crypto.createHash('sha1')
        hash.update(data)
        return new Uint8Array(hash.digest())
    }

    public sha256(data: any){
        data = new Uint8Array(data)
        const hash = crypto.createHash('sha256')
        hash.update(data)
        return new Uint8Array(hash.digest())
    }

}