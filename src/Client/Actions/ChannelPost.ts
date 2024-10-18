import type { MessagePacket } from '../Managers/MessagesManager'
import type { Message } from '../../Classes/Message'

import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export class ChannelPostAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.ChannelPost

    public override handle(packet: MessagePacket): Message|void{
        const message = this.client.actions.message.handle(packet, false)

        if( message ){
            return this.emitMessage(ChannelPostAction.pointer, message)
        }
        
        return
    }

}