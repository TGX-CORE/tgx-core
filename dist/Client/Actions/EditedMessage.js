"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditedMessageAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class EditedMessageAction extends Generic_1.GenericAction {
    handle(packet) {
        packet.edited = true;
        return this.client.actions.message.handle(packet);
    }
}
exports.EditedMessageAction = EditedMessageAction;
EditedMessageAction.pointer = ClientEvent_1.ClientEvent.EditedMessage;
//# sourceMappingURL=EditedMessage.js.map