import type { ChatMember, ChatMemberAdministrator, ChatMemberBanned, ChatMemberLeft, ChatMemberMember, ChatMemberOwner, ChatMemberRestricted, ChatMemberStatus } from '../Types/Member'
import type { MembersManager } from '../Client/Managers/MembersManager'
import type { Client } from '../Client/Client'
import type { ChatBoost } from './ChatBoost'
import type { Chat } from '../Types/Message'
import type { User } from './User'

import { ChatPermissions } from '../Builders/ChatPermissions'
import { BaseClass } from './BaseClass' 

export interface AdminPermissions {
    can_manage_chat?: boolean
    can_delete_messages?: boolean
    can_manage_video_chats?: boolean
    can_restrict_members?: boolean
    can_promote_members?: boolean
    can_change_info?: boolean
    can_invite_users?: boolean
    can_post_stories?: boolean
    can_edit_stories?: boolean
    can_delete_stories?: boolean
    can_post_messages?: boolean
    can_edit_messages?: boolean
    can_pin_messages?: boolean
    can_manage_topics?: boolean
}

export class Member extends BaseClass<Member, ChatMember> implements Partial<ChatMemberOwner>,Partial<ChatMemberMember>,Partial<ChatMemberAdministrator>,Partial<ChatMemberBanned>,Partial<ChatMemberLeft>,Partial<ChatMemberRestricted> {

    private declare _user: number
    private declare _chat: number

    public declare status: any
    
    constructor(client: Client, packet: ChatMember){
        super(client, packet)
    }

    public async promote(is_anonymous: boolean, permissions: AdminPermissions): Promise<boolean> {
        return this.manager.promote(this.id, is_anonymous, permissions)
    }

    public async ban(revoke_messages?: boolean, until_date?: number): Promise<boolean> {
        return this.manager.ban(this.id, revoke_messages, until_date)
    }

    public async unban(only_if_banned: boolean): Promise<boolean> {
        return this.manager.unban(this.id,  only_if_banned)
    }

    public async restrict(permissions: ChatPermissions, use_independent_chat_permissions?: boolean, until_date?: number): Promise<boolean> {
        return this.manager.restrict(this.id, permissions, use_independent_chat_permissions, until_date)
    }

    public async boosts(): Promise<Array<ChatBoost>|boolean> {
        return this.client.api.getUserChatBoosts(null, {
            params: { chat_id: this.manager.chat.id },
            lean: true,
            result: true
        })
    }

    public async fetch(): Promise<Member> {
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