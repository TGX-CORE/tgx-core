import { ChatJoinRequest, ChatJoinRequestPacket } from '../../Classes/ChatJoinRequest'
import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export class ChatJoinRequestAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.ChatJoinRequest

    public override handle(_packet: ChatJoinRequestPacket): ChatJoinRequest|void {
        let packet: any[] = this.prepack(_packet) as any[]

        if(packet[0]){
            const request = packet[0].requests.add(packet[1], true, { id: packet[1].invite_link })
            return this.emit(ChatJoinRequestAction.pointer, request)
        }

        return 
    }

}