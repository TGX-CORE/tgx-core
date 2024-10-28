import { ChatJoinRequest } from '../../Classes/ChatJoinRequest'
import { BaseGroupChat } from '../../Classes/BaseGroupChat'
import { CachedManager } from './CachedManager'
import { Routes } from '../../Types/Routes'

export class ChatRequestsManager extends CachedManager<string, ChatJoinRequest> {

    public chat: InstanceType<typeof BaseGroupChat>

    public constructor(chat: InstanceType<typeof BaseGroupChat>){
        super(chat.client, ChatJoinRequest)
        this.chat = chat
    }

    public async approve(user_id: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.ApproveChatJoinRequest, { chat_id, user_id }, { ok: true })
    }

    public async decline(user_id: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.DeclineChatJoinRequest, { chat_id, user_id }, { ok: true })
    }

}