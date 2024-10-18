"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepackAction = void 0;
const Generic_1 = require("./Generic");
class PrepackAction extends Generic_1.GenericAction {
    handle(packet) {
        let current = packet.user ?? packet.from ?? packet.source;
        let user = this.client.users.cache.get(current.id);
        if (user) {
            user._patch(current);
        }
        else {
            this.client.users._add(current, true);
        }
        if ('source' in packet) {
            packet._source = current.id;
            delete packet.source;
        }
        if ('user' in packet) {
            packet._user = current.id;
            delete packet.user;
        }
        if ('from' in packet) {
            packet._from = current.id;
            delete packet.from;
        }
        if ('chat' in packet) {
            packet._chat = packet.chat.id;
            delete packet.chat;
        }
        if ('sender_chat' in packet) {
            packet._sender_chat = packet.sender_chat.id;
            delete packet.sender_chat;
        }
        if ('message' in packet) {
            packet._message = packet.message.id;
            packet._message_chat = packet.message.chat.id;
            delete packet.message;
        }
        return packet;
    }
}
exports.PrepackAction = PrepackAction;
PrepackAction.pointer = 'prepack';
//# sourceMappingURL=PrePack.js.map