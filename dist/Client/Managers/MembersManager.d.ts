import { CachedManager } from './CachedManager';
import { BaseGroupChat } from '../../Classes/BaseGroupChat';
import { type AdminPermissions, Member } from '../../Classes/Member';
import { ChatPermissions } from '../../Builders/ChatPermissions';
export declare class MembersManager extends CachedManager<number, Member> {
    chat: InstanceType<typeof BaseGroupChat>;
    constructor(chat: InstanceType<typeof BaseGroupChat>);
    promote(user_id: number, is_anonymous: boolean, permissions: AdminPermissions): Promise<boolean>;
    ban(user_id: number, revoke_messages?: boolean, until_date?: number): Promise<boolean>;
    unban(user_id: number, only_if_banned: boolean): Promise<boolean>;
    restrict(user_id: number, permissions: ChatPermissions, use_independent_chat_permissions?: boolean, until_date?: number): Promise<boolean>;
    fetch(user_id: number): Promise<Member>;
    count(): Promise<number>;
}
