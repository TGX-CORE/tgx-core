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
export type InputPaidMedia = typeof PaidMedia.Photo | typeof PaidMedia.Video;
export declare namespace PaidMedia {
    /**
     * @param media The media to attach.
     */
    function Photo(media: string): {
        type: string;
        media: string;
    };
    /**
     * @param media The media to attach.
     * @param thumbnail The thumbnail of the media to attach.
     * @param width Video width.
     * @param height Video height.
     * @param duration Video duration.
     * @param supports_streaming Pass *True* if the uploaded video is suitable for streaming
     */
    function Video(media: string, thumbnail?: string, width?: number, height?: number, duration?: number, supports_streaming?: boolean): {
        type: string;
        media: string;
        thumbnail: string | undefined;
        width: number | undefined;
        height: number | undefined;
        duration: number | undefined;
        supports_streaming: boolean | undefined;
    };
}
