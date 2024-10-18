"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPostAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class ChannelPostAction extends Generic_1.GenericAction {
    handle(packet) {
        const message = this.client.actions.message.handle(packet, false);
        if (message) {
            return this.emitMessage(ChannelPostAction.pointer, message);
        }
        return;
    }
}
exports.ChannelPostAction = ChannelPostAction;
ChannelPostAction.pointer = ClientEvent_1.ClientEvent.ChannelPost;
//# sourceMappingURL=ChannelPost.js.map