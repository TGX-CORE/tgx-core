import type { MessagePacket } from '../Managers/MessagesManager';
import type { PollPacket } from '../../Classes/Poll';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class PollAction extends GenericAction {
    static pointer: ClientEvent;
    handleMessage(packet: MessagePacket): any;
    handle(packet: PollPacket, emit?: boolean): any;
}
