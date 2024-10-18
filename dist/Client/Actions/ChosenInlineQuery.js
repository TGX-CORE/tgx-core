"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChosenInlineQueryAction = void 0;
const InlineQueryChosenResult_1 = require("../../Classes/InlineQueryChosenResult");
const GenericCreator_1 = require("./GenericCreator");
class ChosenInlineQueryAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, InlineQueryChosenResult_1.InlineQueryChosenResult, 'chosen_inline_query');
    }
}
exports.ChosenInlineQueryAction = ChosenInlineQueryAction;
Object.defineProperty(ChosenInlineQueryAction, "pointer", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'chosen_inline_query'
});
//# sourceMappingURL=ChosenInlineQuery.js.map