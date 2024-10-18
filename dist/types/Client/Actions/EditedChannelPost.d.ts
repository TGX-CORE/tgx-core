import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from 'src/Classes/Message';
import { GenericAction } from './Generic';
export declare class EditedChannelPostAction extends GenericAction {
    static pointer: string;
    handle(packet: MessagePacket): Message | void;
}
//# sourceMappingURL=EditedChannelPost.d.ts.map