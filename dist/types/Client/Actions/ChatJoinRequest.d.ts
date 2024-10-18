import { ChatJoinRequest, ChatJoinRequestPacket } from '../../Classes/ChatJoinRequest';
import { GenericAction } from './Generic';
export declare class ChatJoinRequestAction extends GenericAction {
    static pointer: string;
    handle(packet: ChatJoinRequestPacket): ChatJoinRequest | void;
}
//# sourceMappingURL=ChatJoinRequest.d.ts.map