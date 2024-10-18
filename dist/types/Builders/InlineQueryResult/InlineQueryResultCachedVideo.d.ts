import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultCachedVideoPayload {
    type: string;
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultCachedVideo extends BaseBuilder<InlineQueryResultCachedVideoPayload> implements InlineQueryResultCachedVideoPayload {
    type: string;
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setVideoFileId(videoFileId: string): this;
    setTitle(title: string): this;
    setDescription(description?: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setShowCaptionAboveMedia(showCaptionAboveMedia?: boolean): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultCachedVideo.d.ts.map