"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTopicClosedAction = void 0;
const ClientEvent_1 = require("../../../Types/ClientEvent");
const Generic_1 = require("../Generic");
class ForumTopicClosedAction extends Generic_1.GenericAction {
    handleMessage(_packet) {
        let packed = this.prepack(_packet);
        let { _chat, message_thread_id, topic } = packed[1];
        let packet = {
            type: 'closed',
            _chat, message_thread_id,
            ...topic,
        };
        return this.client.actions[ClientEvent_1.ClientEvent.ForumTopicCreated].generate(packet);
    }
}
exports.ForumTopicClosedAction = ForumTopicClosedAction;
//# sourceMappingURL=ForumTopicClosed.js.map