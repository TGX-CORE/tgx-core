import type { FormDataBuilder } from '../Builders/FormData';
import type { ChatHold } from '../Client/Managers/ChatsManager';
import type { MessagePayload } from '../Types/Message';
import type { Client } from '../Client/Client';
import type { Message } from './Message';
import { MessagesManager } from '../Client/Managers/MessagesManager';
import { MessagePayloadMethod } from '../Types/Message';
import { BaseClass } from './BaseClass';
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
export declare abstract class BaseChat extends BaseClass<BaseChat, ChatPacket> implements ChatPacket {
    id: number;
    type: keyof typeof ChatHold;
    last_message_id?: number;
    photo?: ChatPhoto;
    messages: MessagesManager;
    [key: string]: any;
    constructor(client: Client, packet: ChatPacket);
    sendText(text: string): Promise<boolean | Message>;
    send(pointer: MessagePayloadMethod, payload: Partial<MessagePayload>, form_data?: FormDataBuilder): Promise<Message | boolean>;
    setTitle(title: string): Promise<boolean>;
    setDescription(description: string): Promise<boolean>;
    setStrickerSet(sticker_set_name: string): Promise<boolean>;
    deleteStickerSet(): Promise<boolean>;
    leave(): Promise<boolean>;
    fetch(): Promise<BaseChat | boolean>;
    get partial(): boolean;
}
//# sourceMappingURL=BaseChat.d.ts.map