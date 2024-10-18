import { BaseClass } from './BaseClass';
import { Client } from '../Client/Client';
import { TopicsManager } from '../Client/Managers/TopicsManager';
export interface ForumTopic {
    message_thread_id: number;
    name: string;
    icon_color: number;
    icon_custom_emoji_id: string;
}
export declare class Topic extends BaseClass<Topic> implements Partial<ForumTopic> {
    readonly manager: TopicsManager;
    message_thread_id: number;
    constructor(client: Client, packet: ForumTopic, extras: [TopicsManager]);
    edit(name?: string, icon_custom_emoji_id?: string): Promise<boolean>;
    close(): Promise<boolean>;
    reopen(): Promise<boolean>;
    delete(): Promise<boolean>;
    unpinAll(): Promise<boolean>;
    get id(): number;
}
//# sourceMappingURL=Topic.d.ts.map