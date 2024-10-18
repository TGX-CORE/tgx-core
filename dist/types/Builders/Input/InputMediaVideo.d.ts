import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import { Builder } from '../Builder';
import { InputFile } from './InputFile';
export interface InputMediaVideoPayload {
    type: 'video';
    media: string;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    show_caption_above_media?: boolean;
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
    has_spoiler?: boolean;
}
export declare class InputMediaVideo extends Builder<InputMediaVideoPayload> {
    constructor();
    media(value: string): this;
    thumbnail(value?: InputFile | string): this;
    caption(value?: string): this;
    parseMode(value?: string): this;
    captionEntities(value?: Array<MessageEntity>): this;
    showCaptionAboveMedia(value?: boolean): this;
    width(value?: number): this;
    height(value?: number): this;
    duration(value?: number): this;
    supportsStreaming(value?: boolean): this;
    hasSpoiler(value?: boolean): this;
}
//# sourceMappingURL=InputMediaVideo.d.ts.map