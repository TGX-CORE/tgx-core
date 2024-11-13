import type { MessagePacket } from '../Client/Managers/MessagesManager'
import type { PrivateChat } from './PrivateChat'
import type { SuperGroupChat } from './SuperGroupChat'
import type { ChannelChat } from './ChannelChat'
import type { GroupChat } from './GroupChat'

import { Client } from '../Client/Client'
import { BaseClass } from './BaseClass'
import { Message } from './Message'
import { User } from './User'
import { Chat } from '../Types/Message'

export interface CallbackQueryPacket {
    id: string
    from: User
    message?: Message
    inline_message_id?: string
    chat_instance: string
    data: string
    game_short_name?: string
}

/**
 * Represents a callback query.
 */
export class CallbackQuery extends BaseClass<CallbackQuery, CallbackQueryPacket> implements Partial<CallbackQueryPacket> {

    public declare id: string
    
    public declare _message: number
    public declare _chat: number
    public declare _from: number

    public constructor(client: Client, packet: CallbackQueryPacket){
        super(client, packet)
    }

    public get message(): Message {
        return this.client.chats.cache.get(this._chat)!.messages.cache.get(this._message)!
    }

    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get user(): User {
        return this.client.users.cache.get(this._from)!
    }

}