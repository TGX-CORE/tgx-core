"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackQueryAction = void 0;
const CallbackQuery_1 = require("../../Classes/CallbackQuery");
const GenericCreator_1 = require("./GenericCreator");
const ClientEvent_1 = require("../../Types/ClientEvent");
class CallbackQueryAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, CallbackQuery_1.CallbackQuery, CallbackQueryAction.pointer);
    }
}
exports.CallbackQueryAction = CallbackQueryAction;
CallbackQueryAction.pointer = ClientEvent_1.ClientEvent.CallbackQuery;
//# sourceMappingURL=CallbackQuery.js.map