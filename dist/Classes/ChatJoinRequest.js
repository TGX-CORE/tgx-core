"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatJoinRequest = void 0;
const BaseClass_1 = require("./BaseClass");
class ChatJoinRequest extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    async approve() {
        return this.manager.approve(this._from);
    }
    async decline() {
        return this.manager.decline(this._from);
    }
    get manager() {
        return this.chat?.requests;
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get user() {
        return this.client.users.cache.get(this._from);
    }
}
exports.ChatJoinRequest = ChatJoinRequest;
//# sourceMappingURL=ChatJoinRequest.js.map