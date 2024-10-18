import type { InputFile, LocationPayload, ReactionType } from '../Types/Message'
import type { ChatPermissions } from '../Builders/ChatPermissions'
import type { ChatPhoto, ChatPacket } from './BaseChat'
import { ChatMemberPacket } from '../Types/Member'
import type { Client } from '../Client/Client'
import type { Message } from './Message'
import type { Member } from './Member'

import { ChatInviteLinksManager } from '../Client/Managers/ChatInviteLinksManager'
import { ChatRequestsManager } from '../Client/Managers/ChatRequestsManager'
import { MembersManager } from '../Client/Managers/MembersManager'
import { BaseChat } from './BaseChat'

export interface ChatLocation {
    location: LocationPayload
    address: string
}

export interface BaseGroupChatPacket {
    id: number
    type: 'group'|'supergroup'|'channel'
    title?: string
    username?: string
    is_forum?: true
    accent_color_id?: number
    max_reaction_count?: number
    photo?: ChatPhoto
    active_usernames?: string[]
    available_reactions?: ReactionType[]
    background_custom_emoji_id?: string
    profile_accent_color_id?: number
    profile_background_custom_emoji_id?: string
    join_to_send_messages?: true
    join_by_request?: true
    description?: string
    invite_link?: string
    pinned_message?: Message
    permissions?: ChatPermissions
    can_send_paid_media?: true
    slow_mode_delay?: number
    unrestrict_boost_count?: number
    message_auto_delete_time?: number
    has_aggressive_anti_spam_enabled?: true
    has_hidden_members?: true
    has_protected_content?: true
    has_visible_history?: true
    sticker_set_name?: string
    can_set_sticker_set?: true
    custom_emoji_sticker_set_name?: string
    linked_chat_id?: number
    location?: ChatLocation
}  

export abstract class BaseGroupChat extends BaseChat implements BaseGroupChatPacket {

    public declare id
    public declare type: 'group'|'supergroup'|'channel'

    public members: MembersManager
    public invites: ChatInviteLinksManager
    public requests: ChatRequestsManager

    public constructor(client: Client, packet: ChatPacket){
        super(client, packet)

        this.members = new MembersManager(this)

        this.invites =  new ChatInviteLinksManager(this)

        this.requests = new ChatRequestsManager(this)
    }

    public async setPhoto(photo: InputFile, form?: FormData): Promise<boolean> {
        return this.client.api.setChatPhoto(form, {
            params: { photo },
            headers: { 'Content-Type': form ? 'multipart/form-data' : 'application/json' },
            returnOk: true
        })
    }

    public async deletePhoto(): Promise<boolean> {
        return this.client.api.deleteChatPhoto(null, {
            params: { chat_id: this.id },
            returnOk: true
        })
    }

    public async administrators(): Promise<Array<Member>> {
        const result = await this.client.api.getChatAdministrators(null, {
            params: { chat_id: this.id },
            lean: true,
            result: true
        })

        if(result){
            return result.map((packet: ChatMemberPacket) => {
                return this.members._add(packet, true)
            })
        } else return result
    }

}