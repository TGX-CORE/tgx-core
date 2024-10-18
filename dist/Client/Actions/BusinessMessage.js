"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessMessageAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class BusinessMessageAction extends Generic_1.GenericAction {
    handle(packet) {
        let message = this.client.actions.message.handle(packet, false);
        return this.emitMessage(BusinessMessageAction.pointer, message);
    }
}
exports.BusinessMessageAction = BusinessMessageAction;
BusinessMessageAction.pointer = ClientEvent_1.ClientEvent.BusinessMessage;
//# sourceMappingURL=BusinessMessage.js.map