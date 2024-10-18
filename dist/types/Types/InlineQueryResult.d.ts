import type { InputMessageContent } from '../Builders/InputMessageContent';
import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard';
import type { MessageEntity } from '../Types/Common';
import type { WebAppInfo } from './InlineQuery';
import { Builder } from '../Builders/Builder';
export type InlineQueryResult = QueryResult.Article | QueryResult.Audio | QueryResult.Contact | QueryResult.CachedAudio | QueryResult.CachedDocument | QueryResult.CachedGif | QueryResult.CachedMpeg4Gif | QueryResult.CachedPhoto | QueryResult.CachedSticker | QueryResult.CachedVideo | QueryResult.CachedVoice | QueryResult.Document | QueryResult.Game | QueryResult.Gif | QueryResult.Location | QueryResult.Mpeg4Gif | QueryResult.Photo | QueryResult.Button | QueryResult.Venue | QueryResult.Video | QueryResult.Voice;
export declare namespace QueryResult {
    class Article extends Builder {
        constructor(payload: QueryResultArticlePayload);
    }
    class Audio extends Builder {
        constructor(payload: QueryResultAudioPayload);
    }
    class Contact extends Builder {
        constructor(payload: QueryResultContactPayload);
    }
    class CachedAudio extends Builder {
        constructor(payload: QueryResultCachedAudioPayload);
    }
    class CachedDocument extends Builder {
        constructor(payload: QueryResultCachedDocumentPayload);
    }
    class CachedGif extends Builder {
        constructor(payload: QueryResultCachedGifPayload);
    }
    class CachedMpeg4Gif extends Builder {
        constructor(payload: QueryResultCachedMpeg4GifPayload);
    }
    class CachedPhoto extends Builder {
        constructor(payload: QueryResultCachedPhotoPayload);
    }
    class CachedSticker extends Builder {
        constructor(payload: QueryResultCachedStickerPayload);
    }
    class CachedVideo extends Builder {
        constructor(payload: QueryResultCachedVideoPayload);
    }
    class CachedVoice extends Builder {
        constructor(payload: QueryResultCachedVoicePayload);
    }
    class Document extends Builder {
        constructor(payload: QueryResultDocumentPayload);
    }
    class Game extends Builder {
        constructor(payload: QueryResultGamePayload);
    }
    class Gif extends Builder {
        constructor(payload: QueryResultGifPayload);
    }
    class Location extends Builder {
        constructor(payload: QueryResultLocationPayload);
    }
    class Mpeg4Gif extends Builder {
        constructor(payload: QueryResultMpeg4GifPayload);
    }
    class Photo extends Builder {
        constructor(payload: QueryResultPhotoPayload);
    }
    class Button extends Builder {
        constructor(payload: QueryResultButtonPayload);
    }
    class Venue extends Builder {
        constructor(payload: QueryResultVenuePayload);
    }
    class Video extends Builder {
        constructor(payload: QueryResultVideoPayload);
    }
    class Voice extends Builder {
        constructor(payload: QueryResultVoicePayload);
    }
}
export interface LoginUrl {
    url: string;
    forward_text?: string;
    bot_username?: string;
    request_write_access?: boolean;
}
export interface SwitchInlineQueryChosenChat {
    query?: string;
    allow_user_chats?: boolean;
    allow_bot_chats?: boolean;
    allow_group_chats?: boolean;
    allow_channel_chats?: boolean;
}
export interface QueryResultArticlePayload {
    type: 'article';
    id: string;
    title: string;
    input_message_content?: InputMessageContent;
    reply_markup?: InlineKeyboardMarkup;
    url?: string;
    hide_url?: boolean;
    description?: string;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export interface QueryResultAudioPayload {
    type: 'audio';
    id: string;
    audio_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    performer?: string;
    audio_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultContactPayload {
    type: 'contact';
    id: string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export interface QueryResultCachedPhotoPayload {
    type: 'photo';
    id: string;
    photo_file_id: string;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedAudioPayload {
    type: 'audio';
    id: string;
    audio_file_id: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedDocumentPayload {
    type: 'document';
    id: string;
    title: string;
    document_file_id: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedGifPayload {
    type: 'gif';
    id: string;
    gif_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedMpeg4GifPayload {
    type: 'mpeg4_gif';
    id: string;
    mpeg4_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedStickerPayload {
    type: 'sticker';
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedVideoPayload {
    type: 'video';
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedVoicePayload {
    type: 'voice';
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultDocumentPayload {
    type: 'document';
    id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    document_url: string;
    mime_type: 'application/pdf' | 'application/zip';
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export interface QueryResultGamePayload {
    type: 'game';
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
}
export interface QueryResultGifPayload {
    type: 'gif';
    id: string;
    gif_url: string;
    gif_width?: number;
    gif_height?: number;
    gif_duration?: number;
    thumbnail_url: string;
    thumbnail_mime_type?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultLocationPayload {
    type: 'location';
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export interface QueryResultMpeg4GifPayload {
    type: 'mpeg4_gif';
    id: string;
    mpeg4_url: string;
    mpeg4_width?: number;
    mpeg4_height?: number;
    mpeg4_duration?: number;
    thumbnail_url: string;
    thumbnail_mime_type?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultPhotoPayload {
    type: 'photo';
    id: string;
    photo_url: string;
    thumbnail_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultButtonPayload {
    text: string;
    web_app?: WebAppInfo;
    start_parameter?: string;
}
export interface QueryResultVenuePayload {
    type: 'venue';
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export interface QueryResultVideoPayload {
    type: 'video';
    id: string;
    video_url: string;
    mime_type: 'text/html' | 'video/mp4';
    thumbnail_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultVoicePayload {
    type: 'voice';
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
//# sourceMappingURL=InlineQueryResult.d.ts.map