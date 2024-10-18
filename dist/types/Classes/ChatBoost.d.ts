import type { ChatBoostPacket, ChatBoostSource } from '../Types/Chatboost';
import type { Client } from '../Client/Client';
import type { Chat } from '../Types/Message';
import { BaseClass } from './BaseClass';
import { User } from './User';
export declare class ChatBoost extends BaseClass<ChatBoost, ChatBoostPacket> {
    chat_id: number;
    source?: ChatBoostSource;
    boost?: ChatBoost;
    remove_date?: number;
    constructor(client: Client, packet: ChatBoostPacket);
    _patch(packet: ChatBoostPacket): this;
    get removed(): boolean;
    get chat(): Chat;
    get user(): User | undefined;
}
//# sourceMappingURL=ChatBoost.d.ts.map