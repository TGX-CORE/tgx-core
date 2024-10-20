import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard';
import { LabeledPrices } from '../Builders/LabeledPrices';
import type { ReplyParameters } from './Message';
export interface CreateInvoiceLinkPayload {
    title: string;
    description: string;
    payload: string;
    provider_token?: string;
    currency: string;
    prices: LabeledPrice[];
    max_tip_amount?: number;
    suggested_tip_amounts?: number[];
    provider_data?: string;
    photo_url?: string;
    photo_size?: number;
    photo_width?: number;
    photo_height?: number;
    need_name?: boolean;
    need_phone_number?: boolean;
    need_email?: boolean;
    need_shipping_address?: boolean;
    send_phone_number_to_provider?: boolean;
    send_email_to_provider?: boolean;
    is_flexible?: boolean;
}
export interface SendInvoicePayload extends CreateInvoiceLinkPayload {
    chat_id: number | string;
    message_thread_id?: number;
    start_parameter?: string;
    disable_notification?: boolean;
    protect_content?: boolean;
    message_effect_id?: string;
    reply_parameters?: ReplyParameters;
    reply_markup?: InlineKeyboardMarkup;
}
export interface StoredInvoice extends Omit<SendInvoicePayload, 'chat_id' | 'message_thread_id' | 'provider_token' | 'prices'> {
    prices: LabeledPrices;
}
export interface InvoicePacket {
    title: string;
    description: string;
    start_parameter: string;
    currency: string;
    total_amount: number;
}
export interface ShippingAddress {
    country_code: string;
    state?: string;
    city: string;
    street_line1: string;
    street_line2?: string;
    post_code: string;
}
export interface OrderInfo {
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: ShippingAddress;
}
/**
 * Represents a portion of a price.
 */
export interface LabeledPrice {
    /**
     * The label of the portion of the price.
     *
     * An example of the label would be Base Shipping Fee, Taxes, Transaction Fee, etc.
     */
    label: string;
    /**
     * Price of the product in the smallest units of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145.
     *
     * See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
     */
    amount: number;
}
