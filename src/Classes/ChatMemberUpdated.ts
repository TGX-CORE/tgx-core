import type { ChatInviteLink } from '../Classes/ChatInviteLink'
import type { ChatMember } from '../Types/Member'
import type { Client } from '../Client/Client'

import { BaseClass } from './BaseClass'
import { Member } from './Member'
import { Chat } from '../Types/Message'

export interface ChatMemberUpdatedPacket {
    date: number
    old_chat_member: ChatMember
    new_chat_member: ChatMember
    invite_link?: ChatInviteLink
    via_join_request?: boolean
    via_chat_folder_invite_link?: boolean,
}

export class ChatMemberUpdated extends BaseClass<ChatMemberUpdated, ChatMemberUpdatedPacket> implements ChatMemberUpdatedPacket {

    private declare _from: number
    private declare _chat: number

    public declare date: number

    public declare old_chat_member: ChatMember
    public declare new_chat_member: ChatMember

    public constructor(client: Client, packet: ChatMemberUpdatedPacket){
        super(client, packet)
    }
    
    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get member(): Member {
        return this.chat?.members.cache.get(this._from)
    }

}