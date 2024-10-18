import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultCachedStickerPayload {
    type: string;
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare class InlineQueryResultCachedSticker extends BaseBuilder<InlineQueryResultCachedStickerPayload> implements InlineQueryResultCachedStickerPayload {
    type: string;
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    setId(id: string): this;
    setStickerFileId(stickerFileId: string): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
}
//# sourceMappingURL=InlineQueryResultCachedSticker.d.ts.map