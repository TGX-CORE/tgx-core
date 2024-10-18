import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export interface EditMessagePacket extends MessagePacket {
    edited: boolean;
}
export declare class EditedMessageAction extends GenericAction {
    static pointer: ClientEvent;
    handle(packet: EditMessagePacket): Message | void;
}
