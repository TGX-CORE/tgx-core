import { CachedManager } from './CachedManager'
import { BaseGroupChat } from '../../Classes/BaseGroupChat'
import { type AdminPermissions, Member } from '../../Classes/Member'

import { ChatPermissions } from '../../Builders/ChatPermissions'

export class MembersManager extends CachedManager<number, Member> {
    
    public chat: InstanceType<typeof BaseGroupChat>
    public constructor(chat: InstanceType<typeof BaseGroupChat>){
        super(chat.client, Member)
        this.chat = chat
    }

    public async promote(user_id: number, is_anonymous: boolean, permissions: AdminPermissions): Promise<boolean> {
        return this.client.api.promoteChatMember(null, {
            params: { chat_id: this.chat.id, user_id, is_anonymous, ...permissions },
            returnOk: true
        })
    }

    public async ban(user_id: number, revoke_messages?: boolean, until_date?: number): Promise<boolean> {
        return this.client.api.banChatMember(null, {
            params: { chat_id: this.chat.id, user_id, until_date, revoke_messages },
            returnOk: true
        })
    }
    
    public async unban(user_id: number, only_if_banned: boolean): Promise<boolean> {
        return this.client.api.unbanChatMember(null, {
            params: { chat_id: this.chat.id, user_id, only_if_banned },
            returnOk: true
        })
    }

    public async restrict(user_id: number, permissions: ChatPermissions, use_independent_chat_permissions?: boolean, until_date?: number): Promise<boolean> {
        return this.client.api.restrictChatMember(null, {
            params: { chat_id: this.chat.id, permissions: JSON.stringify(permissions), 
                      user_id, use_independent_chat_permissions, until_date },
            headers: { 'Content-Type': 'application/json' },
            returnOk: true
        })
    }

    public async fetch(user_id: number): Promise<Member> {
        var message = await this.client.api.getChatMember(null, {
            params: { user_id, chat_id: this.chat.id },
            lean: true
        })
        return message.ok ? Promise.resolve(super._add(message.result, true, { id: message.result.user.id, extras: [this] })) : Promise.reject(message.message)
    }

    public async count(): Promise<number> {
        return this.client.api.getChatMemberCount(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }

}