"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesManager = void 0;
const CachedManager_1 = require("./CachedManager");
const Message_1 = require("../../Classes/Message");
class MessagesManager extends CachedManager_1.CachedManager {
    constructor(chat) {
        super(chat.client, Message_1.Message);
        this.chat = chat;
    }
    /**
     * Pins a message.
     */
    async pin(message_id, disable_notification, business_connection_id) {
        return this.client.api.pinChatMessage(null, {
            params: { chat_id: this.chat.id, message_id, disable_notification, business_connection_id },
            returnOk: true
        });
    }
    /**
     * Unpins a message.
     */
    async unpin(message_id, business_connection_id) {
        return this.client.api.unpinChatMessage(null, {
            params: { chat_id: this.chat.id, message_id, business_connection_id },
            returnOk: true
        });
    }
    /**
     * Unpin all pinned messages.
     */
    async unpinAll() {
        return this.client.api.unpinAllChatMessages(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
    /**
     * Delete or bulk delete messages.
     */
    async delete(...message_ids) {
        return this.client.api.deleteMessages(null, {
            params: { chat_id: this.chat.id, message_ids: JSON.stringify(message_ids) },
            returnOk: true
        });
    }
    /**
     * Edits a message that belongs to this manager.
     *
     * @param payload The payload data of the edit.
     */
    async edit(payload) {
        const result = await this.client.api.editMessageText(null, {
            params: { chat_id: this.chat.id, ...payload, },
            lean: true,
            result: true
        });
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result);
    }
    /**
     * Forward messages that belongs to this manager.
     *
     * @param payload The payload data of the forward.
     * @param message_ids The ids of the messages to forward.
     */
    async forward(payload, ...message_ids) {
        const result = this.client.api.forwardMessages(null, {
            params: { ...payload, from_chat_id: this.chat.id, message_ids: JSON.stringify(message_ids) },
            lean: true,
            result: true
        });
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result);
    }
    /**
     * Copy messages of that belongs to this manager.
     *
     * @param payload The payload data of the copy.
     * @param message_ids The ids of the messages to forward.
     */
    async copy(payload, ...message_ids) {
        const result = this.client.api.copyMessages(null, {
            params: { ...payload, from_chat_id: this.chat.id, message_ids: JSON.stringify(message_ids) },
            lean: true,
            result: true
        });
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result);
    }
    /**
     * Edits the caoption of a message that belongs to this manager.
     *
     * @param payload the payload data of the caption.
     */
    async editCaption(payload) {
        const result = await this.client.api.editMessageCaption(null, {
            params: { chat_id: this.chat.id, ...payload },
            lean: true,
            result: true
        });
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result);
    }
    /**
     * Edits the media of a message that belongs to this manager.
     *
     * @param payload The payload data of the media.
     */
    async editMedia(payload) {
        const result = await this.client.api.editMessageMedia(null, {
            params: { chat_id: this.chat.id, ...payload },
            lean: true,
            result: true
        });
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result);
    }
    /**
     * Edits the reply markup of a message that belongs to this manager.
     *
     * @param payload The payload data of the reply markup.
     */
    async editReplyMarkup(payload) {
        const result = await this.client.api.editMessageReplyMarkup(null, {
            params: { chat_id: this.chat.id, ...payload },
            lean: true,
            result: true
        });
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result);
    }
    /**
     * Sets the reaction of a message that belongs to this manager.
     *
     * @param payload The payload data of the reaction.
     */
    async setReaction(payload) {
        return this.client.api.setMessageReaction(null, {
            params: { ...payload, chat_id: this.chat.id, },
            returnOk: true
        });
    }
}
exports.MessagesManager = MessagesManager;
//# sourceMappingURL=MessagesManager.js.map