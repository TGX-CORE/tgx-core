import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export interface BusinessMessagePacket extends MessagePacket {
    edited: boolean;
}
export declare class BusinessMessageAction extends GenericAction {
    static pointer: ClientEvent;
    handle(packet: BusinessMessagePacket): Message | void;
}
