import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import { GenericAction } from './Generic';
export interface EditMessagePacket extends MessagePacket {
    edited: boolean;
}
export declare class EditedMessageAction extends GenericAction {
    static pointer: string;
    handle(packet: EditMessagePacket): Message | void;
}
//# sourceMappingURL=EditedMessage.d.ts.map