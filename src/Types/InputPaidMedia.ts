export interface InputPaidMediaPhotoPayload {
    type?: 'photo'
    media: string
}

export interface InputPaidMediaVideoPayload {
    type?: 'video'
    media: string
    thumbnail?: string
    width?: number
    height?: number
    duration?: number
    supports_streaming?: boolean
}

export interface InputPaidMediaPreviewPayload {
    type?: 'preview',
    width: number
    height: number
    duration: number
}

export type InputPaidMedia = typeof PaidMedia.Photo |
                             typeof PaidMedia.Video 

export namespace PaidMedia {

    /**
     * @param media The media to attach.
     */
    export function Photo(media: string) {
        return { type: 'photo', media }
    }

    /**
     * @param media The media to attach.
     * @param thumbnail The thumbnail of the media to attach.
     * @param width Video width.
     * @param height Video height.
     * @param duration Video duration.
     * @param supports_streaming Pass *True* if the uploaded video is suitable for streaming
     */
    export function Video(media: string, thumbnail?: string, width?: number, height?: number, duration?: number, supports_streaming?: boolean) {
        return { type: 'video', media, thumbnail, width, height, duration, supports_streaming }
    }

}
