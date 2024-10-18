import type { Client } from '../Client/Client';
import type { ChatPacket } from './BaseChat';
import { TopicsManager } from '../Client/Managers/TopicsManager';
import { BaseGroupChat } from './BaseGroupChat';
export declare class SuperGroupChat extends BaseGroupChat {
    topics: TopicsManager;
    constructor(client: Client, packet: ChatPacket);
    setAdministratorCustomTitle(user_id: number, custom_title: string): Promise<boolean>;
}
