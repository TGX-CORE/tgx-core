"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollAnswer = void 0;
const BaseClass_1 = require("./BaseClass");
class PollAnswer extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get poll() {
        return this.client.polls.cache.get(this.poll_id);
    }
    get id() {
        return this._voter_chat ?? this._from;
    }
    get user() {
        return this._from ? this.client.users.cache.get(this._from) : undefined;
    }
    get voter_chat() {
        return this._voter_chat ? this.client.chats.cache.get(this._voter_chat) : undefined;
    }
}
exports.PollAnswer = PollAnswer;
//# sourceMappingURL=PollAnswer.js.map