"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditedChannelPostAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class EditedChannelPostAction extends Generic_1.GenericAction {
    handle(packet) {
        const message = this.client.actions.message.handle(packet, false);
        if (message) {
            return this.emitMessage(EditedChannelPostAction.pointer, message);
        }
        return;
    }
}
exports.EditedChannelPostAction = EditedChannelPostAction;
EditedChannelPostAction.pointer = ClientEvent_1.ClientEvent.EditedChannelPost;
//# sourceMappingURL=EditedChannelPost.js.map