"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTopicReopenedAction = void 0;
const ClientEvent_1 = require("../../../Types/ClientEvent");
const Generic_1 = require("../Generic");
class ForumTopicReopenedAction extends Generic_1.GenericAction {
    handleMessage(_packet) {
        let packed = this.prepack(_packet);
        let { _chat, message_thread_id, topic } = packed[1];
        let packet = {
            type: 'reopened',
            _chat, message_thread_id,
            ...topic,
        };
        return this.client.actions[ClientEvent_1.ClientEvent.ForumTopicCreated].generate(packet);
    }
}
exports.ForumTopicReopenedAction = ForumTopicReopenedAction;
//# sourceMappingURL=ForumTopicsReopened.js.map