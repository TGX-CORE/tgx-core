"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMemberUpdated = void 0;
const BaseClass_1 = require("./BaseClass");
class ChatMemberUpdated extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get member() {
        return this.chat?.members.cache.get(this._from);
    }
}
exports.ChatMemberUpdated = ChatMemberUpdated;
//# sourceMappingURL=ChatMemberUpdated.js.map