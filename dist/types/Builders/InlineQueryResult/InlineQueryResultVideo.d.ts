import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultVideoPayload {
    type: string;
    id: string;
    video_url: string;
    mime_type: 'text/html' | 'video/mp4';
    thumbnail_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultVideo extends BaseBuilder<InlineQueryResultVideoPayload> implements InlineQueryResultVideoPayload {
    type: string;
    id: string;
    video_url: string;
    mime_type: 'text/html' | 'video/mp4';
    thumbnail_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setVideoUrl(videoUrl: string): this;
    setMimeType(mimeType: 'text/html' | 'video/mp4'): this;
    setThumbnailUrl(thumbnailUrl: string): this;
    setTitle(title: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setShowCaptionAboveMedia(showCaptionAboveMedia?: boolean): this;
    setVideoWidth(videoWidth?: number): this;
    setVideoHeight(videoHeight?: number): this;
    setVideoDuration(videoDuration?: number): this;
    setDescription(description?: string): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultVideo.d.ts.map