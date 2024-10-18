import type { MessageEntity } from './packages/tgx-core/src/Client/Managers/MessagesManager';
import type { InputMessageContent } from './packages/tgx-core/src/Builders/Input/Content/InputMessageContent';
import type { InlineKeyboardMarkup } from './packages/tgx-core/src/Builders/InlineKeyboardMarkup';
import { BaseBuilder } from './packages/tgx-core/src/Builders/BaseBuilder';
export interface InlineQueryResultDocumentPayload {
    type: string;
    id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    document_url: string;
    mime_type: 'application/pdf' | 'application/zip';
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export declare class InlineQueryResultDocument extends BaseBuilder<InlineQueryResultDocumentPayload> implements InlineQueryResultDocumentPayload {
    type: string;
    id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    document_url: string;
    mime_type: 'application/pdf' | 'application/zip';
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    setId(id: string): this;
    setTitle(title: string): this;
    setCaption(caption?: string): this;
    setParseMode(parseMode?: string): this;
    setCaptionEntities(captionEntities?: MessageEntity[]): this;
    setDocumentUrl(documentUrl: string): this;
    setMimeType(mimeType: 'application/pdf' | 'application/zip'): this;
    setDescription(description?: string): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
    setThumbnailUrl(thumbnailUrl?: string): this;
    setThumbnailWidth(thumbnailWidth?: number): this;
    setThumbnailHeight(thumbnailHeight?: number): this;
}
//# sourceMappingURL=InlineQueryResultDocument.d.ts.map