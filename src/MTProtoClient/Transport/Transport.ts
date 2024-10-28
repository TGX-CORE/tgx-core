import { Server, type ServerInfo } from '../../Types/Websocket'
import type { MTProtoClient } from '../MTProtoClient'

import { Environment } from '../../Types/MTProtoClient'
import { Obfuscation } from './Obfuscation'

import { WebSocket, type RawData } from 'ws'


export class Transport extends Obfuscation {
    public readonly declare client: MTProtoClient

    private connection?: WebSocket

    public declare server: ServerInfo

    public constructor(client: MTProtoClient) {
        super({ captureRejections: true })

        Object.defineProperty(this, 'client', { value: client })
        this.setDC()
    }

    public setDC(environment: Environment = Environment.Testing, id: number = 2) {
        this.server = Server[environment][id]
    }

    public get address(): string {
        return `wss://${this.server.ip}:${this.server.port}/apiws`
    }

    public async initialize(): Promise<void> {
        this.connection = new WebSocket(this.address)

        this.connection.on('open', this.onOpen.bind(this))
        this.connection.on('error', this.onError.bind(this))
        this.connection.on('message', this.onMessage.bind(this))
        this.connection.on('close', this.onClose.bind(this))
    }

    public async send(buffer: Buffer): Promise<void> {
        const payload = await this.getIntermediatePayload(buffer)
        const obfuscated = await this.obfuscate(Uint8Array.from(payload))

        if (obfuscated) {
            this.connection?.send(Buffer.from(obfuscated))
        }
    }

    private onOpen() {
        console.log('Connected to Telegram WebSocket')
    }

    private onMessage(data: RawData, isBinary: boolean) {
        console.log(data, isBinary)
    }

    private onError(err: Error) {
        console.error(err)
    }

    private onClose(code: number, reason: Buffer) {
        console.log(`Connection closed with code: ${code}, reason: ${reason.toString()}`)
    }

}
