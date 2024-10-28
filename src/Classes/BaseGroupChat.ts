import type { InputFile, LocationPayload, ReactionType } from '../Types/Message'
import type { ChatPermissions } from '../Builders/ChatPermissions'
import type { ChatPhoto, ChatPacket } from './BaseChat'
import type { ChatMemberPacket } from '../Types/Member'
import type { Client } from '../Client/Client'
import type { Message } from './Message'
import type { Member } from './Member'

import { ChatInviteLinksManager } from '../Client/Managers/ChatInviteLinksManager'
import { ChatRequestsManager } from '../Client/Managers/ChatRequestsManager'
import { MembersManager } from '../Client/Managers/MembersManager'
import { Routes } from '../Types/Routes'
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

    /**
     * Set the current photo of the chat.
     * 
     * @param photo 
     */
    public async setPhoto(photo: InputFile): Promise<boolean> {
        return this.client.rest.post(Routes.SetChatPhoto, { chat_id: this.id, photo }, { ok: true })
    }

    /**
     * Delete the current photo of the chat.
     */
    public async deletePhoto(): Promise<boolean> {
        return this.client.rest.post(Routes.DeleteChatPhoto, { chat_id: this.id }, { ok: true })
    }

    /**
     * Get the administrators of the chat.
     */
    public async administrators(): Promise<Array<Member>> {
        let result
        if(result = await this.client.rest.post(Routes.GetChatAdministrators, { chat_id: this.id })){
            return result.map((packet: ChatMemberPacket) => {
                return this.members._add(packet, true)
            })
        } else return result
    }

    /**
     * Set the title of the current chat.
     * 
     * @param title The new title of the chat.
     */
    public async setTitle(title: string): Promise<boolean> {
        return this.client.rest.post(Routes.SetChatTitle, { chat_id: this.id, title }, { ok: true })
    }

    /**
     * Set the description of the current chat.
     * 
     * @param description The new description of the chat.
     */
    public async setDescription(description: string): Promise<boolean> {
        return this.client.rest.post(Routes.SetChatDescription, { chat_id: this.id, description }, { ok: true })
    }

    /**
     * Set the sticker set of the current chat.
     * 
     * @param sticker_set_name The name of the set of stickers.
     */
    public async setStickerSet(sticker_set_name: string): Promise<boolean> {
        return this.client.rest.post(Routes.SetChatStickerSet, { chat_id: this.id, sticker_set_name }, { ok: true })
    }

    /**
     * Deletes the current set of sticker from the current chat.
     */
    public async deleteStickerSet(): Promise<boolean> {
        return this.client.rest.post(Routes.DeleteChatStickerSet, { chat_id: this.id }, { ok: true })
    }

}