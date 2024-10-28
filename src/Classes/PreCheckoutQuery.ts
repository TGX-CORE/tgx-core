import type { OrderInfo } from '../Types/Invoice'
import type { Client } from '../Client/Client'
import type { User, UserPacket } from './User'

import { BaseClass } from './BaseClass'
import { Routes } from '../Types/Routes'

export interface PreCheckoutQueryPacket {
    id: string
    from?: UserPacket
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: OrderInfo
}

export class PreCheckoutQuery extends BaseClass<PreCheckoutQuery, PreCheckoutQueryPacket> implements PreCheckoutQueryPacket {

    private declare _from: number

    public declare id: string
    public declare currency: string
    public declare total_amount: number
    public declare invoice_payload: string

    public shipping_option_id?: string
    public order_info?: OrderInfo

    public constructor(client: Client, packet: PreCheckoutQuery){
        super(client, packet)
    }

    public async ok(): Promise<boolean> {
        let { id: pre_checkout_query_id } = this
        return this.client.rest.post(Routes.AnswerPreCheckoutQuery, { pre_checkout_query_id, ok: true }, { ok: true })
    }

    public async notOk(error_message: string): Promise<boolean> {
        let { id: pre_checkout_query_id } = this
        return this.client.rest.post(Routes.AnswerPreCheckoutQuery, { pre_checkout_query_id, error_message, ok: false }, { ok: true })
    }

    public get user(): User {
        return this.client.users.cache.get(this._from)!
    }

}