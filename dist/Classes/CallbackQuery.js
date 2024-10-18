"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackQuery = void 0;
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
class CallbackQuery extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get message() {
        return this.client.chats.cache.get(this._message_chat).messages.cache.get(this._message);
    }
    get chat() {
        return this.client.chats.cache.get(this._message_chat);
    }
    get user() {
        return new User_1.User(this.client, this.from);
    }
}
exports.CallbackQuery = CallbackQuery;
//# sourceMappingURL=CallbackQuery.js.map