"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryAction = void 0;
const InlineQuery_1 = require("../../Classes/InlineQuery");
const GenericCreator_1 = require("./GenericCreator");
const ClientEvent_1 = require("../../Types/ClientEvent");
class InlineQueryAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, InlineQuery_1.InlineQuery, InlineQueryAction.pointer);
    }
}
exports.InlineQueryAction = InlineQueryAction;
InlineQueryAction.pointer = ClientEvent_1.ClientEvent.InlineQuery;
//# sourceMappingURL=InlineQuery.js.map