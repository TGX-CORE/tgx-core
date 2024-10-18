"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewChatMembersAction = void 0;
const ClientEvent_1 = require("../../../Types/ClientEvent");
const Generic_1 = require("../Generic");
class NewChatMembersAction extends Generic_1.GenericAction {
    handleMessage(message) {
        let packed = this.prepack(message);
        if (packed[0]) {
            let { new_chat_members } = packed[1];
            for (let member of new_chat_members) {
                this.client.users._add(member);
                member = this.partials.member({
                    id: member.id,
                    user: member
                }, packed[0].id);
                this.emit(NewChatMembersAction.pointer, member);
            }
        }
    }
}
exports.NewChatMembersAction = NewChatMembersAction;
NewChatMembersAction.pointer = ClientEvent_1.ClientEvent.NewChatMembers;
//# sourceMappingURL=NewChatMembers.js.map