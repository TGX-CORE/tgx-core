import type { MessagePacket } from '../../Client/Managers/MessagesManager'
import type { Message } from '../../Classes/Message'
import type { Client } from '../Client'

import { GenericAction } from './Generic'

export class MessageAction extends GenericAction {

    [key: string]: any
    public constructor(client: Client){
        super(client)
    }

    public override handle(_packet: MessagePacket, parse: boolean = true): Message|void {
        let packet: any[] = this.prepack(_packet) as any[]

        if(packet[0]){
            let message = packet[0].messages.cache.get(packet[0]._message)

            if(message){
                message._patch(packet)
            } else {
                message = packet[0].messages._add(packet[1], true, { id: packet[1].message_id })
                          packet[0].last_message_id = packet[1].message_id
            }

            if( message.is_topic_message ){
                const { message_thread_id, forum_topic_created, _chat } = message
                packet[0].topics._add({ ...forum_topic_created, _chat, message_thread_id }, true, { id: message_thread_id })
            }

            if( 'members' in packet[0] ){
                let { _from, _chat } = packet[1]
                this.partials.member({ _user: _from, _chat }, _chat)
            }

            return this.emitMessage(false, message, parse)
        }
        
        return
    }

}