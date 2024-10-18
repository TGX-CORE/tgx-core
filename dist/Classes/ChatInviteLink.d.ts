import type { BaseChatInviteLinkEditPayload, ChatInviteLinkSubscriptionEditPayload } from '../Client/Managers/ChatInviteLinksManager';
import type { Client } from '../Client/Client';
import type { User } from './User';
import { ChatInviteLinksManager } from '../Client/Managers/ChatInviteLinksManager';
import { BaseClass } from './BaseClass';
export interface ChatInviteLinkPacket {
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
export interface ChatInviteLinkEditPayload extends BaseChatInviteLinkEditPayload {
    name?: string;
    member_limit?: number;
    expire_date?: number;
    creates_join_request?: boolean;
}
export declare class ChatInviteLink extends BaseClass<ChatInviteLink, ChatInviteLinkPacket> implements Partial<ChatInviteLinkPacket> {
    invite_link: string;
    subscription_period?: number;
    manager: ChatInviteLinksManager;
    constructor(client: Client, packet: ChatInviteLinkPacket, extras: [ChatInviteLinksManager]);
    edit(payload: ChatInviteLinkEditPayload | ChatInviteLinkSubscriptionEditPayload): Promise<ChatInviteLink | boolean>;
    revoke(): Promise<ChatInviteLink | boolean>;
}
