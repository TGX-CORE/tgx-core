"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreCheckoutQueryAction = void 0;
const PreCheckoutQuery_1 = require("../../Classes/PreCheckoutQuery");
const ClientEvent_1 = require("../../Types/ClientEvent");
const GenericCreator_1 = require("./GenericCreator");
class PreCheckoutQueryAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, PreCheckoutQuery_1.PreCheckoutQuery, PreCheckoutQueryAction.pointer);
    }
}
exports.PreCheckoutQueryAction = PreCheckoutQueryAction;
PreCheckoutQueryAction.pointer = ClientEvent_1.ClientEvent.PreCheckoutQuery;
//# sourceMappingURL=PreCheckoutQuery.js.map