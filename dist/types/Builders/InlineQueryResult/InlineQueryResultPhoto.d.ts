import type { MessageEntity } from './packages/tgx-core/src/Client/Managers/MessagesManager';
import type { InputMessageContent } from './packages/tgx-core/src/Builders/Input/Content/InputMessageContent';
import type { InlineKeyboardMarkup } from './packages/tgx-core/src/Builders/InlineKeyboardMarkup';
import { BaseBuilder } from './packages/tgx-core/src/Builders/BaseBuilder';
export interface InlineQueryResultPhotoPayload {
    type: string;
    id: string;
    photo_url: string;
    thumbnail_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultPhoto extends BaseBuilder<InlineQueryResultPhotoPayload> implements InlineQueryResultPhotoPayload {
    type: string;
    id: string;
    photo_url: string;
    thumbnail_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setPhotoUrl(photoUrl: string): this;
    setThumbnailUrl(thumbnailUrl: string): this;
    setPhotoWidth(photoWidth?: number): this;
    setPhotoHeight(photoHeight?: number): this;
    setTitle(title?: string): this;
    setDescription(description?: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setShowCaptionAboveMedia(showCaptionAboveMedia?: boolean): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultPhoto.d.ts.map