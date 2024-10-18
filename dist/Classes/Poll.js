"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = exports.PollAnswers = void 0;
const BaseClass_1 = require("./BaseClass");
const shared_1 = require("../Internals/shared");
class PollAnswers {
    constructor(options) {
        this.records = {};
        for (let i = 0; i < options.length; i++) {
            this.records[i] = [];
        }
    }
    /**
     * Updates the answers of a user.
     *
     * @param user_id The id of the user.
     * @param ids The ids of the answers of the users.
     */
    update(user_id, ids) {
        for (let id in this.records) {
            const int = Number(id);
            if (this.answered(int, user_id) && !(0, shared_1.has)(ids, int)) {
                const index = this.records[int].indexOf(user_id);
                this.records[int].splice(index, 1);
            }
            if (!this.answered(int, user_id) && (0, shared_1.has)(ids, int)) {
                this.records[int].push(user_id);
            }
        }
    }
    /**
     * Checks if the user has answered an answer with the id.
     *
     * @param id The id of the answer.
     * @param user_id The id of the user to check.
     */
    answered(id, user_id) {
        return (0, shared_1.has)(this.records[id], user_id);
    }
}
exports.PollAnswers = PollAnswers;
class Poll extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
        if ('options' in packet && !this.is_anonymous) {
            this.answers = new PollAnswers(packet.options);
        }
        this._patch(packet);
    }
    async stop(reply_markup) {
        const { _message, _chat, business_connection_id } = this;
        return this.client.api.stopPoll(null, {
            params: { message_id: _message, chat_id: _chat, business_connection_id, reply_markup },
            returnOk: true
        });
    }
    get chat() {
        return this._chat ? this.client.chats.cache.get(this._chat) : undefined;
    }
}
exports.Poll = Poll;
//# sourceMappingURL=Poll.js.map