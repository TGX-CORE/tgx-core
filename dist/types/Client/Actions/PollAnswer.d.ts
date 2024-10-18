import type { PollAnswerPacket } from '../../Classes/PollAnswer';
import type { Client } from '../Client';
import { GenericAction } from './Generic';
import { PollAnswer } from '../../Classes/PollAnswer';
export declare class PollAnswerAction extends GenericAction {
    static pointer: string;
    constructor(client: Client);
    handle(packet: PollAnswerPacket, parse?: boolean): PollAnswer | void;
}
//# sourceMappingURL=PollAnswer.d.ts.map