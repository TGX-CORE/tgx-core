import type { InputPaidMedia, InputPaidMediaPhotoPayload, InputPaidMediaPreviewPayload, InputPaidMediaVideoPayload } from '../Builders/InputPaidMedia';
import type { ForceReply, InlineKeyboardMarkup, ReplyKeyboardMarkup, ReplyKeyboardRemove } from '../Builders/InlineKeyboard';
import type { CreateInvoiceLinkPayload, InvoicePacket, SendInvoicePayload } from './Invoice';
import type { Game, MessageEntity, PhotoSize, Story, Video, Voice } from './Common';
import type { PollOptions, PollOption } from '../Builders/PollOptions';
import type { SuperGroupChat } from '../Classes/SuperGroupChat';
import type { LinkPreviewOptions } from './InputMessageContent';
import type { InputMediaBuilder } from '../Builders/InputMedia';
import type { ChannelChat } from '../Classes/ChannelChat';
import type { PrivateChat } from '../Classes/PrivateChat';
import type { Reactions } from '../Builders/Reactions';
import type { GroupChat } from '../Classes/GroupChat';
import type { User } from '../Classes/User';
import type { Sticker } from './Sticker';
import type { PollPacket } from '../Classes/Poll';
import type { Giveaway, GiveawayWinners } from './Chat';
export declare enum MessagePayloadMethod {
    Action = "sendChatAction",
    Animation = "sendAnimation",
    Audio = "sendAudio",
    ChatAction = "sendChatAction",
    Contact = "sendContact",
    Document = "sendDocument",
    Dice = "sendDice",
    Invoice = "sendInvoice",
    Location = "sendLocation",
    MediaGroup = "sendMediaGroup",
    Text = "sendMessage",
    MessageReaction = "sentMessageReaction",
    PaidMedia = "sendPaidMedia",
    Photo = "sendPhoto",
    Poll = "sendPoll",
    Video = "sendVideo",
    Voice = "sendVoice",
    VideoNote = "sendVideoNote",
    Venue = "sendVenue"
}
export declare enum ChatAction {
    Typing = "typing",
    UploadPhoto = "upload_photo",
    UplaodVideo = "upload_video",
    UploadVoice = "upload_voice",
    RecordVideo = "record_video",
    RecordVoice = "record_voice",
    FindLocation = "find_location",
    ChooseSticker = "choose_sticker",
    UploadDocument = "upload_document",
    UploadVideoNote = "upload_video_note",
    RecordVideoNote = "record_video_note"
}
export type InputFile = string;
export type Chat = SuperGroupChat | GroupChat | ChannelChat | PrivateChat;
export type MessageOrigin = MessageOriginChannel | MessageOriginChat | MessageOriginHiddenUser | MessageOriginUser;
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;
export type MessagePayload = TextPayload | PhotoPayload | AudioPayload | DocumentPayload | AnimationPayload | VoicePayload | VideoNotePayload | PaidMediaPayload | MediaGroupPayload | VenuePayload | LocationPayload | ContactPayload | PollPayload | DicePayload | ChatActionPayload | CreateInvoiceLinkPayload | SendInvoicePayload;
export type AcceptedEmoji = "👍" | "👎" | "❤" | "🔥" | "🥰" | "👏" | "😁" | "🤔" | "🤯" | "😱" | "🤬" | "😢" | "🎉" | "🤩" | "🤮" | "💩" | "🙏" | "👌" | "🕊" | "🤡" | "🥱" | "🥴" | "😍" | "🐳" | "❤‍🔥" | "🌚" | "🌭" | "💯" | "🤣" | "⚡" | "🍌" | "🏆" | "💔" | "🤨" | "😐" | "🍓" | "🍾" | "💋" | "🖕" | "😈" | "😴" | "😭" | "🤓" | "👻" | "👨‍💻" | "👀" | "🎃" | "🙈" | "😇" | "😨" | "🤝" | "✍" | "🤗" | "🫡" | "🎅" | "🎄" | "☃" | "💅" | "🤪" | "🗿" | "🆒" | "💘" | "🙉" | "🦄" | "😘" | "💊" | "🙊" | "😎" | "👾" | "🤷‍♂" | "🤷" | "🤷‍♀" | "😡";
export interface ReactionTypeEmoji {
    type: 'emoji';
    emoji: AcceptedEmoji;
}
export interface ReactionTypeCustomEmoji {
    type: 'custom_emoji';
    custom_emoji_id: string;
}
export interface ReactionTypePaid {
    type: 'paid';
}
export interface MessageOriginUser {
    type: "user";
    date: number;
    sender_user: User;
}
export interface MessageOriginHiddenUser {
    type: "hidden_user";
    date: number;
    sender_user_name: string;
}
export interface MessageOriginChat {
    type: 'chat';
    date: number;
    sender_chat: Chat;
    author_signature?: string;
}
export interface MessageOriginChannel {
    type: 'channel';
    date: number;
    chat: Chat;
    message_id: number;
    author_signature?: string;
}
export interface MessageReactionPayload {
    chat_id?: string | number;
    message_id?: number;
    reaction?: Reactions;
    is_big?: boolean;
}
export interface PaidMediaInfo {
    star_count: number;
    paid_media?: InputPaidMediaPhotoPayload | InputPaidMediaPreviewPayload | InputPaidMediaVideoPayload;
}
export interface ExternalReplyInfo {
    origin: MessageOrigin;
    chat?: Chat;
    message_id?: number;
    link_preview_options?: LinkPreviewOptions;
    animation?: Animation;
    audio?: AudioPayload;
    document?: Document;
    paid_media?: PaidMediaInfo;
    photo?: PhotoSize[];
    sticker?: Sticker;
    story?: Story;
    video?: Video;
    video_note?: VideoNotePayload;
    voice?: Voice;
    has_media_spoiler?: boolean;
    contact?: ContactPayload;
    dice?: DicePayload;
    game?: Game;
    giveaway?: Giveaway;
    giveaway_winners?: GiveawayWinners;
    invoice?: InvoicePacket;
    location?: Location;
    poll?: PollPacket;
    venue?: VenuePayload;
}
export interface ReplyParameters {
    chat_id?: string | number;
    message_id?: number;
    allow_sending_without_reply?: boolean;
    quote?: string;
    quote_parse_mode?: string;
    quote_entities?: MessageEntity[];
    quote_position?: number;
}
export interface OptionalBaseMessagePayload {
    business_connection_id?: string;
    message_thread_id?: number;
    protect_content?: boolean;
    message_effect_id?: string;
    disable_notification?: boolean;
    parse_mode?: string;
    reply_parameters?: ReplyParameters;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ForceReply | ReplyKeyboardRemove;
}
export interface CopyMessagePayload {
    chat_id?: string | number;
    message_thread_id?: number;
    from_chat_id: number;
    message_ids: number[];
    disable_notification?: boolean;
    protect_content?: boolean;
    remove_caption?: boolean;
}
export interface BaseMessagePayload extends Partial<OptionalBaseMessagePayload> {
    chat_id?: string | number;
}
export interface TextPayload extends BaseMessagePayload {
    text: string;
    link_preview_options: LinkPreviewOptions;
}
export interface PhotoPayload extends BaseMessagePayload {
    photo: InputFile;
    caption?: string;
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
}
export interface AudioPayload extends BaseMessagePayload {
    audio: InputFile;
    caption?: string;
    duration?: number;
    performer?: string;
    title?: string;
    track_name?: string;
    thumbnail?: InputFile;
}
export interface DocumentPayload extends BaseMessagePayload {
    video: InputFile;
    duration?: number;
    width?: number;
    height?: number;
    thumbnail?: InputFile;
    caption?: string;
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
    supports_streaming?: boolean;
}
export interface AnimationPayload extends BaseMessagePayload {
    animation: InputFile;
    duration?: number;
    width?: number;
    height?: number;
    thumbnail?: InputFile;
    caption?: string;
    show_caption_above_media?: boolean;
    has_spoiler?: boolean;
}
export interface VoicePayload extends BaseMessagePayload {
    voice: InputFile;
    caption?: string;
    duration?: number;
}
export interface VideoNotePayload extends BaseMessagePayload {
    video_note: InputFile;
    duration?: number;
    length?: number;
    thumbnail?: InputFile;
}
export interface PaidMediaPayload extends BaseMessagePayload {
    star_count: number;
    media: InputPaidMedia.Video | InputPaidMedia.Photo;
    caption?: string;
    show_caption_above_media?: boolean;
}
export interface MediaGroupPayload extends BaseMessagePayload {
    media: InputMediaBuilder[];
}
export interface LocationPayload extends BaseMessagePayload {
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}
export interface VenuePayload extends BaseMessagePayload {
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
}
export interface ContactPayload extends BaseMessagePayload {
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
}
export interface PollPayload extends BaseMessagePayload {
    question: string;
    question_parse_mode?: string;
    question_entities?: MessageEntity[];
    options: PollOption[] | PollOptions;
    is_anonymous?: boolean;
    type?: 'quiz' | 'regular';
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
}
export interface DicePayload extends BaseMessagePayload {
    emoji?: '🎲' | '🎯' | '🏀' | '⚽' | '🎳' | '🎰';
}
export interface ChatActionPayload {
    chat_id?: number | string;
    message_thread_id?: number;
    action: ChatAction;
}
export interface InaccessibleMessage {
    chat: Chat;
    message_id: number;
    date: 0;
}
export interface MessageAutoDeleteTimerChanged {
    message_auto_delete_time: number;
}
//# sourceMappingURL=Message.d.ts.map