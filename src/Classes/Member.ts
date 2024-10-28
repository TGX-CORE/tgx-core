import type { ChatMember, ChatMemberAdministrator, ChatMemberBanned, ChatMemberLeft, ChatMemberMember, ChatMemberOwner, ChatMemberRestricted, ChatMemberStatus } from '../Types/Member'
import type { MembersManager } from '../Client/Managers/MembersManager'
import type { Client } from '../Client/Client'
import type { ChatBoost } from './ChatBoost'
import type { Chat } from '../Types/Message'
import type { User } from './User'

import { ChatAdministratorRights, ChatPermissions } from '../Builders/ChatPermissions'
import { BaseClass } from './BaseClass' 
import { Routes } from '../Types/Routes'

export class Member extends BaseClass<Member, ChatMember> implements Partial<ChatMemberOwner>,Partial<ChatMemberMember>,Partial<ChatMemberAdministrator>,Partial<ChatMemberBanned>,Partial<ChatMemberLeft>,Partial<ChatMemberRestricted> {

    private declare _user: number
    private declare _chat: number

    public declare status: any
    
    constructor(client: Client, packet: ChatMember){
        super(client, packet)
    }

    /**
     * Promote the current member.
     * 
     * @param permissions The administrative permissions to give the current member.
     */
    public async promote(permissions: ChatAdministratorRights): Promise<boolean> {
        return this.manager.promote(this.id, permissions)
    }

    /**
     * Ban the current member.
     * 
     * @param revoke_messages Delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
     * @param until_date Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
     */
    public async ban(revoke_messages?: boolean, until_date?: number): Promise<boolean> {
        return this.manager.ban(this.id, revoke_messages, until_date)
    }

    /**
     * Unban the current member.
     * 
     * @param only_if_banned Do nothing if the user is not banned
     */
    public async unban(only_if_banned: boolean): Promise<boolean> {
        return this.manager.unban(this.id,  only_if_banned)
    }

    /**
     * Restrict the current member.
     * 
     * @param permissions The new permissions of the member.
     * @param use_independent_chat_permissions Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
     * @param until_date Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
     */
    public async restrict(permissions: ChatPermissions, use_independent_chat_permissions?: boolean, until_date?: number): Promise<boolean> {
        return this.manager.restrict(this.id, permissions, use_independent_chat_permissions, until_date)
    }

    /**
     * Get the list of boosts added to a chat by the user. Requires administrator rights in the chat.
     */
    public async boosts(): Promise<Array<ChatBoost>|boolean> {
        let { manager: { chat: { id: chat_id }} } = this
        return this.client.rest.get(Routes.GetUserChatBoosts, { chat_id })
    }

    /**
     * Fetches the member.
     */
    public async fetch(): Promise<Member|false> {
        return this.manager.fetch(this.id)
    }

    public get id(): number {
        return this._user
    }

    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get user(): User {
        return this.client.users.cache.get(this._user)!
    }

    public get manager(): MembersManager {
        return this.chat.members
    }

    public get partial(): boolean {
        return !this.status
    }

}