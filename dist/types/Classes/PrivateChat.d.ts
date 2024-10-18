import { BaseChat } from './BaseChat';
import { Chat, LocationPayload } from '../Types/Message';
import { Sticker } from '../Types/Sticker';
export interface Birthdate {
    day: number;
    month: number;
    year: number;
}
export interface BusinessIntro {
    title: string;
    message: string;
    sticker: Sticker;
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
export interface PrivateChat {
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
export declare class PrivateChat extends BaseChat implements PrivateChat {
}
//# sourceMappingURL=PrivateChat.d.ts.map