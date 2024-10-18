"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAction = void 0;
const Generic_1 = require("./Generic");
class UsersAction extends Generic_1.GenericAction {
    handle(packet) {
        let current = packet.user ?? packet.from;
        let user = this.client.users.cache.get(current.id);
        if (user) {
            user._patch(current);
        }
        else {
            this.client.users._add(current, true);
        }
        if ('user' in packet) {
            packet._user = packet.id;
            delete packet.user;
        }
        if ('from' in packet) {
            packet._from = packet.id;
            delete packet.from;
        }
        if ('sender_chat' in packet) {
            packet._sender_chat = packet.sender_chat.id;
            delete packet.sender_chat;
        }
        return packet;
    }
}
exports.UsersAction = UsersAction;
UsersAction.pointer = 'users';
//# sourceMappingURL=Users.js.map