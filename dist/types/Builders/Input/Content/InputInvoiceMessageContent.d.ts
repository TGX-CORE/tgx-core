import { Builder } from '../../Builder';
export interface LabeledPrice {
    label: string;
    amount: number;
}
export interface InputInvoiceMessageContentPayload {
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
export declare class InputInvoiceMessageContent extends Builder<InputInvoiceMessageContentPayload> {
    constructor();
    title(value: string): this;
    description(value: string): this;
    payload(value: string): this;
    providerToken(value?: string): this;
    currency(value: string): this;
    prices(value: LabeledPrice[]): this;
    maxTipAmount(value?: number): this;
    suggestedTipAmounts(value?: number[]): this;
    providerData(value?: string): this;
    photoUrl(value?: string): this;
    photoSize(value?: number): this;
    photoWidth(value?: number): this;
    photoHeight(value?: number): this;
    needName(value?: boolean): this;
    needPhoneNumber(value?: boolean): this;
    needEmail(value?: boolean): this;
    needShippingAddress(value?: boolean): this;
    sendPhoneNumberToProvider(value?: boolean): this;
    sendEmailToProvider(value?: boolean): this;
    flexible(value?: boolean): this;
}
//# sourceMappingURL=InputInvoiceMessageContent.d.ts.map