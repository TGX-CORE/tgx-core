import { ChatJoinRequest } from '../../Classes/ChatJoinRequest';
import { BaseGroupChat } from '../../Classes/BaseGroupChat';
import { CachedManager } from './CachedManager';
export declare class ChatRequestsManager extends CachedManager<string, ChatJoinRequest> {
    chat: InstanceType<typeof BaseGroupChat>;
    constructor(chat: InstanceType<typeof BaseGroupChat>);
    approve(user_id: number): Promise<boolean>;
    decline(user_id: number): Promise<boolean>;
}
