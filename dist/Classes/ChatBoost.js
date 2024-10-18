"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBoost = void 0;
const BaseClass_1 = require("./BaseClass");
class ChatBoost extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get removed() {
        return Boolean(this.remove_date);
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get user() {
        return this.client.users.cache.get(this._source);
    }
}
exports.ChatBoost = ChatBoost;
//# sourceMappingURL=ChatBoost.js.map