import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultVoicePayload {
    type: string;
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultVoice extends BaseBuilder<InlineQueryResultVoicePayload> implements InlineQueryResultVoicePayload {
    type: string;
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setVoiceUrl(voiceUrl: string): this;
    setTitle(title: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setVoiceDuration(voiceDuration?: number): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultVoice.d.ts.map