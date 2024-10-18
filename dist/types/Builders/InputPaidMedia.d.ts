import { Builder } from './Builder';
export interface InputPaidMediaPhotoPayload {
    type?: 'photo';
    media: string;
}
export interface InputPaidMediaVideoPayload {
    type?: 'video';
    media: string;
    thumbnail?: string;
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
}
export interface InputPaidMediaPreviewPayload {
    type?: 'preview';
    width: number;
    height: number;
    duration: number;
}
export declare class InputPaidMediaBuilder extends Builder {
    constructor(...medias: (InputPaidMedia.Photo | InputPaidMedia.Video | InputPaidMedia.Preview)[]);
}
export declare namespace InputPaidMedia {
    class Preview extends Builder {
        constructor(payload: InputPaidMediaPreviewPayload);
    }
    class Photo extends Builder {
        constructor(payload: InputPaidMediaPhotoPayload);
    }
    class Video extends Builder {
        constructor(payload: InputPaidMediaVideoPayload);
    }
}
//# sourceMappingURL=InputPaidMedia.d.ts.map