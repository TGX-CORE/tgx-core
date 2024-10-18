import type { ShippingOptions } from '../Builders/ShippingOptions';
import type { ShippingAddress } from '../Types/Invoice';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { User } from './User';
export interface ShippingQuery {
    id: string;
    from: User;
    invoice_payload: string;
    shipping_address: ShippingAddress;
}
export declare class ShippingQuery extends BaseClass<ShippingQuery> {
    id: string;
    from: User;
    invoice_payload: string;
    shipping_address: ShippingAddress;
    constructor(client: Client, packet: ShippingQuery);
    ok(shipping_options: ShippingOptions): Promise<boolean>;
    notOk(error_message: string): Promise<boolean>;
    get user(): User;
}
//# sourceMappingURL=ShippingQuery.d.ts.map