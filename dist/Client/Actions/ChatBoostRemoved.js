"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBoostRemovedAction = void 0;
const ChatBoost_1 = require("../../Classes/ChatBoost");
const GenericCreator_1 = require("./GenericCreator");
const ClientEvent_1 = require("../../Types/ClientEvent");
class ChatBoostRemovedAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, ChatBoost_1.ChatBoost, ChatBoostRemovedAction.pointer);
    }
}
exports.ChatBoostRemovedAction = ChatBoostRemovedAction;
ChatBoostRemovedAction.pointer = ClientEvent_1.ClientEvent.RemovedChatBoost;
//# sourceMappingURL=ChatBoostRemoved.js.map