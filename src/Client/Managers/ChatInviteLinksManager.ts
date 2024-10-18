import type { ChatInviteLinkEditPayload } from '../../Classes/ChatInviteLink'
import type { SuperGroupChat } from '../../Classes/SuperGroupChat'
import type { ChannelChat } from '../../Classes/ChannelChat'
import type { GroupChat } from '../../Classes/GroupChat'

import { ChatInviteLink } from '../../Classes/ChatInviteLink'
import { CachedManager } from './CachedManager'

export interface ChatInviteLinkCreatePayload {
    chat_id: string|number
    name?: string
    expire_date?: number
    member_limit?: number
    creates_join_request?: boolean
}

export interface ChatInviteLinkSubscriptionPayload {
    chat_id: string|number
    name?: string
    subscription_period: number
    subscription_price: number
}

export interface BaseChatInviteLinkEditPayload {
    chat_id: string|number
    invite_link: string
}

export interface ChatInviteLinkSubscriptionEditPayload {
    chat_id: string|number
    invite_link: string
    name?: string
}

export class ChatInviteLinksManager extends CachedManager<string, ChatInviteLink> {

    public chat: SuperGroupChat|GroupChat|ChannelChat

    public constructor(chat: SuperGroupChat|GroupChat|ChannelChat){
        super(chat.client, ChatInviteLink)
        this.chat = chat
    }

    public async export(): Promise<ChatInviteLink|boolean> {
        const response = await this.generate('exportChatInviteLink', {})
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false
    }

    public async create(payload: ChatInviteLinkCreatePayload): Promise<ChatInviteLink|boolean> {
        const response = await this.generate('createChatInviteLink', payload)
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false
    }

    public async createSubscription(payload: ChatInviteLinkSubscriptionPayload): Promise<ChatInviteLink|boolean> {
        const response = await this.generate('createChatSubscriptionInviteLink', payload)
        return response ? this._add(response, true, { id: Response.name, extras: [this] }) : false
    }

    public async edit(payload: ChatInviteLinkEditPayload): Promise<ChatInviteLink|boolean> {
        const response = await this.generate('editChatInviteLink', payload)
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false
    }
    public async editSubscription(payload: ChatInviteLinkSubscriptionEditPayload): Promise<ChatInviteLink|boolean> {
        const response = await this.generate('createChatSubscriptionInviteLink', payload)
        return response ? this._add(response, true, { id: Response.name, extras: [this] }) : false
    }

    public async revoke(invite_link: string): Promise<ChatInviteLink|boolean> {
        const response = await this.generate('revokeChatInviteLink', { invite_link })
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false
    }

    private generate(method: string, payload: any): any {
        return this.client.api[method](null, {
            params: { ...payload, chat_id: this.chat.id },
            lean: true,
            result: true
        })
    }

}