import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class ChannelPostAction extends GenericAction {
    static pointer: ClientEvent;
    handle(packet: MessagePacket): Message | void;
}
