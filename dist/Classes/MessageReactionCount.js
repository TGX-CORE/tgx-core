"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactionCount = void 0;
const BaseClass_1 = require("./BaseClass");
class MessageReactionCount extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get message() {
        return this.chat.messages.cache.get(this._message);
    }
}
exports.MessageReactionCount = MessageReactionCount;
//# sourceMappingURL=MessageReactionCount.js.map