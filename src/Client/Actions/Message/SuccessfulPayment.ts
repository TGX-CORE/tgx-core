import { SuccessfulPayment, type SerializedSuccessfulPayment, type SuccessfulPaymentPacket } from '../../../Classes/SuccessfulPayment'
import type { Client } from '../../../Client/Client'

import { ClientEvent } from '../../../Types/ClientEvent'
import { GenericCreator } from '../GenericCreator'
import { Message } from '../../../Classes/Message'

export class SuccessfulPaymenAction extends GenericCreator<SuccessfulPayment, SerializedSuccessfulPayment> {

    public static pointer: ClientEvent = ClientEvent.SuccessfulPayment

    public constructor(client: Client){
        super(client, SuccessfulPayment, SuccessfulPaymenAction.pointer)
    }

    public override handleMessage(_packet: Message){
        let packed: any[] = this.prepack(_packet) as any[]
        
        let { _chat, _from, successful_payment } = packed[1]
        let packet = {
            _chat, _from,
            ...successful_payment
        }

        return this.handle(packet)
    }

}