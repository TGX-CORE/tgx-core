import type { ChatHold } from '../Client/Managers/ChatsManager';
import type { Client } from '../Client/Client';
import { MessagesManager } from '../Client/Managers/MessagesManager';
import { ChatBase } from './ChatBase';
export interface ChatPhoto {
    small_file_id: string;
    small_file_unique_id: string;
    big_file_id: string;
    big_file_unique_id: string;
}
export interface ChatPacket {
    type: keyof typeof ChatHold;
    id: number;
    is_forum?: boolean;
    user_name?: string;
    first_name?: string;
    last_name?: string;
}
export declare abstract class BaseChat extends ChatBase<BaseChat, ChatPacket> implements ChatPacket {
    id: number;
    type: keyof typeof ChatHold;
    last_message_id?: number;
    photo?: ChatPhoto;
    messages: MessagesManager;
    [key: string]: any;
    constructor(client: Client, packet: ChatPacket);
    setTitle(title: string): Promise<boolean>;
    setDescription(description: string): Promise<boolean>;
    setStrickerSet(sticker_set_name: string): Promise<boolean>;
    deleteStickerSet(): Promise<boolean>;
    leave(): Promise<boolean>;
    fetch(): Promise<BaseChat | boolean>;
    get partial(): boolean;
}
