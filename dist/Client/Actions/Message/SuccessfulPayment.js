"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessfulPaymenAction = void 0;
const SuccessfulPayment_1 = require("../../../Classes/SuccessfulPayment");
const ClientEvent_1 = require("../../../Types/ClientEvent");
const GenericCreator_1 = require("../GenericCreator");
class SuccessfulPaymenAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, SuccessfulPayment_1.SuccessfulPayment, SuccessfulPaymenAction.pointer);
    }
    handleMessage(_packet) {
        let packed = this.prepack(_packet);
        let { _chat, _from, successful_payment } = packed[1];
        let packet = {
            _chat, _from,
            ...successful_payment
        };
        return this.handle(packet);
    }
}
exports.SuccessfulPaymenAction = SuccessfulPaymenAction;
SuccessfulPaymenAction.pointer = ClientEvent_1.ClientEvent.SuccessfulPayment;
//# sourceMappingURL=SuccessfulPayment.js.map