import type { MessageEntities } from '../Builders/MessageEntities';
import type { LabeledPrices } from '../Builders/LabeledPrices';
import type { MessageEntityPayload } from './MessageEntity';
export type InputMessageContent = typeof InputMessage.Text | typeof InputMessage.Location | typeof InputMessage.Contact | typeof InputMessage.Venue | typeof InputMessage.Invoice;
export interface LinkPreviewOptions {
    is_disabled?: boolean;
    url?: string;
    prefer_small_media?: boolean;
    prefer_large_media?: boolean;
    show_above_text?: boolean;
}
export interface InputLocationMessageContentPayload {
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}
export interface InputTextMessageContentPayload {
    message_text: string;
    parse_mode?: string;
    entities?: MessageEntities | MessageEntityPayload[];
    link_preview_options?: LinkPreviewOptions;
}
export interface InputVenueMessageContentPayload {
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
}
export interface InputContactMessageContentPayload {
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
}
export interface InputInvoiceMessageContentPayload {
    title: string;
    description: string;
    payload: string;
    provider_token?: string;
    currency: string;
    prices: LabeledPrices;
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
export interface InputContactMessageContentPayload {
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
}
export declare namespace InputMessage {
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Text(payload: InputTextMessageContentPayload): InputTextMessageContentPayload;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Location(payload: InputLocationMessageContentPayload): InputLocationMessageContentPayload;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Venue(payload: InputVenueMessageContentPayload): InputVenueMessageContentPayload;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Contact(payload: InputContactMessageContentPayload): InputContactMessageContentPayload;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Invoice(payload: InputInvoiceMessageContentPayload): InputInvoiceMessageContentPayload;
}
