"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollAction = void 0;
const PollManager_1 = require("../../Managers/PollManager");
const shared_1 = require("../../../Internals/shared");
const Generic_1 = require("../Generic");
const Client_1 = require("../../../Types/Client");
class PollAction extends Generic_1.GenericAction {
    constructor(client) {
        super(client);
    }
    handleMessage(packet) {
        let { poll, chat, message_id, business_connection_id } = packet;
        let updated_packet = { ...poll, chat_id: chat.id, message_id, business_connection_id };
        return this.handle(updated_packet, true, false);
    }
    handle(packet, force, parse = true) {
        let poll = this.client.polls.cache.get(packet.id);
        if (poll || !poll && force || (0, shared_1.has)(this.client.options.poll?.allowed_updates?.value, PollManager_1.AllowedUpdates.UncachedPoll)) {
            if (poll) {
                poll._patch(packet);
            }
            else {
                poll = this.client.polls._add(packet, true);
            }
            return parse ? this.emit(PollAction.pointer, poll) : poll;
        }
        return this.client.logger.warn('A poll update has been rejected; the poll has not been cached.');
    }
}
exports.PollAction = PollAction;
PollAction.pointer = Client_1.ClientEvent.Poll;
//# sourceMappingURL=Poll.js.map