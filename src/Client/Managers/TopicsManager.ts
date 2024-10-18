import type { SuperGroupChat } from '../../Classes/SuperGroupChat'

import { ForumTopic } from '../../Classes/ForumTopic'
import { CachedManager } from './CachedManager'

export class TopicsManager extends CachedManager<number, ForumTopic> {

    public declare readonly chat: SuperGroupChat

    public constructor(chat: SuperGroupChat){
        super(chat.client, ForumTopic)

        Object.defineProperty(this, 'chat', { value: chat })
    }

    public async create(name: string, icon_color?: number, icon_custom_emoji_id?: string): Promise<ForumTopic|boolean> {
        const result = await this.client.api.createForumTopic(null, {
            params: { chat_id: this.chat.id, name, icon_color, icon_custom_emoji_id },
            lean: true,
            result: true
        })
        if(!result) return false
        return this._add(new ForumTopic(this.client, result), true, { id: result.message_thread_id })
    }

    public async edit(message_thread_id: number, name?: string, icon_custom_emoji_id?: string): Promise<boolean> {
        return this.client.api.editForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id, name, icon_custom_emoji_id },
            returnOk: true
        })
    }

    public async editGeneral(name: string): Promise<boolean> {
        return this.client.api.editGeneralForumTopic(null, {
            params: { chat_id: this.chat.id, name },
            returnOk: true
        })
    }

    public async close(message_thread_id: number): Promise<boolean> {
        return this.client.api.closeForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        })
    }

    public async closeGeneral(): Promise<boolean> {
        return this.client.api.closeGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }

    public async reopen(message_thread_id: number): Promise<boolean> {
        return this.client.api.reopenForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        })
    }

    public async reopenGeneral(): Promise<boolean> {
        return this.client.api.reopenGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }

    public async hideGeneral(): Promise<boolean> {
        return this.client.api.hideGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }
    public async unhideGeneral(): Promise<boolean> {
        return this.client.api.unhideGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }

    public async delete(message_thread_id: number): Promise<boolean> {
        return this.client.api.deleteForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        })
    }

    public async unpinAll(message_thread_id: number): Promise<boolean> {
        return this.client.api.unpinAllForumTopicMessages(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        })
    }

    public async unpinAllGeneral(): Promise<boolean> {
        return this.client.api.unpinAllGeneralForumTopicMessages(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }

}