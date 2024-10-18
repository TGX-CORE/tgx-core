import type { User } from '../Classes/User';
import type { Chat } from './Message';
export interface PhotoSize {
    file_id: string;
    file_unique_id: string;
    weight: number;
    height: number;
    file_size?: number;
}
export interface Video {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumbnail?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}
export interface PhotoSize {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size?: number;
}
export interface Story {
    chat: Chat;
    id: number;
}
export interface Voice {
    file_id: string;
    file_unique_id: string;
    duration: number;
    mime_type?: string;
    file_size?: number;
}
export interface Game {
    title: string;
    description: string;
    photo: PhotoSize[];
    text?: string;
    text_entities?: MessageEntity[];
    animation?: Animation;
}
export interface MessageEntity {
    type: string;
    offset: number;
    length: number;
    url: string;
    user: User;
    language: string;
    custom_emoji_id: string;
}
export interface TextQuote {
    text: string;
    entities?: MessageEntity[];
    position: number;
    is_manual?: true;
}
export interface WebAppData {
    data: string;
    button_text: string;
}
export interface RefundedPayment {
    currency: string;
    total_amount: number;
    invoice_payload: string;
    telegram_payment_charge_id: string;
    provider_payment_charge_id?: string;
}
export interface SharedUser {
    user_id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo?: PhotoSize[];
}
export interface WriteAccessAllowed {
    from_request?: boolean;
    web_app_name?: string;
    from_attachment_menu?: boolean;
}
export interface UsersShared {
    request_id: number;
    users: SharedUser[];
}
export interface ChatShared {
    request_id: number;
    chat_id: number;
    title?: string;
    username?: string;
    photo?: PhotoSize[];
}
export interface ProximityAlertTriggered {
    traveler: User;
    watcher: User;
    distance: number;
}
//# sourceMappingURL=Common.d.ts.map