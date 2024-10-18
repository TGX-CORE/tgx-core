import type { AcceptedEmoji, Chat } from '../Types/Message'
import type { User, UserPacket} from './User'

import { Client } from '../Client/Client'
import { BaseClass } from './BaseClass'

export interface MessageReactionPacket {
    type: 'paid' | 'emoji' | 'custom_emoji'
    message_id: number
    date: number
    chat_id: number
    from?: UserPacket
    actor_chat_id?: number,
    emoji?: AcceptedEmoji
    custom_emoji_id?: string
}

export class MessageReaction extends BaseClass<MessageReaction, MessageReactionPacket> {

    public declare type: string

    private declare _from: number
    private declare _chat: number

    public actor_chat_id?: number
    public custom_emoji_id?: string
    public emoji?: string

    public constructor(client: Client, packet: MessageReactionPacket){
        super(client, packet)
    }

    public get user(): User|undefined {
        return this._from ? this.client.users.cache.get(this._from) : undefined
    }

    public get chat(): Chat|undefined {
        return this._chat ? this.client.chats.cache.get(this._chat) : undefined
    }
    
    public get actor_chat(): Chat|undefined {
        return this.actor_chat_id ? this.client.chats.cache.get(this.actor_chat_id) : undefined
    }

    public get value(): string {
        return this.emoji ?? this.custom_emoji_id ?? 'paid'
    }

    public get id(): number {
        return this.actor_chat_id ?? this._from
    }

}