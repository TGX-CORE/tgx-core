import type { OrderInfo } from '../Types/Invoice';
import type { Client } from '../Client/Client';
import type { User, UserPacket } from './User';
import { BaseClass } from './BaseClass';
export interface PreCheckoutQueryPacket {
    id: string;
    from?: UserPacket;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
}
export declare class PreCheckoutQuery extends BaseClass<PreCheckoutQuery, PreCheckoutQueryPacket> implements PreCheckoutQueryPacket {
    private _from;
    id: string;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    constructor(client: Client, packet: PreCheckoutQuery);
    notOk(error_message: string): Promise<boolean>;
    ok(): Promise<boolean>;
    get user(): User;
}
