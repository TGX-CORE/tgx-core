import type { MessagePacket } from '../Managers/MessagesManager'

import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export class EditedBusinessMessageAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.EditedBusinessMessage

    public override handle(packet: MessagePacket){
        let message = this.client.actions.message.handle(packet, false)

        return this.emitMessage(EditedBusinessMessageAction.pointer, message)
    }

}