import type { MessagePacket } from '../Client/Managers/MessagesManager'
import type { PrivateChat } from './PrivateChat'
import type { SuperGroupChat } from './SuperGroupChat'
import type { ChannelChat } from './ChannelChat'
import type { GroupChat } from './GroupChat'

import { Client } from '../Client/Client'
import { BaseClass } from './BaseClass'
import { Message } from './Message'
import { User } from './User'

export interface CallbackQueryPacket {
    id: string
    from: User
    message?: Message
    inline_message_id?: string
    chat_instance: string
    data: string
    game_short_name?: string
}

export class CallbackQuery extends BaseClass<CallbackQuery, CallbackQueryPacket> implements Partial<CallbackQueryPacket> {

    public declare id: string
    
    public declare _message: number
    public declare _message_chat: number

    public declare from: User

    public constructor(client: Client, packet: CallbackQueryPacket){
        super(client, packet)
    }

    public get message(): Message|undefined {
        return this.client.chats.cache.get(this._message_chat)!.messages.cache.get(this._message)
    }

    public get chat(): PrivateChat|ChannelChat|GroupChat|SuperGroupChat {
        return this.client.chats.cache.get(this._message_chat) as PrivateChat|ChannelChat|GroupChat|SuperGroupChat 
    }

    public get user(): User {
        return new User(this.client, this.from)
    }

}