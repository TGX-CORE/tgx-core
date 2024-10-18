import type { InputMessageContent } from './InputMessageContent'
import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard'
import type { MessageEntities } from '../Builders/MessageEntities'
import type { MessageEntityPayload } from './MessageEntity'
import type { WebAppInfo } from './InlineQuery'

/**
 * An inline query result can be any of the query results below.
 */
export type InlineQueryResult = typeof QueryResult.Article |
                                typeof QueryResult.Audio |
                                typeof QueryResult.Contact |
                                typeof QueryResult.CachedAudio |
                                typeof QueryResult.CachedDocument |
                                typeof QueryResult.CachedGif |
                                typeof QueryResult.CachedMpeg4Gif |
                                typeof QueryResult.CachedPhoto |
                                typeof QueryResult.CachedSticker |
                                typeof QueryResult.CachedVideo |
                                typeof QueryResult.CachedVoice |
                                typeof QueryResult.Document |
                                typeof QueryResult.Game |
                                typeof QueryResult.Gif |
                                typeof QueryResult.Location |
                                typeof QueryResult.Mpeg4Gif |
                                typeof QueryResult.Photo |
                                typeof QueryResult.Button |
                                typeof QueryResult.Venue |
                                typeof QueryResult.Video |
                                typeof QueryResult.Voice 

export interface LoginUrl {
    url: string
    forward_text?: string
    bot_username?: string
    request_write_access?: boolean
}

export interface SwitchInlineQueryChosenChat {
    query?: string
    allow_user_chats?: boolean
    allow_bot_chats?: boolean
    allow_group_chats?: boolean
    allow_channel_chats?: boolean
}

export interface QueryResultArticlePayload {
    type?: 'article'
    id: string
    title: string
    input_message_content?: InputMessageContent
    reply_markup?: InlineKeyboardMarkup
    url?: string
    hide_url?: boolean
    description?: string
    thumbnail_url?: string
    thumbnail_width?: number
    thumbnail_height?: number
}

