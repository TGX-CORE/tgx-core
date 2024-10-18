import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputFile } from './InputFile';
import { Builder } from '../Builder';
export interface InputMediaDocumentPayload {
    type: 'document';
    media: string;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    disable_content_type_detection?: boolean;
}
export declare class InputMediaDocument extends Builder<InputMediaDocumentPayload> {
    constructor();
    media(value: string): this;
    thumbnail(value?: InputFile | string): this;
    caption(value?: string): this;
    parseMode(value?: string): this;
    captionEntities(value?: Array<MessageEntity>): this;
    disableContentTypeDetection(value?: boolean): this;
}
//# sourceMappingURL=InputMediaDocument.d.ts.map