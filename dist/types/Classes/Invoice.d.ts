import type { InvoicePacket } from '../Types/Invoice';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
export declare class Invoice extends BaseClass<Invoice> {
    chat_id: number;
    constructor(client: Client, packet: InvoicePacket);
    _patch(packet: InvoicePacket): this;
}
//# sourceMappingURL=Invoice.d.ts.map