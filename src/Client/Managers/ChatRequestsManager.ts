import { ChatJoinRequest } from '../../Classes/ChatJoinRequest'
import { BaseGroupChat } from '../../Classes/BaseGroupChat'
import { CachedManager } from './CachedManager'

export class ChatRequestsManager extends CachedManager<string, ChatJoinRequest> {

    public chat: InstanceType<typeof BaseGroupChat>

    public constructor(chat: InstanceType<typeof BaseGroupChat>){
        super(chat.client, ChatJoinRequest)
        this.chat = chat
    }

    public async approve(user_id: number): Promise<boolean> {
        return this.client.api.approveChatJoinRequest(null, {
            params: { chat_id: this.chat.id, user_id },
            returnOk: true
        })
    }

    public async decline(user_id: number): Promise<boolean> {
        return this.client.api.declineChatJoinRequest(null, {
            params: { chat_id: this.chat.id, user_id },
            returnOk: true
        })
    }

}