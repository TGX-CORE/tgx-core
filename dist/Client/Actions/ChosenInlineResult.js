"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChosenInlineresultAction = void 0;
const InlineQueryChosenResult_1 = require("../../Classes/InlineQueryChosenResult");
const GenericCreator_1 = require("./GenericCreator");
const ClientEvent_1 = require("../../Types/ClientEvent");
class ChosenInlineresultAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, InlineQueryChosenResult_1.ChosenInlineResult, ChosenInlineresultAction.pointer);
    }
}
exports.ChosenInlineresultAction = ChosenInlineresultAction;
ChosenInlineresultAction.pointer = ClientEvent_1.ClientEvent.ChosenInlineResult;
//# sourceMappingURL=ChosenInlineResult.js.map