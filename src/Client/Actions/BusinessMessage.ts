import type { MessagePacket } from '../Managers/MessagesManager'
import type { Message } from '../../Classes/Message'

import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export interface BusinessMessagePacket extends MessagePacket {
    edited: boolean
}

export class BusinessMessageAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.BusinessMessage

    public override handle(packet: BusinessMessagePacket): Message|void {
        let message = this.client.actions.message.handle(packet, false)

        return this.emitMessage(BusinessMessageAction.pointer, message)
    }

}