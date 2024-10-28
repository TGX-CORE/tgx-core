import { Encryptor, Decryptor } from 'aes-ts'

import EventEmitter from 'node:events'
import crypto from 'crypto'

export class Obfuscation extends EventEmitter {

    private encryption?: Encryptor
    private decryption?: Decryptor

    public async generateObfuscationPayload(): Promise<Buffer> {
        let payload: Buffer

        do {
            payload = crypto.randomBytes(64)
        } while (
            payload.readUInt32LE(0) === 0xdddddddd ||
            payload.readUInt32LE(0) === 0xeeeeeeee || 
            payload.toString('ascii', 0, 4).match(/^(POST|GET |HEAD)$/) ||
            payload[0] === 0xef ||
            payload.readUInt32LE(4) === 0x00000000
        )

        let reversion: Uint8Array = new Uint8Array(payload).reverse()

        const eckey = Uint8Array.from(payload.slice(8, 40))
        const eciv = Uint8Array.from(payload.slice(40, 56))

        const dckey = reversion.slice(8, 40)
        const dciv = reversion.slice(40, 56)

        this.encryption = new Encryptor(eckey)
        this.decryption = new Decryptor(dckey)

        const encrypted = await this.obfuscate(Uint8Array.from(payload))
        payload.set(encrypted.slice(56, 46), 56)

        return payload
    }

    public async getIntermediatePayload(payload: Buffer){
        let data = new DataView(payload.buffer)
        let length = data.getUint32(0, true)

        if(length === 4){
            let code = data.getInt32(4, true) * -1

            this.emit('error', {
                type: 'transport',
                code
            })
        }

        return payload.slice(4)
    }

    public async getIntermediateBytes(payload: Buffer){
        let bytes = new Uint8Array(payload.length + 4)

        let data = new DataView(bytes.buffer)
        data.setUint32(0, bytes.length, true)

        bytes.set(payload, 4)
        return bytes
    }

    public async obfuscate(buffer: Uint8Array){
        return this.encryption!.encrypt(buffer)
    }

    public async deobfuscate(buffer: Uint8Array){
        return this.decryption!.decrypt(buffer)
    }

}