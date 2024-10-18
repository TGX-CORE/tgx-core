import { BaseClass } from './BaseClass';
import { Client } from '../Client/Client';
import { TopicsManager } from '../Client/Managers/TopicsManager';
export interface ForumTopicPacket {
    message_thread_id: number;
    name: string;
    icon_color: number;
    icon_custom_emoji_id: string;
}
export declare class ForumTopic extends BaseClass<ForumTopic, ForumTopicPacket> implements ForumTopicPacket {
    readonly manager: TopicsManager;
    message_thread_id: number;
    icon_custom_emoji_id: string;
    icon_color: number;
    name: string;
    constructor(client: Client, packet: ForumTopic, extras: [TopicsManager]);
    edit(name?: string, icon_custom_emoji_id?: string): Promise<boolean>;
    close(): Promise<boolean>;
    reopen(): Promise<boolean>;
    delete(): Promise<boolean>;
    unpinAll(): Promise<boolean>;
    get id(): number;
}
