import type { PollAnswerPacket } from '../../Classes/PollAnswer';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class PollAnswerAction extends GenericAction {
    static pointer: ClientEvent;
    handle(packet: PollAnswerPacket): any;
}