export interface QueryResultAudioPayload {
    type?: 'audio'
    id: string
    audio_url: string
    title: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    performer?: string
    audio_duration?: number
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultContactPayload {
    type?: 'contact'
    id: string
    phone_number: string
    first_name: string
    last_name?: string
    vcard?: string
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
    thumbnail_url?: string
    thumbnail_width?: number
    thumbnail_height?: number
}

export interface QueryResultCachedPhotoPayload {
    type?: 'photo'
    id: string
    photo_file_id: string
    title?: string
    description?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedAudioPayload {
    type?: 'audio'
    id: string
    audio_file_id: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedDocumentPayload {
    type?: 'document'
    id: string
    title: string
    document_file_id: string
    description?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedGifPayload {
    type?: 'gif'
    id: string
    gif_file_id: string
    title?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedMpeg4GifPayload {
    type?: 'mpeg4_gif'
    id: string
    mpeg4_file_id: string
    title?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedStickerPayload {
    type?: 'sticker'
    id: string
    sticker_file_id: string
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedVideoPayload {
    type?: 'video'
    id: string
    video_file_id: string
    title: string
    description?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultCachedVoicePayload {
    type?: 'voice'
    id: string
    voice_file_id: string
    title: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultDocumentPayload {
    type?: 'document'
    id: string
    title: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    document_url: string
    mime_type: 'application/pdf' | 'application/zip'
    description?: string
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
    thumbnail_url?: string
    thumbnail_width?: number
    thumbnail_height?: number
}

export interface QueryResultGamePayload {
    type?: 'game'
    id: string
    game_short_name: string
    reply_markup?: InlineKeyboardMarkup
}

export interface QueryResultGifPayload {
    type?: 'gif'
    id: string
    gif_url: string
    gif_width?: number
    gif_height?: number
    gif_duration?: number
    thumbnail_url: string
    thumbnail_mime_type?: string
    title?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultLocationPayload {
    type?: 'location'
    id: string
    latitude: number
    longitude: number
    title: string
    horizontal_accuracy?: number
    live_period?: number
    heading?: number
    proximity_alert_radius?: number
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
    thumbnail_url?: string
    thumbnail_width?: number
    thumbnail_height?: number
}

export interface QueryResultMpeg4GifPayload {
    type?: 'mpeg4_gif'
    id: string
    mpeg4_url: string
    mpeg4_width?: number
    mpeg4_height?: number
    mpeg4_duration?: number
    thumbnail_url: string
    thumbnail_mime_type?: string
    title?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultPhotoPayload {
    type?: 'photo'
    id: string
    photo_url: string
    thumbnail_url: string
    photo_width?: number
    photo_height?: number
    title?: string
    description?: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultButtonPayload {
    text: string
    web_app?: WebAppInfo
    start_parameter?: string
}

export interface QueryResultVenuePayload {
    type?: 'venue'
    id: string
    latitude: number
    longitude: number
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
    google_place_id?: string
    google_place_type?: string
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
    thumbnail_url?: string
    thumbnail_width?: number
    thumbnail_height?: number
}

export interface QueryResultVideoPayload {
    type?: 'video'
    id: string
    video_url: string
    mime_type: 'text/html' | 'video/mp4'
    thumbnail_url: string
    title: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    video_width?: number
    video_height?: number
    video_duration?: number
    description?: string
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export interface QueryResultVoicePayload {
    type?: 'voice'
    id: string
    voice_url: string
    title: string
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntities|MessageEntityPayload[]
    voice_duration?: number
    reply_markup?: InlineKeyboardMarkup
    input_message_content?: InputMessageContent
}

export namespace QueryResult {
    /**
     * @param payload The payload for the article query result.
     */
    export function Article(payload: QueryResultArticlePayload): QueryResultArticlePayload {
        return { ...payload, type: 'article' }
    }

    /**
     * @param payload The payload for the audio query result.
     */
    export function Audio(payload: QueryResultAudioPayload): QueryResultAudioPayload {
        return { ...payload, type: 'audio' }
    }

    /**
     * @param payload The payload for the contact query result.
     */
    export function Contact(payload: QueryResultContactPayload): QueryResultContactPayload {
        return { ...payload, type: 'contact' }
    }

    /**
     * @param payload The payload for the cached audio query result.
     */
    export function CachedAudio(payload: QueryResultCachedAudioPayload): QueryResultCachedAudioPayload {
        return { ...payload, type: 'audio' }
    }

    /**
     * @param payload The payload for the cached document query result.
     */
    export function CachedDocument(payload: QueryResultCachedDocumentPayload): QueryResultCachedDocumentPayload {
        return { ...payload, type: 'document' }
    }

    /**
     * @param payload The payload for the cached GIF query result.
     */
    export function CachedGif(payload: QueryResultCachedGifPayload): QueryResultCachedGifPayload {
        return { ...payload, type: 'gif' }
    }

    /**
     * @param payload The payload for the cached MPEG-4 GIF query result.
     */
    export function CachedMpeg4Gif(payload: QueryResultCachedMpeg4GifPayload): QueryResultCachedMpeg4GifPayload {
        return { ...payload, type: 'mpeg4_gif' }
    }

    /**
     * @param payload The payload for the cached photo query result.
     */
    export function CachedPhoto(payload: QueryResultCachedPhotoPayload): QueryResultCachedPhotoPayload {
        return { ...payload, type: 'photo' }
    }

    /**
     * @param payload The payload for the cached sticker query result.
     */
    export function CachedSticker(payload: QueryResultCachedStickerPayload): QueryResultCachedStickerPayload {
        return { ...payload, type: 'sticker' }
    }

    /**
     * @param payload The payload for the cached video query result.
     */
    export function CachedVideo(payload: QueryResultCachedVideoPayload): QueryResultCachedVideoPayload {
        return { ...payload, type: 'video' }
    }

    /**
     * @param payload The payload for the cached voice query result.
     */
    export function CachedVoice(payload: QueryResultCachedVoicePayload): QueryResultCachedVoicePayload {
        return { ...payload, type: 'voice' }
    }

    /**
     * @param payload The payload for the document query result.
     */
    export function Document(payload: QueryResultDocumentPayload): QueryResultDocumentPayload {
        return { ...payload, type: 'document' }
    }

    /**
     * @param payload The payload for the game query result.
     */
    export function Game(payload: QueryResultGamePayload): QueryResultGamePayload {
        return { ...payload, type: 'game' }
    }

    /**
     * @param payload The payload for the GIF query result.
     */
    export function Gif(payload: QueryResultGifPayload): QueryResultGifPayload {
        return { ...payload, type: 'gif' }
    }

    /**
     * @param payload The payload for the location query result.
     */
    export function Location(payload: QueryResultLocationPayload): QueryResultLocationPayload {
        return { ...payload, type: 'location' }
    }

    /**
     * @param payload The payload for the MPEG-4 GIF query result.
     */
    export function Mpeg4Gif(payload: QueryResultMpeg4GifPayload): QueryResultMpeg4GifPayload {
        return { ...payload, type: 'mpeg4_gif' }
    }

    /**
     * @param payload The payload for the photo query result.
     */
    export function Photo(payload: QueryResultPhotoPayload): QueryResultPhotoPayload {
        return { ...payload, type: 'photo' }
    }

    /**
     * @param payload The payload for the button query result.
     */
    export function Button(payload: QueryResultButtonPayload): QueryResultButtonPayload {
        return { ...payload }
    }

    /**
     * @param payload The payload for the venue query result.
     */
    export function Venue(payload: QueryResultVenuePayload): QueryResultVenuePayload {
        return { ...payload, type: 'venue' }
    }

    /**
     * @param payload The payload for the video query result.
     */
    export function Video(payload: QueryResultVideoPayload): QueryResultVideoPayload {
        return { ...payload, type: 'video' }
    }

    /**
     * @param payload The payload for the voice query result.
     */
    export function Voice(payload: QueryResultVoicePayload): QueryResultVoicePayload {
        return { ...payload, type: 'voice' }
    }
}