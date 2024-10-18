import { Builder } from './Builder';
export interface InputPaidMediaPhotoPayload {
    type?: 'photo';
    media: string;
}
export interface InputPaidMediaVideoPayload {
    type?: 'video';
    media: string;
    thumbnail?: InputPaidMedia | string;
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
}
export declare class InputPaidMedia extends Builder {
    constructor(...medias: InputPaidMediaType[]);
}
export type InputPaidMediaType = typeof PaidMedia.Photo | typeof PaidMedia.Video;
export declare namespace PaidMedia {
    function Photo(payload: InputPaidMediaPhotoPayload): {
        type: string;
        media: string;
    };
    function Video(payload: InputPaidMediaVideoPayload): {
        type: string;
        media: string;
        thumbnail?: InputPaidMedia | string;
        width?: number;
        height?: number;
        duration?: number;
        supports_streaming?: boolean;
    };
}
//# sourceMappingURL=InputFile.d.ts.map