import type { Chat, ReactionType } from '../Types/Message';
import type { Client } from '../Client/Client';
import type { Message } from './Message';
import { BaseClass } from './BaseClass';
import { BaseChat } from './BaseChat';
export interface MessageReactionCountPacket {
    chat?: BaseChat;
    message_id: number;
    date: number;
    reactions: {
        type: ReactionType;
        total_count: number;
    }[];
}
export declare class MessageReactionCount extends BaseClass<MessageReactionCount, MessageReactionCountPacket> implements Partial<MessageReactionCountPacket> {
    private _message;
    private _chat;
    constructor(client: Client, packet: MessageReactionCountPacket);
    get chat(): Chat;
    get message(): Message;
}
