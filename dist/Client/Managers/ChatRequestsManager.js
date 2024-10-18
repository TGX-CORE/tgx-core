"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRequestsManager = void 0;
const ChatJoinRequest_1 = require("../../Classes/ChatJoinRequest");
const CachedManager_1 = require("./CachedManager");
class ChatRequestsManager extends CachedManager_1.CachedManager {
    constructor(chat) {
        super(chat.client, ChatJoinRequest_1.ChatJoinRequest);
        this.chat = chat;
    }
    async approve(user_id) {
        return this.client.api.approveChatJoinRequest(null, {
            params: { chat_id: this.chat.id, user_id },
            returnOk: true
        });
    }
    async decline(user_id) {
        return this.client.api.declineChatJoinRequest(null, {
            params: { chat_id: this.chat.id, user_id },
            returnOk: true
        });
    }
}
exports.ChatRequestsManager = ChatRequestsManager;
//# sourceMappingURL=ChatRequestsManager.js.map