import type { ForumType } from '../Client/Actions/Message/ForumTopicCreated';
import { SuperGroupChat } from './SuperGroupChat';
import { Client } from '../Client/Client';
import { ChatBase } from './ChatBase';
export interface SerializedForumTopicPacket extends Partial<ForumTopicPacket> {
    message_thread_id: number;
    type: ForumType;
}
export interface ForumTopicPacket {
    message_thread_id: number;
    name: string;
    icon_color: number;
    icon_custom_emoji_id: string;
}
export declare class ForumTopic extends ChatBase<ForumTopic, SerializedForumTopicPacket> implements SerializedForumTopicPacket {
    message_thread_id: number;
    icon_custom_emoji_id: string;
    icon_color: number;
    name: string;
    type: ForumType;
    constructor(client: Client, packet: SerializedForumTopicPacket);
    edit(name?: string, icon_custom_emoji_id?: string): Promise<boolean>;
    close(): Promise<boolean>;
    reopen(): Promise<boolean>;
    delete(): Promise<boolean>;
    unpinAll(): Promise<boolean>;
    get chat(): SuperGroupChat;
    get id(): number;
}
