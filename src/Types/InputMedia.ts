import type { MessageEntities } from '../Builders/MessageEntities'
import type { MessageEntityPayload } from './MessageEntity'
import type { InputFile } from './Message'

export interface InputMediaAnimationPayload {
    type?: 'animation'
    media: string
    thumbnail?: InputFile
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    width?: number
    height?: number
    duration?: number
    has_spoiler?: boolean
}

export interface InputMediaAudioPayload {
    type?: 'audio'
    media: string
    thumbnail?: InputFile 
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    duration?: number
    performer?: string
    title?: string
}

export interface InputMediaDocumentPayload {
    type?: 'document'
    media: string
    thumbnail?: InputFile | string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    disable_content_type_detection?: boolean
}

export interface InputMediaPhotoPayload {
    type?: 'photo'
    media: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    has_spoiler?: boolean
}

export interface InputMediaVideoPayload {
    type?: 'video'
    media: string
    thumbnail?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    width?: number
    height?: number
    duration?: number
    supports_streaming?: boolean
    has_spoiler?: boolean
}

/**
 * An input media can be any of the input medias below.
 */
export type InputMedia =
    typeof Media.Photo |
    typeof Media.Video |
    typeof Media.Audio |
    typeof Media.Document |
    typeof Media.Animation

export namespace Media {

    /**
     * @param payload The payload of what the media contains.
     */
    export function Animation(payload: InputMediaAnimationPayload) {
        return { type: 'animation', ...payload }
    }

    /**
     * @param payload The payload of what the media contains.
     */
    export function Audio(payload: InputMediaAudioPayload) {
        return { type: 'audio', ...payload }
    }

    /**
     * @param payload The payload of what the media contains.
     */
    export function Document(payload: InputMediaDocumentPayload) {
        return { type: 'document', ...payload }
    }

    /**
     * @param payload The payload of what the media contains.
     */
    export function Photo(payload: InputMediaPhotoPayload) {
        return { type: 'photo', ...payload }
    }

    /**
     * @param payload The payload of what the media contains.
     */
    export function Video(payload: InputMediaVideoPayload) {
        return { type: 'video', ...payload }
    }

}