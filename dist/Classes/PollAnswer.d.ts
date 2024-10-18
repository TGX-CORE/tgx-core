import type { SuperGroupChat } from './SuperGroupChat';
import type { PrivateChat } from './PrivateChat';
import type { ChannelChat } from './ChannelChat';
import type { Client } from '../Client/Client';
import type { GroupChat } from './GroupChat';
import type { User, UserPacket } from './User';
import type { Poll } from './Poll';
import { ChatPacket } from './BaseChat';
import { BaseClass } from './BaseClass';
export interface PollAnswerPacket {
    option_ids: number[];
    poll_id: string;
    voter_chat?: ChatPacket;
    user?: UserPacket;
}
export declare class PollAnswer extends BaseClass<PollAnswer, PollAnswerPacket> implements PollAnswerPacket {
    poll_id: string;
    option_ids: number[];
    private _voter_chat?;
    private _from?;
    constructor(client: Client, packet: PollAnswerPacket);
    get poll(): Poll;
    get id(): number;
    get user(): User | undefined;
    get voter_chat(): PrivateChat | ChannelChat | GroupChat | SuperGroupChat | undefined;
}
