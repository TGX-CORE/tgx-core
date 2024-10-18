import type { OrderInfo } from '../Types/Invoice';
import type { User, UserPacket } from './User';
import type { Client } from '../Client/Client';
import type { Chat } from '../Types/Message';
import type { Message } from './Message';
import { BaseClass } from './BaseClass';
export interface SerializedSuccessfulPayment extends SuccessfulPaymentPacket {
}
export interface SuccessfulPaymentPacket {
    chat_id?: number;
    from?: UserPacket;
    user_id?: number;
    currency: string;
    message_id: number;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: number;
    order_info?: OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
}
export declare class SuccessfulPayment extends BaseClass<SuccessfulPayment, SerializedSuccessfulPayment> implements SerializedSuccessfulPayment {
    private _message;
    private _chat;
    private _from;
    currency: string;
    message_id: number;
    total_amount: number;
    invoice_payload: string;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
    constructor(client: Client, packet: SerializedSuccessfulPayment);
    refund(): Promise<boolean>;
    get user(): User;
    get chat(): Chat;
    get message(): Message;
}
