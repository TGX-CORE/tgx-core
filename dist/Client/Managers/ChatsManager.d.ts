import type { Chat } from '../../Types/Message';
import type { Client } from '../Client';
import { CachedManager } from './CachedManager';
export declare enum ChatHold {
    channel,
    private,
    group,
    supergroup
}
export declare class ChatsManager extends CachedManager<number, Chat> {
    constructor(client: Client);
    _add(packet: any, cache?: boolean, { id, extras, force, holds }?: any): any;
    fetch(chat_id: number): Promise<Chat | boolean>;
}
