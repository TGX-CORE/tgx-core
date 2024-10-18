import type { AcceptedEmoji, Chat } from '../Types/Message';
import type { User, UserPacket } from './User';
import { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
export interface MessageReactionPacket {
    type: 'paid' | 'emoji' | 'custom_emoji';
    message_id: number;
    date: number;
    chat_id: number;
    from?: UserPacket;
    actor_chat_id?: number;
    emoji?: AcceptedEmoji;
    custom_emoji_id?: string;
}
export declare class MessageReaction extends BaseClass<MessageReaction, MessageReactionPacket> {
    type: string;
    private _from;
    private _chat;
    actor_chat_id?: number;
    custom_emoji_id?: string;
    emoji?: string;
    constructor(client: Client, packet: MessageReactionPacket);
    get user(): User | undefined;
    get chat(): Chat | undefined;
    get actor_chat(): Chat | undefined;
    get value(): string;
    get id(): number;
}
