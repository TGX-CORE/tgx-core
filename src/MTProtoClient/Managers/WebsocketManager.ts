import type { MTProtoClient } from '../MTProtoClient'
import type { ServerInfo, WebsocketManagerOptions } from '../../Types/Websocket'

import { WebSocket, type RawData } from 'ws'
import { Server } from '../../Types/Websocket'
import { BaseManager } from './BaseManager'
import { Obfuscation } from '../Transport/Obfuscation'

export class WebsocketManager extends BaseManager<WebsocketManagerOptions> {

    private connection?: WebSocket

    private obfuscation: Obfuscation

    public server: ServerInfo

    public constructor(client: MTProtoClient){
        super(client, 'ws', {

        })

        this.obfuscation = new Obfuscation()

        this.server = Server[this.client.options.environment!][this.client.options.server_id!]
    }

    public async initialize(): Promise<void> {

        this.connection = new WebSocket(this.ip)

        this.connection.on('open', this.open.bind(this))
        this.connection.on('error', this.error.bind(this))
        this.connection.on('message', this.message.bind(this))
        this.connection.on('close', this.close.bind(this))

    }

    public get ip(){
        return `wss://${this.server.ip}:${this.server.port}/apiws`
    }

    private open(){
        console.log('Connected to Telegram WebSocket')
    }

    private error(err: Error){
        console.log(err)
    }

    private message(data: RawData){
        console.log(data)
    }

    private close(code: number, reason: Buffer){
        console.log(code, reason.join(' '))
    }

}