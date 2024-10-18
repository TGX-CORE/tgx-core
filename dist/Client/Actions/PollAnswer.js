"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollAnswerAction = void 0;
const PollAnswer_1 = require("../../Classes/PollAnswer");
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class PollAnswerAction extends Generic_1.GenericAction {
    handle(packet) {
        const poll = this.client.polls.cache.get(packet.poll_id);
        if (poll) {
            const answer = new PollAnswer_1.PollAnswer(this.client, packet);
            poll?.answers.update(answer.id, packet.option_ids);
            return this.emit(PollAnswerAction.pointer, poll, answer);
        }
        return this.client.logger.warn('A poll answer has been rejected; the poll has not been cached.');
    }
}
exports.PollAnswerAction = PollAnswerAction;
PollAnswerAction.pointer = ClientEvent_1.ClientEvent.PollAnswer;
//# sourceMappingURL=PollAnswer.js.map