import { ChatMemberUpdated, ChatMemberUpdatedPacket } from '../../Classes/ChatMemberUpdated'
import { ClientEvent } from '../../Types/ClientEvent'
import { Member } from '../../Classes/Member'
import { GenericAction } from './Generic'

export class ChatMemeberUpdateAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.ChatMemberUpdated

    public override handle(_packet: ChatMemberUpdatedPacket): ChatMemberUpdated|void {
        let packet: any[] = this.prepack(_packet) as any[]

        if(packet[0]){
            let existing = packet[0].members.cache.get(packet[1]._from)

            if(existing){
                existing._patch(packet[1].new_chat_member)
            } else {
                existing = packet[0].members._add(packet[1].new_chat_member, true, { id: packet[1].new_chat_member.id })
            }

            return this.emit(ChatMemeberUpdateAction.pointer, new Member(this.client, packet[1].old_chat_member), existing)
        }

        return
    }

}