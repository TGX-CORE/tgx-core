import type { Chat, ReactionType } from '../Types/Message'
import type { Client } from '../Client/Client'
import type { Message } from './Message'

import { BaseClass } from './BaseClass'
import { BaseChat } from './BaseChat'

export interface MessageReactionCountPacket {
    chat?: BaseChat
    message_id: number
    date: number
    reactions: {
        type: ReactionType
        total_count: number
    }[]
}

export class MessageReactionCount extends BaseClass<MessageReactionCount, MessageReactionCountPacket> implements Partial<MessageReactionCountPacket> {

    private declare _message: number
    private declare _chat: number

    public constructor(client: Client, packet: MessageReactionCountPacket){
        super(client, packet)
    }


    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get message(): Message {
        return this.chat.messages.cache.get(this._message)!
    }

}