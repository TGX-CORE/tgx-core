import type { MessageEntity } from '../Types/Common';
import type { InputFile } from './Message';
export interface InputMediaAnimationPayload {
    type?: 'animation';
    media: string;
    thumbnail?: InputFile;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    show_caption_above_media?: boolean;
    width?: number;
    height?: number;
    duration?: number;
    has_spoiler?: boolean;
}
export interface InputMediaAudioPayload {
    type?: 'audio';
    media: string;
    thumbnail?: InputFile;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    duration?: number;
    performer?: string;
    title?: string;
}
export interface InputMediaDocumentPayload {
    type?: 'document';
    media: string;
    thumbnail?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    disable_content_type_detection?: boolean;
}
export interface InputMediaPhotoPayload {
    type?: 'photo';
    media: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: Array<MessageEntity>;
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
}
export interface InputMediaVideoPayload {
    type?: 'video';
    media: string;
    thumbnail?: string;
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
//# sourceMappingURL=InputMedia.d.ts.map