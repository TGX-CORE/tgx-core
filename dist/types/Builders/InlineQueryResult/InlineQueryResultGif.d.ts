import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultGifPayload {
    type: string;
    id: string;
    gif_url: string;
    gif_width?: number;
    gif_height?: number;
    gif_duration?: number;
    thumbnail_url: string;
    thumbnail_mime_type?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultGif extends BaseBuilder<InlineQueryResultGifPayload> implements InlineQueryResultGifPayload {
    type: string;
    id: string;
    gif_url: string;
    gif_width?: number;
    gif_height?: number;
    gif_duration?: number;
    thumbnail_url: string;
    thumbnail_mime_type?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setGifUrl(gifUrl: string): this;
    setGifWidth(gifWidth?: number): this;
    setGifHeight(gifHeight?: number): this;
    setGifDuration(gifDuration?: number): this;
    setThumbnailUrl(thumbnailUrl: string): this;
    setThumbnailMimeType(thumbnailMimeType?: string): this;
    setTitle(title?: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setShowCaptionAboveMedia(showCaptionAboveMedia?: boolean): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultGif.d.ts.map