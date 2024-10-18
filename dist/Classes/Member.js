"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const BaseClass_1 = require("./BaseClass");
class Member extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    async promote(is_anonymous, permissions) {
        return this.manager.promote(this.id, is_anonymous, permissions);
    }
    async ban(revoke_messages, until_date) {
        return this.manager.ban(this.id, revoke_messages, until_date);
    }
    async unban(only_if_banned) {
        return this.manager.unban(this.id, only_if_banned);
    }
    async restrict(permissions, use_independent_chat_permissions, until_date) {
        return this.manager.restrict(this.id, permissions, use_independent_chat_permissions, until_date);
    }
    async boosts() {
        return this.client.api.getUserChatBoosts(null, {
            params: { chat_id: this.manager.chat.id },
            lean: true,
            result: true
        });
    }
    async fetch() {
        return this.manager.fetch(this.id);
    }
    get id() {
        return this._user;
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get user() {
        return this.client.users.cache.get(this._user);
    }
    get manager() {
        return this.chat.members;
    }
    get partial() {
        return !this.status;
    }
}
exports.Member = Member;
//# sourceMappingURL=Member.js.map