"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsManager = void 0;
const ForumTopic_1 = require("../../Classes/ForumTopic");
const CachedManager_1 = require("./CachedManager");
class TopicsManager extends CachedManager_1.CachedManager {
    constructor(chat) {
        super(chat.client, ForumTopic_1.ForumTopic);
        Object.defineProperty(this, 'chat', { value: chat });
    }
    async create(name, icon_color, icon_custom_emoji_id) {
        const result = await this.client.api.createForumTopic(null, {
            params: { chat_id: this.chat.id, name, icon_color, icon_custom_emoji_id },
            lean: true,
            result: true
        });
        if (!result)
            return false;
        return this._add(new ForumTopic_1.ForumTopic(this.client, result), true, { id: result.message_thread_id });
    }
    async edit(message_thread_id, name, icon_custom_emoji_id) {
        return this.client.api.editForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id, name, icon_custom_emoji_id },
            returnOk: true
        });
    }
    async editGeneral(name) {
        return this.client.api.editGeneralForumTopic(null, {
            params: { chat_id: this.chat.id, name },
            returnOk: true
        });
    }
    async close(message_thread_id) {
        return this.client.api.closeForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        });
    }
    async closeGeneral() {
        return this.client.api.closeGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
    async reopen(message_thread_id) {
        return this.client.api.reopenForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        });
    }
    async reopenGeneral() {
        return this.client.api.reopenGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
    async hideGeneral() {
        return this.client.api.hideGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
    async unhideGeneral() {
        return this.client.api.unhideGeneralForumTopic(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
    async delete(message_thread_id) {
        return this.client.api.deleteForumTopic(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        });
    }
    async unpinAll(message_thread_id) {
        return this.client.api.unpinAllForumTopicMessages(null, {
            params: { chat_id: this.chat.id, message_thread_id },
            returnOk: true
        });
    }
    async unpinAllGeneral() {
        return this.client.api.unpinAllGeneralForumTopicMessages(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
}
exports.TopicsManager = TopicsManager;
//# sourceMappingURL=TopicsManager.js.map