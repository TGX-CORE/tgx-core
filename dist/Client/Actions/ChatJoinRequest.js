"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatJoinRequestAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class ChatJoinRequestAction extends Generic_1.GenericAction {
    handle(_packet) {
        let packet = this.prepack(_packet);
        if (packet[0]) {
            const request = packet[0].requests.add(packet[1], true, { id: packet[1].invite_link });
            return this.emit(ChatJoinRequestAction.pointer, request);
        }
        return;
    }
}
exports.ChatJoinRequestAction = ChatJoinRequestAction;
ChatJoinRequestAction.pointer = ClientEvent_1.ClientEvent.ChatJoinRequest;
//# sourceMappingURL=ChatJoinRequest.js.map