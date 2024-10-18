"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersManager = void 0;
const CachedManager_1 = require("./CachedManager");
const Member_1 = require("../../Classes/Member");
class MembersManager extends CachedManager_1.CachedManager {
    constructor(chat) {
        super(chat.client, Member_1.Member);
        this.chat = chat;
    }
    async promote(user_id, is_anonymous, permissions) {
        return this.client.api.promoteChatMember(null, {
            params: { chat_id: this.chat.id, user_id, is_anonymous, ...permissions },
            returnOk: true
        });
    }
    async ban(user_id, revoke_messages, until_date) {
        return this.client.api.banChatMember(null, {
            params: { chat_id: this.chat.id, user_id, until_date, revoke_messages },
            returnOk: true
        });
    }
    async unban(user_id, only_if_banned) {
        return this.client.api.unbanChatMember(null, {
            params: { chat_id: this.chat.id, user_id, only_if_banned },
            returnOk: true
        });
    }
    async restrict(user_id, permissions, use_independent_chat_permissions, until_date) {
        return this.client.api.restrictChatMember(null, {
            params: { chat_id: this.chat.id, permissions: JSON.stringify(permissions),
                user_id, use_independent_chat_permissions, until_date },
            headers: { 'Content-Type': 'application/json' },
            returnOk: true
        });
    }
    async fetch(user_id) {
        var message = await this.client.api.getChatMember(null, {
            params: { user_id, chat_id: this.chat.id },
            lean: true
        });
        return message.ok ? Promise.resolve(super._add(message.result, true, { id: message.result.user.id, extras: [this] })) : Promise.reject(message.message);
    }
    async count() {
        return this.client.api.getChatMemberCount(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        });
    }
}
exports.MembersManager = MembersManager;
//# sourceMappingURL=MembersManager.js.map