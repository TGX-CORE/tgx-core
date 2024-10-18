import type { OrderInfo } from '../Types/Invoice';
import type { Client } from '../Client/Client';
import type { Chat } from '../Types/Message';
import type { Message } from './Message';
import { BaseClass } from './BaseClass';
import { User } from './User';
export interface SuccessfulPayment {
    chat_id: number;
    from: User;
    user_id: number;
    currency: string;
    message_id: number;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: number;
    order_info?: OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
}
export declare class SuccessfulPayment extends BaseClass<SuccessfulPayment, SuccessfulPayment> {
    constructor(client: Client, packet: SuccessfulPayment);
    refund(): Promise<boolean>;
    get user(): User;
    get chat(): Chat;
    get message(): Message;
}
//# sourceMappingURL=SuccessfulPayment.d.ts.map