import { MessageReactionCountPacket } from '../../Classes/MessageReactionCount';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class MessageReactionCountAction extends GenericAction {
    static pointer: ClientEvent;
    handle(packet: MessageReactionCountPacket): any;
}
