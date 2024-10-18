import type { MessagePacket } from '../../Client/Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import { GenericAction } from './Generic';
export declare class MessageAction extends GenericAction {
    handle(packet: MessagePacket, parse?: boolean): Message | void;
}
//# sourceMappingURL=Message.d.ts.map