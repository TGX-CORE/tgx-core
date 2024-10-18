import type { ChatRequestsManager } from '../Client/Managers/ChatRequestsManager'
import type { Client } from '../Client/Client'

import { BaseClass } from './BaseClass'
import { BaseChat } from './BaseChat'
import { User } from './User'
import { Chat } from '../Types/Message'

export interface ChatInviteLink {
    invite_link: string
    creator: User
    creates_join_request: boolean
    is_primary: boolean
    is_revoked: boolean
    name: string
    expire_date: number
    member_limit: number
    pending_join_request_count: number
    subscription_period: number
    subscription_price: number
}

export interface ChatJoinRequestPacket {
    from: User
    chat?: BaseChat
    user_chat_id: number
    date: number
    bio: string
    invite_link: ChatInviteLink
}

export class ChatJoinRequest extends BaseClass<ChatJoinRequest, ChatJoinRequestPacket> {

    public declare _from: number
    public declare _chat: number

    public constructor(client: Client, packet: ChatJoinRequestPacket){
        super(client, packet)
    }

    public async approve(): Promise<boolean> {
        return this.manager.approve(this._from)
    }

    public async decline(): Promise<boolean> {
        return this.manager.decline(this._from)
    }

    public get manager(): ChatRequestsManager {
        return this.chat?.requests
    }

    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get user() {
        return this.client.users.cache.get(this._from)!
    }

}