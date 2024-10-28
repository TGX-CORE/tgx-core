import { CachedManager } from './CachedManager'
import { BaseGroupChat } from '../../Classes/BaseGroupChat'
import { Member } from '../../Classes/Member'

import { ChatAdministratorRights, ChatPermissions } from '../../Builders/ChatPermissions'
import { Routes } from '../../Types/Routes'

export class MembersManager extends CachedManager<number, Member> {
    
    public chat: InstanceType<typeof BaseGroupChat>
    public constructor(chat: InstanceType<typeof BaseGroupChat>){
        super(chat.client, Member)
        this.chat = chat
    }

    public async promote(user_id: number, permissions: ChatAdministratorRights): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.PromoteChatMember, { chat_id, user_id, ...permissions.value }, { ok: true })
    }

    public async restrict(user_id: number, permissions: ChatPermissions, use_independent_chat_permissions?: boolean, until_date?: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.RestrictChatMember, { chat_id, permissions, user_id, use_independent_chat_permissions, until_date }, { ok: true })
    }

    public async ban(user_id: number, revoke_messages?: boolean, until_date?: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.BanChatMember, { chat_id, user_id, until_date, revoke_messages }, { ok: true })
    }
    
    public async unban(user_id: number, only_if_banned: boolean): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.UnbanChatMember, { chat_id, user_id, only_if_banned }, { ok: true })
    }

    public async fetch(user_id: number): Promise<Member|false> {
        let { chat: { id: chat_id } } = this
        let { ok, result } = await this.client.rest.get(Routes.GetChatMember, { chat_id, user_id }, { data: true })
        return ok ? Promise.resolve(super._add(result, true, { id: result.user.id, extras: [this] })) : false
    }

    public async count(): Promise<number> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.get(Routes.GetChatMemberCount, { chat_id })
    }

}