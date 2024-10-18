import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultMpeg4GifPayload {
    type: string;
    id: string;
    mpeg4_url: string;
    mpeg4_width?: number;
    mpeg4_height?: number;
    mpeg4_duration?: number;
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
export declare class InlineQueryResultMpeg4Gif extends BaseBuilder<InlineQueryResultMpeg4GifPayload> implements InlineQueryResultMpeg4GifPayload {
    type: string;
    id: string;
    mpeg4_url: string;
    mpeg4_width?: number;
    mpeg4_height?: number;
    mpeg4_duration?: number;
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
    setMpeg4Url(mpeg4Url: string): this;
    setMpeg4Width(mpeg4Width?: number): this;
    setMpeg4Height(mpeg4Height?: number): this;
    setMpeg4Duration(mpeg4Duration?: number): this;
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
//# sourceMappingURL=InlineQueryResultMpeg4Gif.d.ts.map