import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultCachedVoicePayload {
    type: string;
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultCachedVoice extends BaseBuilder<InlineQueryResultCachedVoicePayload> implements InlineQueryResultCachedVoicePayload {
    type: string;
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setVoiceFileId(voiceFileId: string): this;
    setTitle(title: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultCachedVoice.d.ts.map