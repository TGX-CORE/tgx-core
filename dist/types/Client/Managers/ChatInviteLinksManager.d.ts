import type { ChatInviteLinkEditPayload } from '../../Classes/ChatInviteLink';
import type { SuperGroupChat } from '../../Classes/SuperGroupChat';
import type { ChannelChat } from '../../Classes/ChannelChat';
import type { GroupChat } from '../../Classes/GroupChat';
import { ChatInviteLink } from '../../Classes/ChatInviteLink';
import { CachedManager } from './CachedManager';
export interface ChatInviteLinkCreatePayload {
    chat_id: string | number;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    creates_join_request?: boolean;
}
export interface ChatInviteLinkSubscriptionPayload {
    chat_id: string | number;
    name?: string;
    subscription_period: number;
    subscription_price: number;
}
export interface BaseChatInviteLinkEditPayload {
    chat_id: string | number;
    invite_link: string;
}
export interface ChatInviteLinkSubscriptionEditPayload {
    chat_id: string | number;
    invite_link: string;
    name?: string;
}
export declare class ChatInviteLinksManager extends CachedManager<typeof ChatInviteLink> {
    chat: SuperGroupChat | GroupChat | ChannelChat;
    constructor(chat: SuperGroupChat | GroupChat | ChannelChat);
    export(): Promise<ChatInviteLink | boolean>;
    create(payload: ChatInviteLinkCreatePayload): Promise<ChatInviteLink | boolean>;
    createSubscription(payload: ChatInviteLinkSubscriptionPayload): Promise<ChatInviteLink | boolean>;
    edit(payload: ChatInviteLinkEditPayload): Promise<ChatInviteLink | boolean>;
    editSubscription(payload: ChatInviteLinkSubscriptionEditPayload): Promise<ChatInviteLink | boolean>;
    revoke(invite_link: string): Promise<ChatInviteLink | boolean>;
    private generate;
}
//# sourceMappingURL=ChatInviteLinksManager.d.ts.map