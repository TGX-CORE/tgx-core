import type { MessageReaction } from './MessageReaction';
import type { Client } from '../Client/Client';
export declare class MessageReactions {
    client: Client;
    records: {
        [key: string]: MessageReaction[];
    };
    count_records: {
        [key: string]: number;
    };
    constructor(client: Client);
    add(reaction: MessageReaction): void;
    remove(reaction: string, sender_id: number): void;
    count(reaction: string): number;
    has(reaction: string, sender_id: number): MessageReaction | boolean;
}
