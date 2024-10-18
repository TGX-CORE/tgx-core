"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingQueryAction = void 0;
const ShippingQuery_1 = require("../../Classes/ShippingQuery");
const ClientEvent_1 = require("../../Types/ClientEvent");
const GenericCreator_1 = require("./GenericCreator");
class ShippingQueryAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, ShippingQuery_1.ShippingQuery, ShippingQueryAction.pointer);
    }
}
exports.ShippingQueryAction = ShippingQueryAction;
ShippingQueryAction.pointer = ClientEvent_1.ClientEvent.ShippingQuery;
//# sourceMappingURL=ShippingQuery.js.map