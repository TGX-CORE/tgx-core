"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTopicCreatedAction = void 0;
const ForumTopic_1 = require("../../../Classes/ForumTopic");
const GenericCreator_1 = require("../GenericCreator");
const ClientEvent_1 = require("../../../Types/ClientEvent");
class ForumTopicCreatedAction extends GenericCreator_1.GenericCreator {
    constructor(client) {
        super(client, ForumTopic_1.ForumTopic, ForumTopicCreatedAction.pointer);
    }
    handleMessage(_packet) {
        let packed = this.prepack(_packet);
        let { _chat, message_thread_id, topic } = packed[1];
        let packet = {
            type: 'created',
            _chat, message_thread_id,
            ...topic,
        };
        return this.generate(packet);
    }
    generate(_packet) {
        let forum = this.handle(_packet, false);
        forum.chat.topics._add(forum, true, { force: true });
        return forum;
    }
}
exports.ForumTopicCreatedAction = ForumTopicCreatedAction;
ForumTopicCreatedAction.pointer = ClientEvent_1.ClientEvent.ForumTopicCreated;
//# sourceMappingURL=ForumTopicCreated.js.map