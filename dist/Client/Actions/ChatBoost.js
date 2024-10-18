"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBoostAction = void 0;
const ChatBoost_1 = require("../../Classes/ChatBoost");
const GenericCreator_1 = require("./GenericCreator");
const ClientEvent_1 = require("../../Types/ClientEvent");
class ChatBoostAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, ChatBoost_1.ChatBoost, ChatBoostAction.pointer);
    }
}
exports.ChatBoostAction = ChatBoostAction;
ChatBoostAction.pointer = ClientEvent_1.ClientEvent.ChatBoost;
//# sourceMappingURL=ChatBoost.js.map