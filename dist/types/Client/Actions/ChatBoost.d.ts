import type { ChatBoostPacket } from '../../Types/Chatboost';
import type { Client } from '../Client';
import { ChatBoost } from '../../Classes/ChatBoost';
import { GenericCreator } from './GenericCreator';
export declare class ChatBoostAction extends GenericCreator<ChatBoost, ChatBoostPacket> {
    static pointer: string;
    constructor(client: Client);
}
//# sourceMappingURL=ChatBoost.d.ts.map