import { CachedManager } from './CachedManager';
import { BaseGroupChat } from 'src/Classes/BaseGroupChat';
import { ChatJoinRequest } from '../../Classes/ChatJoinRequest';
export declare class ChatRequestsManager extends CachedManager<typeof ChatJoinRequest> {
    chat: InstanceType<typeof BaseGroupChat>;
    constructor(chat: InstanceType<typeof BaseGroupChat>);
    approve(user_id: number): Promise<boolean>;
    decline(user_id: number): Promise<boolean>;
}
//# sourceMappingURL=ChatRequestsManager.d.ts.map