import type { Chat, ReactionType } from '../Types/Message';
import type { Client } from '../Client/Client';
import type { Message } from './Message';
import { BaseClass } from './BaseClass';
import { BaseChat } from './BaseChat';
export interface MessageReactionCountPayload {
    chat?: BaseChat;
    message_id: number;
    date: number;
    reactions: {
        type: ReactionType;
        total_count: number;
    }[];
}
export declare class MessageReactionCount extends BaseClass<MessageReactionCount, MessageReactionCountPayload> implements Partial<MessageReactionCountPayload> {
    chat_id: number;
    message_id: number;
    constructor(client: Client, packet: MessageReactionCountPayload);
    _patch(packet: MessageReactionCountPayload): this;
    get chat(): Chat;
    get message(): Message;
}
//# sourceMappingURL=MessageReactionCount.d.ts.map