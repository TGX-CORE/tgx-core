import type { Client } from '../Client';
import { BaseChat } from '../../Classes/BaseChat';
import { CachedManager } from './CachedManager';
export declare enum ChatHold {
    channel,
    private,
    group,
    supergroup
}
export declare class ChatsManager extends CachedManager<typeof BaseChat> {
    constructor(client: Client);
    _add(packet: any, cache?: boolean, { id, extras, force, holds }?: any): any;
    fetch(chat_id: number): Promise<BaseChat | boolean>;
}
//# sourceMappingURL=ChatsManager.d.ts.map