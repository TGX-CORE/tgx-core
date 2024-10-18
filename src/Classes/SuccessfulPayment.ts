import type { OrderInfo } from '../Types/Invoice'
import type { User, UserPacket } from './User'
import type { Client } from '../Client/Client'
import type { Chat } from '../Types/Message'
import type { Message } from './Message'

import { BaseClass } from './BaseClass'

export interface SerializedSuccessfulPayment extends SuccessfulPaymentPacket {

}

export interface SuccessfulPaymentPacket {
    chat_id?: number
    from?: UserPacket
    user_id?: number
    currency: string
    message_id: number
    total_amount: number
    invoice_payload: string
    shipping_option_id?: number
    order_info?: OrderInfo
    telegram_payment_charge_id: string
    provider_payment_charge_id: string
}

export class SuccessfulPayment extends BaseClass<SuccessfulPayment, SerializedSuccessfulPayment> implements SerializedSuccessfulPayment {

    private declare _message: number
    private declare _chat: number
    private declare _from: number

    public declare currency: string
    public declare message_id: number
    public declare total_amount: number
    public declare invoice_payload: string
    public declare telegram_payment_charge_id: string
    public declare provider_payment_charge_id: string

    public constructor(client: Client, packet: SerializedSuccessfulPayment){
        super(client, packet)
    }

    public async refund(): Promise<boolean> {
        return this.client.payments.refund(this.user.id, this.telegram_payment_charge_id)
    }

    public get user(): User {
        return this.client.users.cache.get(this._from)!
    }

    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    public get message(): Message {
        return this.chat?.message.cache.get(this._message)!
    }

}