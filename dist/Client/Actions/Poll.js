"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class PollAction extends Generic_1.GenericAction {
    handleMessage(packet) {
        let { poll, chat: { id } = {}, message_id, business_connection_id } = packet;
        return this.handle({ ...poll, chat_id: id, message_id, business_connection_id }, false);
    }
    handle(packet, emit) {
        let poll = this.client.polls.cache.get(packet.id);
        if (poll) {
            poll._patch(packet);
        }
        else {
            this.client.polls._add(packet, true);
        }
        return emit ? this.emit(PollAction.pointer, poll) : poll;
    }
}
exports.PollAction = PollAction;
PollAction.pointer = ClientEvent_1.ClientEvent.Poll;
//# sourceMappingURL=Poll.js.map