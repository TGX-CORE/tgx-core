import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultContactPayload {
    type: string;
    id: string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export declare class InlineQueryResultContact extends BaseBuilder<InlineQueryResultContactPayload> implements InlineQueryResultContactPayload {
    type: string;
    id: string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    setId(id: string): this;
    setPhoneNumber(phoneNumber: string): this;
    setFirstName(firstName: string): this;
    setLastName(lastName?: string): this;
    setVcard(vcard?: string): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
    setThumbnailUrl(thumbnailUrl?: string): this;
    setThumbnailWidth(thumbnailWidth?: number): this;
    setThumbnailHeight(thumbnailHeight?: number): this;
}
//# sourceMappingURL=InlineQueryResultContact.d.ts.map