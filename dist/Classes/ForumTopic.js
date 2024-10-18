"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTopic = void 0;
const ChatBase_1 = require("./ChatBase");
class ForumTopic extends ChatBase_1.ChatBase {
    constructor(client, packet) {
        super(client, packet);
    }
    async edit(name, icon_custom_emoji_id) {
        return this.chat.topics.edit(this.id, name, icon_custom_emoji_id);
    }
    close() {
        return this.chat.topics.close(this.id);
    }
    reopen() {
        return this.chat.topics.reopen(this.id);
    }
    delete() {
        return this.chat.topics.delete(this.id);
    }
    unpinAll() {
        return this.chat.topics.unpinAll(this.id);
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get id() {
        return this.message_thread_id;
    }
}
exports.ForumTopic = ForumTopic;
//# sourceMappingURL=ForumTopic.js.map