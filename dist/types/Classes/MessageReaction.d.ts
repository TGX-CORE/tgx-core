import type { AcceptedEmoji, Chat } from '../Types/Message';
import { BaseClass } from './BaseClass';
import { User } from './User';
import { Client } from 'src/Client/Client';
export interface MessageReactionPacket {
    type: 'paid' | 'emoji' | 'custom_emoji';
    message_id: number;
    date: number;
    chat_id: number;
    from?: User;
    actor_chat_id?: number;
    emoji?: AcceptedEmoji;
    custom_emoji_id?: string;
}
export declare class MessageReaction extends BaseClass<MessageReaction, MessageReactionPacket> {
    type: string;
    from?: User;
    actor_chat_id?: number;
    chat_id?: number;
    custom_emoji_id?: string;
    emoji?: string;
    constructor(client: Client, packet: MessageReactionPacket);
    get user(): User | undefined;
    get chat(): Chat | undefined;
    get actor_chat(): Chat | undefined;
    get value(): string;
    get id(): number;
}
//# sourceMappingURL=MessageReaction.d.ts.map