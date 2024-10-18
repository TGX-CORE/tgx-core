import type { Chat, LocationPayload } from '../Types/Message';
import type { StickerFilePacket } from '../Types/File';
import { BaseChat } from './BaseChat';
export interface Birthdate {
    day: number;
    month: number;
    year: number;
}
export interface BusinessIntro {
    title: string;
    message: string;
    sticker: StickerFilePacket;
}
export interface BusinessLocation {
    address: string;
    location: LocationPayload;
}
export interface BusinessOpeningHours {
    time_zone_name: string;
    opening_hours: BusinessOpeningHoursInterval[];
}
export interface BusinessOpeningHoursInterval {
    opening_minute: number;
    closing_minute: number;
}
export interface PrivateChatPacket {
    id: number;
    type: 'private';
    username?: string;
    first_name?: string;
    last_name?: string;
    birthdate?: Birthdate;
    business_intro?: BusinessIntro;
    business_location?: BusinessLocation;
    business_opening_hours?: BusinessOpeningHours;
    personal_chat?: Chat;
    bio?: string;
    emoji_status_custom_emoji_id?: string;
    emoji_status_expiration_date?: number;
    has_private_forwards?: true;
    has_restricted_voice_and_video_messages?: true;
}
export declare class PrivateChat extends BaseChat implements PrivateChatPacket {
    id: number;
    type: "private";
}
