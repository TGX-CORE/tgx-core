import type { SuperGroupChat } from '../../Classes/SuperGroupChat'

import { ForumTopic } from '../../Classes/ForumTopic'
import { CachedManager } from './CachedManager'
import { Routes } from '../../Types/Routes'

export class TopicsManager extends CachedManager<number, ForumTopic> {

    public declare readonly chat: SuperGroupChat

    public constructor(chat: SuperGroupChat){
        super(chat.client, ForumTopic)

        Object.defineProperty(this, 'chat', { value: chat })
    }

    public async create(name: string, icon_color?: number, icon_custom_emoji_id?: string): Promise<ForumTopic|boolean> {
        let { chat: { id: chat_id } } = this
        let response = await this.client.rest.post(Routes.CreateForumTopic, { chat_id, name, icon_color, icon_custom_emoji_id })
        if(!response) return false
        return this._add(new ForumTopic(this.client, response), true, { id: response.message_thread_id })
    }

    public async edit(message_thread_id: number, name?: string, icon_custom_emoji_id?: string): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.EditForumTopic, { chat_id, message_thread_id, name, icon_custom_emoji_id }, { ok: true })
    }

    public async editGeneral(name: string): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.EditGeneralForumTopic, { chat_id , name }, { ok: true })
    }

    public async close(message_thread_id: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.CloseForumTopic, { chat_id, message_thread_id }, { ok: true })
    }

    public async closeGeneral(): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.CloseGeneralForumTopic, { chat_id }, { ok: true })
    }

    public async reopen(message_thread_id: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.ReopenForumTopic, { chat_id, message_thread_id }, { ok: true })
    }

    public async reopenGeneral(): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.ReopenGeneralForumTopic, { chat_id }, { ok: true })
    }

    public async hideGeneral(): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.HideGeneralForumTopic, { chat_id }, { ok: true })
    }
    public async unhideGeneral(): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.UnhideGeneralForumTopic, { chat_id }, { ok: true })
    }

    public async delete(message_thread_id: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.DeleteForumTopic, { chat_id, message_thread_id }, { ok: true })
    }

    public async unpinAll(message_thread_id: number): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.UnpinAllForumTopicMessages, { chat_id, message_thread_id }, { ok: true })
    }

    public async unpinAllGeneral(): Promise<boolean> {
        let { chat: { id: chat_id } } = this
        return this.client.rest.post(Routes.UnpinAllGeneralForumTopicMessages, { chat_id }, { ok: true })
    }

}