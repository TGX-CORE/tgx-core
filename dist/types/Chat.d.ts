import type { MessagePacket } from '../Client/Managers/MessagesManager';
import type { UserPacket } from '../Classes/User';
import type { Chat } from './Message';
export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;
export type BackgroundType = BackgroundTypeFill | BackgroundTypeWallpaper | BackgroundTypePattern | BackgroundTypeChatTheme;
export interface ChatBackground {
    type: BackgroundType;
}
export interface BackgroundTypeFill {
    type: 'fill';
    fill: BackgroundFill;
    dark_theme_dimming: number;
}
export interface BackgroundTypeWallpaper {
    type: 'wallpaper';
    document: Document;
    dark_theme_dimming: number;
    is_blurred?: true;
    is_moving?: true;
}
export interface BackgroundTypePattern {
    type: 'pattern';
    document: Document;
    fill: BackgroundFill;
    intensity: number;
    is_inverted?: true;
    is_moving?: true;
}
export interface BackgroundTypeChatTheme {
    type: 'chat_theme';
    theme_name: string;
}
export interface BackgroundFillSolid {
    type: 'solid';
    color: number;
}
export interface BackgroundFillGradient {
    type: 'gradient';
    top_color: number;
    bottom_color: number;
    rotation_angle: number;
}
export interface BackgroundFillFreeformGradient {
    type: 'freeform_gradient';
    colors: number[];
}
export interface ForumTopicCreated {
    name: string;
    icon_color: number;
    icon_custom_emoji_id?: number;
}
export interface ForumTopicEdited {
    name?: string;
    icon_custom_emoji_id?: number;
}
export interface ForumTopicClosed {
}
export interface ForumTopicReopened {
}
export interface GeneralForumTopicHidden {
}
export interface GeneralForumTopicUnhidden {
}
export interface Giveaway {
    chats: Chat[];
    winners_selection_date: number;
    winner_count: number;
    only_new_members?: true;
    has_public_winners?: true;
    prize_description?: string;
    country_codes?: string[];
    prize_star_count?: number;
    premium_subscription_month_count?: number;
}
export interface GiveawayCreated {
    prize_star_count?: number;
}
export interface GiveawayWinners {
    chat: Chat;
    giveaway_message_id: number;
    winners_selection_date: number;
    winner_count: number;
    winners: UserPacket[];
    additional_chat_count?: number;
    prize_star_count?: number;
    premium_subscription_month_count?: number;
    unclaimed_prize_count?: number;
    only_new_members?: true;
    was_refunded?: true;
    prize_description?: string;
}
export interface GiveawayCompleted {
    winner_count: number;
    unclaimed_prize_count?: number;
    giveaway_message?: MessagePacket;
    is_star_giveaway?: true;
}
export interface VideoChatScheduled {
    start_date: number;
}
export interface VideoChatStarted {
}
export interface VideoChatEnded {
    duration: number;
}
export interface VideoChatParticipantsInvited {
    users: UserPacket[];
}
