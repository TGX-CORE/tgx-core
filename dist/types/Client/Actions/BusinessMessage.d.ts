import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import { GenericAction } from './Generic';
export interface BusinessMessagePacket extends MessagePacket {
    edited: boolean;
}
export declare class BuseinessMessageAction extends GenericAction {
    static pointer: string;
    handle(packet: BusinessMessagePacket): Message | void;
}
//# sourceMappingURL=BusinessMessage.d.ts.map