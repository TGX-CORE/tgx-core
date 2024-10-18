import type { InputMessageContent } from './InputMessageContent';
import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard';
import type { MessageEntities } from '../Builders/MessageEntities';
import type { MessageEntityPayload } from './MessageEntity';
import type { WebAppInfo } from './InlineQuery';
/**
 * An inline query result can be any of the query results below.
 */
export type InlineQueryResult = typeof QueryResult.Article | typeof QueryResult.Audio | typeof QueryResult.Contact | typeof QueryResult.CachedAudio | typeof QueryResult.CachedDocument | typeof QueryResult.CachedGif | typeof QueryResult.CachedMpeg4Gif | typeof QueryResult.CachedPhoto | typeof QueryResult.CachedSticker | typeof QueryResult.CachedVideo | typeof QueryResult.CachedVoice | typeof QueryResult.Document | typeof QueryResult.Game | typeof QueryResult.Gif | typeof QueryResult.Location | typeof QueryResult.Mpeg4Gif | typeof QueryResult.Photo | typeof QueryResult.Button | typeof QueryResult.Venue | typeof QueryResult.Video | typeof QueryResult.Voice;
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
    type?: 'article';
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
    type?: 'audio';
    id: string;
    audio_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    performer?: string;
    audio_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultContactPayload {
    type?: 'contact';
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
    type?: 'photo';
    id: string;
    photo_file_id: string;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedAudioPayload {
    type?: 'audio';
    id: string;
    audio_file_id: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedDocumentPayload {
    type?: 'document';
    id: string;
    title: string;
    document_file_id: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedGifPayload {
    type?: 'gif';
    id: string;
    gif_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedMpeg4GifPayload {
    type?: 'mpeg4_gif';
    id: string;
    mpeg4_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedStickerPayload {
    type?: 'sticker';
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedVideoPayload {
    type?: 'video';
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultCachedVoicePayload {
    type?: 'voice';
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultDocumentPayload {
    type?: 'document';
    id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
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
    type?: 'game';
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
}
export interface QueryResultGifPayload {
    type?: 'gif';
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
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultLocationPayload {
    type?: 'location';
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
    type?: 'mpeg4_gif';
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
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultPhotoPayload {
    type?: 'photo';
    id: string;
    photo_url: string;
    thumbnail_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
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
    type?: 'venue';
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
    type?: 'video';
    id: string;
    video_url: string;
    mime_type: 'text/html' | 'video/mp4';
    thumbnail_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    show_caption_above_media?: boolean;
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export interface QueryResultVoicePayload {
    type?: 'voice';
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntities | MessageEntityPayload[];
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}
export declare namespace QueryResult {
    /**
     * @param payload The payload for the article query result.
     */
    function Article(payload: QueryResultArticlePayload): QueryResultArticlePayload;
    /**
     * @param payload The payload for the audio query result.
     */
    function Audio(payload: QueryResultAudioPayload): QueryResultAudioPayload;
    /**
     * @param payload The payload for the contact query result.
     */
    function Contact(payload: QueryResultContactPayload): QueryResultContactPayload;
    /**
     * @param payload The payload for the cached audio query result.
     */
    function CachedAudio(payload: QueryResultCachedAudioPayload): QueryResultCachedAudioPayload;
    /**
     * @param payload The payload for the cached document query result.
     */
    function CachedDocument(payload: QueryResultCachedDocumentPayload): QueryResultCachedDocumentPayload;
    /**
     * @param payload The payload for the cached GIF query result.
     */
    function CachedGif(payload: QueryResultCachedGifPayload): QueryResultCachedGifPayload;
    /**
     * @param payload The payload for the cached MPEG-4 GIF query result.
     */
    function CachedMpeg4Gif(payload: QueryResultCachedMpeg4GifPayload): QueryResultCachedMpeg4GifPayload;
    /**
     * @param payload The payload for the cached photo query result.
     */
    function CachedPhoto(payload: QueryResultCachedPhotoPayload): QueryResultCachedPhotoPayload;
    /**
     * @param payload The payload for the cached sticker query result.
     */
    function CachedSticker(payload: QueryResultCachedStickerPayload): QueryResultCachedStickerPayload;
    /**
     * @param payload The payload for the cached video query result.
     */
    function CachedVideo(payload: QueryResultCachedVideoPayload): QueryResultCachedVideoPayload;
    /**
     * @param payload The payload for the cached voice query result.
     */
    function CachedVoice(payload: QueryResultCachedVoicePayload): QueryResultCachedVoicePayload;
    /**
     * @param payload The payload for the document query result.
     */
    function Document(payload: QueryResultDocumentPayload): QueryResultDocumentPayload;
    /**
     * @param payload The payload for the game query result.
     */
    function Game(payload: QueryResultGamePayload): QueryResultGamePayload;
    /**
     * @param payload The payload for the GIF query result.
     */
    function Gif(payload: QueryResultGifPayload): QueryResultGifPayload;
    /**
     * @param payload The payload for the location query result.
     */
    function Location(payload: QueryResultLocationPayload): QueryResultLocationPayload;
    /**
     * @param payload The payload for the MPEG-4 GIF query result.
     */
    function Mpeg4Gif(payload: QueryResultMpeg4GifPayload): QueryResultMpeg4GifPayload;
    /**
     * @param payload The payload for the photo query result.
     */
    function Photo(payload: QueryResultPhotoPayload): QueryResultPhotoPayload;
    /**
     * @param payload The payload for the button query result.
     */
    function Button(payload: QueryResultButtonPayload): QueryResultButtonPayload;
    /**
     * @param payload The payload for the venue query result.
     */
    function Venue(payload: QueryResultVenuePayload): QueryResultVenuePayload;
    /**
     * @param payload The payload for the video query result.
     */
    function Video(payload: QueryResultVideoPayload): QueryResultVideoPayload;
    /**
     * @param payload The payload for the voice query result.
     */
    function Voice(payload: QueryResultVoicePayload): QueryResultVoicePayload;
}
