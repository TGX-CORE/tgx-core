import type { MessagePacket } from '../Managers/MessagesManager'
import type { PollPacket } from '../../Classes/Poll'

import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export class PollAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.Poll

    public handleMessage(packet: MessagePacket){
        let { poll, chat: { id } = { }, message_id, business_connection_id } = packet

        return this.handle({ ...poll!, chat_id: id , message_id, business_connection_id }, false)
    }

    public override handle(packet: PollPacket, emit?: boolean){
        let poll = this.client.polls.cache.get(packet.id)

        if(poll){
            poll._patch(packet)
        } else {
            this.client.polls._add(packet, true)
        }

        return emit ? this.emit(PollAction.pointer, poll) : poll
    }

}