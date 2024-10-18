import type { MessagePacket } from '../Managers/MessagesManager'
import type { Message } from '../../Classes/Message'

import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export interface EditMessagePacket extends MessagePacket {
    edited: boolean
}

export class EditedMessageAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.EditedMessage

    public override handle(packet: EditMessagePacket): Message|void {
        packet.edited = true

        return this.client.actions.message.handle(packet)
    }

}