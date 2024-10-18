import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputFile } from './InputFile';
import { Builder } from '../Builder';
export interface InputMediaAnimationPayload {
    type: 'animation';
    media: string;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    show_caption_above_media?: boolean;
    width?: number;
    height?: number;
    duration?: number;
    has_spoiler?: boolean;
}
export declare class InputMediaAnimation extends Builder<InputMediaAnimationPayload> {
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
    hasSpoiler(value?: boolean): this;
}
//# sourceMappingURL=InputMediaAnimation.d.ts.map