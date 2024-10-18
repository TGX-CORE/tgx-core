import type { ChatBoostPacket, ChatBoostRemoved, ChatBoostSource, ChatBoostUpdated } from '../Types/Chatboost'
import type { Client } from '../Client/Client'
import type { Chat } from '../Types/Message'

import { BaseClass } from './BaseClass'
import { User } from './User'

export class ChatBoost extends BaseClass<ChatBoost, ChatBoostUpdated|ChatBoostRemoved> implements Partial<ChatBoostUpdated>, Partial<ChatBoostRemoved> {

    private declare _source: number
    private declare _chat: number

    public source?: ChatBoostSource
    public boost?: ChatBoostPacket
    public remove_date?: number

    public constructor(client: Client, packet: ChatBoostUpdated|ChatBoostRemoved){
        super(client, packet)
    }

    public get removed(): boolean {
        return Boolean(this.remove_date)
    }

    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get user(): User {
        return this.client.users.cache.get(this._source)!
    }

}