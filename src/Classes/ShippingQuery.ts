import type { ShippingOptions } from '../Builders/ShippingOptions'
import type { ShippingAddress } from '../Types/Invoice'
import type { User, UserPacket } from './User'
import type { Client } from '../Client/Client'

import { BaseClass } from './BaseClass'

export interface ShippingQueryPacket {
    id: string
    from?: UserPacket
    invoice_payload: string
    shipping_address: ShippingAddress
}

export class ShippingQuery extends BaseClass<ShippingQuery, ShippingQueryPacket> implements ShippingQueryPacket {

    private declare _from: number

    public declare id: string
    public declare invoice_payload: string
    public declare shipping_address: ShippingAddress

    public constructor(client: Client, packet: ShippingQuery){
        super(client, packet)
    }

    public async ok(shipping_options: ShippingOptions): Promise<boolean> {
        return this.client.api.answerShippingQuery(null, {
            params: { shipping_query_id: this.id, ok: true, shipping_options },
            returnOk: true
        })
    }

    public async notOk(error_message: string): Promise<boolean> {
        return this.client.api.answerShippingQuery(null, {
            params: { shipping_query_id: this.id, ok: false, error_message },
            returnOk: true
        })
    }

    public get user(): User {
        return this.client.users.cache.get(this._from)!
    }

}