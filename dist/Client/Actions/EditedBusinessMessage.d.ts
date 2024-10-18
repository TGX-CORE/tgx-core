import type { MessagePacket } from '../Managers/MessagesManager';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class EditedBusinessMessageAction extends GenericAction {
    static pointer: ClientEvent;
    handle(packet: MessagePacket): any;
}
