"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseChat = void 0;
const MessagesManager_1 = require("../Client/Managers/MessagesManager");
const ChatBase_1 = require("./ChatBase");
class BaseChat extends ChatBase_1.ChatBase {
    constructor(client, packet) {
        super(client, packet);
        this.last_message_id = 0;
        this.messages = new MessagesManager_1.MessagesManager(this);
    }
    async setTitle(title) {
        return await this.client.api.setChatTitle(null, {
            params: { chat_id: this.id, title },
            returnOk: true
        });
    }
    async setDescription(description) {
        return this.client.api.setChatDescription(null, {
            params: { chat_id: this.id, description },
            returnOk: true
        });
    }
    async setStrickerSet(sticker_set_name) {
        return this.client.api.setChatStickerSet(null, {
            params: { chat_id: this.id, sticker_set_name },
            returnOk: true
        });
    }
    async deleteStickerSet() {
        return this.client.api.deleteChatStickerSet(null, {
            params: { chat_id: this.id, },
            returnOk: true
        });
    }
    async leave() {
        return this.client.api.leaveChat(null, {
            params: { chat_id: this.id },
            returnOk: true
        });
    }
    async fetch() {
        return this.client.chats.fetch(this.id);
    }
    get partial() {
        return !this.photo;
    }
}
exports.BaseChat = BaseChat;
//# sourceMappingURL=BaseChat.js.map