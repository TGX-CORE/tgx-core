import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import { Builder } from '../Builder';
export interface InputMediaPhotoPayload {
    type: 'photo';
    media: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
}
export declare class InputMediaPhoto extends Builder<InputMediaPhotoPayload> {
    constructor();
    media(value: string): this;
    caption(value?: string): this;
    parseMode(value?: string): this;
    captionEntities(value?: Array<MessageEntity>): this;
    showCaptionAboveMedia(value?: boolean): this;
    spoiler(value?: boolean): this;
}
//# sourceMappingURL=InputMediaPhoto.d.ts.map