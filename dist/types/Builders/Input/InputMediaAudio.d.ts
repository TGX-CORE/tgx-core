import type { MessageEntity } from '../../Client/Managers/MessagesManager';
import type { InputFile } from './InputFile';
import { Builder } from '../Builder';
export interface InputMediaAudioPayload {
    type: 'audio';
    media: string;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    duration?: number;
    performer?: string;
    title?: string;
}
export declare class InputMediaAudio extends Builder<InputMediaAudioPayload> {
    constructor();
    media(value: string): this;
    thumbnail(value?: InputFile | string): this;
    caption(value?: string): this;
    parseMode(value?: string): this;
    captionEntities(value?: Array<MessageEntity>): this;
    duration(value?: number): this;
    performer(value?: string): this;
    title(value?: string): this;
}
//# sourceMappingURL=InputMediaAudio.d.ts.map