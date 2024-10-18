"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReaction = void 0;
const BaseClass_1 = require("./BaseClass");
class MessageReaction extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get user() {
        return this._from ? this.client.users.cache.get(this._from) : undefined;
    }
    get chat() {
        return this._chat ? this.client.chats.cache.get(this._chat) : undefined;
    }
    get actor_chat() {
        return this.actor_chat_id ? this.client.chats.cache.get(this.actor_chat_id) : undefined;
    }
    get value() {
        return this.emoji ?? this.custom_emoji_id ?? 'paid';
    }
    get id() {
        return this.actor_chat_id ?? this._from;
    }
}
exports.MessageReaction = MessageReaction;
//# sourceMappingURL=MessageReaction.js.map