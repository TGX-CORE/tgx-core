import type { OrderInfo } from '../Types/Invoice';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { User } from './User';
export interface PreCheckoutQuery {
    id: string;
    from: User;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
}
export declare class PreCheckoutQuery extends BaseClass<PreCheckoutQuery> {
    id: string;
    from: User;
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
//# sourceMappingURL=PreCheckoutQuery.d.ts.map