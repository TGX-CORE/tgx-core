import type { ShippingOptions } from '../Builders/ShippingOptions';
import type { ShippingAddress } from '../Types/Invoice';
import type { User, UserPacket } from './User';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
export interface ShippingQueryPacket {
    id: string;
    from?: UserPacket;
    invoice_payload: string;
    shipping_address: ShippingAddress;
}
export declare class ShippingQuery extends BaseClass<ShippingQuery, ShippingQueryPacket> implements ShippingQueryPacket {
    private _from;
    id: string;
    invoice_payload: string;
    shipping_address: ShippingAddress;
    constructor(client: Client, packet: ShippingQuery);
    ok(shipping_options: ShippingOptions): Promise<boolean>;
    notOk(error_message: string): Promise<boolean>;
    get user(): User;
}
