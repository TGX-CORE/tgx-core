import type { ChatMember, ChatMemberAdministrator, ChatMemberBanned, ChatMemberLeft, ChatMemberMember, ChatMemberOwner, ChatMemberRestricted } from '../Types/Member';
import type { MembersManager } from '../Client/Managers/MembersManager';
import type { Client } from '../Client/Client';
import type { ChatBoost } from './ChatBoost';
import type { Chat } from '../Types/Message';
import type { User } from './User';
import { ChatPermissions } from '../Builders/ChatPermissions';
import { BaseClass } from './BaseClass';
export interface AdminPermissions {
    can_manage_chat?: boolean;
    can_delete_messages?: boolean;
    can_manage_video_chats?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_post_stories?: boolean;
    can_edit_stories?: boolean;
    can_delete_stories?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
}
export declare class Member extends BaseClass<Member, ChatMember> implements Partial<ChatMemberOwner>, Partial<ChatMemberMember>, Partial<ChatMemberAdministrator>, Partial<ChatMemberBanned>, Partial<ChatMemberLeft>, Partial<ChatMemberRestricted> {
    private _user;
    private _chat;
    status: any;
    constructor(client: Client, packet: ChatMember);
    promote(is_anonymous: boolean, permissions: AdminPermissions): Promise<boolean>;
    ban(revoke_messages?: boolean, until_date?: number): Promise<boolean>;
    unban(only_if_banned: boolean): Promise<boolean>;
    restrict(permissions: ChatPermissions, use_independent_chat_permissions?: boolean, until_date?: number): Promise<boolean>;
    boosts(): Promise<Array<ChatBoost> | boolean>;
    fetch(): Promise<Member>;
    get id(): number;
    get chat(): Chat;
    get user(): User;
    get manager(): MembersManager;
    get partial(): boolean;
}
