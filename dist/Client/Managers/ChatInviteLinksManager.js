"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatInviteLinksManager = void 0;
const ChatInviteLink_1 = require("../../Classes/ChatInviteLink");
const CachedManager_1 = require("./CachedManager");
class ChatInviteLinksManager extends CachedManager_1.CachedManager {
    constructor(chat) {
        super(chat.client, ChatInviteLink_1.ChatInviteLink);
        this.chat = chat;
    }
    async export() {
        const response = await this.generate('exportChatInviteLink', {});
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false;
    }
    async create(payload) {
        const response = await this.generate('createChatInviteLink', payload);
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false;
    }
    async createSubscription(payload) {
        const response = await this.generate('createChatSubscriptionInviteLink', payload);
        return response ? this._add(response, true, { id: Response.name, extras: [this] }) : false;
    }
    async edit(payload) {
        const response = await this.generate('editChatInviteLink', payload);
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false;
    }
    async editSubscription(payload) {
        const response = await this.generate('createChatSubscriptionInviteLink', payload);
        return response ? this._add(response, true, { id: Response.name, extras: [this] }) : false;
    }
    async revoke(invite_link) {
        const response = await this.generate('revokeChatInviteLink', { invite_link });
        return response ? this._add(response, true, { id: response.name, extras: [this] }) : false;
    }
    generate(method, payload) {
        return this.client.api[method](null, {
            params: { ...payload, chat_id: this.chat.id },
            lean: true,
            result: true
        });
    }
}
exports.ChatInviteLinksManager = ChatInviteLinksManager;
//# sourceMappingURL=ChatInviteLinksManager.js.map