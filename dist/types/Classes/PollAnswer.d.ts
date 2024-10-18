import type { BaseGroupChat } from './BaseGroupChat';
import type { Client } from '../Client/Client';
import type { Poll } from './Poll';
import { BaseClass } from './BaseClass';
import { BaseChat } from './BaseChat';
import { User } from './User';
export interface PollAnswerPacket {
    voter_chat?: BaseChat;
    option_ids: number[];
    poll_id: string;
    user?: User;
}
export declare class PollAnswer extends BaseClass<PollAnswer, PollAnswerPacket> implements Partial<PollAnswerPacket> {
    poll_id: string;
    user_id?: number;
    chat_id?: number;
    constructor(client: Client, packet: PollAnswerPacket);
    _patch(packet: PollAnswerPacket): this;
    get poll(): Poll;
    get id(): number;
    get user(): User;
    get voter_chat(): InstanceType<typeof BaseChat | typeof BaseGroupChat>;
}
//# sourceMappingURL=PollAnswer.d.ts.map