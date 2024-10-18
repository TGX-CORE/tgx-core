import type { InvoicePacket } from '../Types/Invoice'
import type { Client } from '../Client/Client'

import { BaseClass } from './BaseClass'

export class Invoice extends BaseClass<Invoice, InvoicePacket> {

    public declare chat_id: number

    public constructor(client: Client, packet: InvoicePacket){
        super(client)

        this._patch(packet)
    }

    public override _patch(packet: InvoicePacket): this {
        return this._patch(packet)
    }

}