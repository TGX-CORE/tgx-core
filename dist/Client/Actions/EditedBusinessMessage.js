"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditedBusinessMessageAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class EditedBusinessMessageAction extends Generic_1.GenericAction {
    handle(packet) {
        let message = this.client.actions.message.handle(packet, false);
        return this.emitMessage(EditedBusinessMessageAction.pointer, message);
    }
}
exports.EditedBusinessMessageAction = EditedBusinessMessageAction;
EditedBusinessMessageAction.pointer = ClientEvent_1.ClientEvent.EditedBusinessMessage;
//# sourceMappingURL=EditedBusinessMessage.js.map