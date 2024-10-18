import type { InputFile, LocationPayload, ReactionType } from '../Types/Message';
import type { ChatPermissions } from '../Builders/ChatPermissions';
import type { ChatPhoto, ChatPacket } from './BaseChat';
import type { Client } from '../Client/Client';
import type { Message } from './Message';
import type { Member } from './Member';
import { ChatInviteLinksManager } from '../Client/Managers/ChatInviteLinksManager';
import { ChatRequestsManager } from '../Client/Managers/ChatRequestsManager';
import { MembersManager } from '../Client/Managers/MembersManager';
import { BaseChat } from './BaseChat';
export interface ChatLocation {
    location: LocationPayload;
    address: string;
}
export interface BaseGroupChatPacket {
    id: number;
    type: 'group' | 'supergroup' | 'channel';
    title?: string;
    username?: string;
    is_forum?: true;
    accent_color_id?: number;
    max_reaction_count?: number;
    photo?: ChatPhoto;
    active_usernames?: string[];
    available_reactions?: ReactionType[];
    background_custom_emoji_id?: string;
    profile_accent_color_id?: number;
    profile_background_custom_emoji_id?: string;
    join_to_send_messages?: true;
    join_by_request?: true;
    description?: string;
    invite_link?: string;
    pinned_message?: Message;
    permissions?: ChatPermissions;
    can_send_paid_media?: true;
    slow_mode_delay?: number;
    unrestrict_boost_count?: number;
    message_auto_delete_time?: number;
    has_aggressive_anti_spam_enabled?: true;
    has_hidden_members?: true;
    has_protected_content?: true;
    has_visible_history?: true;
    sticker_set_name?: string;
    can_set_sticker_set?: true;
    custom_emoji_sticker_set_name?: string;
    linked_chat_id?: number;
    location?: ChatLocation;
}
export declare abstract class BaseGroupChat extends BaseChat implements BaseGroupChatPacket {
    id: number;
    type: 'group' | 'supergroup' | 'channel';
    members: MembersManager;
    invites: ChatInviteLinksManager;
    requests: ChatRequestsManager;
    constructor(client: Client, packet: ChatPacket);
    setPhoto(photo: InputFile, form?: FormData): Promise<boolean>;
    deletePhoto(): Promise<boolean>;
    administrators(): Promise<Array<Member>>;
}
