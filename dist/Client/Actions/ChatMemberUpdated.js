"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMemeberUpdateAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class ChatMemeberUpdateAction extends Generic_1.GenericAction {
    handle(_packet) {
        let packet = this.prepack(_packet);
        if (packet[0]) {
            let existing = packet[0].members.cache.get(packet[1]._from);
            if (existing) {
                existing._patch(packet[1].new_chat_member);
            }
            else {
                existing = packet[0].members._add();
            }
        }
        // if(packet[0]){
        //     let existing = packet[0].members.cache.get(packet[1]._from)
        //     if(existing){
        //         existing._patch(packet[1].new_chat_member)
        //     } else {
        //         existing = packet[0].members._add(packet[1].new_chat_member, true, { id: packet[1].new_chat_member })
        //     }
        //     return this.emit(ChatMemeberUpdateAction.pointer, new Member(), existing)
        // }
        return;
    }
}
exports.ChatMemeberUpdateAction = ChatMemeberUpdateAction;
ChatMemeberUpdateAction.pointer = ClientEvent_1.ClientEvent.ChatMemberUpdated;
//# sourceMappingURL=ChatMemberUpdated.js.map