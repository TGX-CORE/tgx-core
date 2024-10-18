import type { MessagePacket } from '../Managers/MessagesManager';
import type { Message } from 'src/Classes/Message';
import { GenericAction } from './Generic';
export declare class ChannelPostAction extends GenericAction {
    static pointer: string;
    handle(packet: MessagePacket): Message | void;
}
//# sourceMappingURL=ChannelPost.d.ts.map