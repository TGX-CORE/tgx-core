import type { ChatRequestsManager } from '../Client/Managers/ChatRequestsManager';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { BaseChat } from './BaseChat';
import { User } from './User';
import { Chat } from '../Types/Message';
export interface ChatInviteLink {
    invite_link: string;
    creator: User;
    creates_join_request: boolean;
    is_primary: boolean;
    is_revoked: boolean;
    name: string;
    expire_date: number;
    member_limit: number;
    pending_join_request_count: number;
    subscription_period: number;
    subscription_price: number;
}
export interface ChatJoinRequestPacket {
    from: User;
    chat?: BaseChat;
    user_chat_id: number;
    date: number;
    bio: string;
    invite_link: ChatInviteLink;
}
export declare class ChatJoinRequest extends BaseClass<ChatJoinRequest, ChatJoinRequestPacket> {
    _from: number;
    _chat: number;
    constructor(client: Client, packet: ChatJoinRequestPacket);
    approve(): Promise<boolean>;
    decline(): Promise<boolean>;
    get manager(): ChatRequestsManager;
    get chat(): Chat;
    get user(): User;
}
