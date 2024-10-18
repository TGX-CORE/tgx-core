import { ChatJoinRequest, ChatJoinRequestPacket } from '../../Classes/ChatJoinRequest';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class ChatJoinRequestAction extends GenericAction {
    static pointer: ClientEvent;
    handle(_packet: ChatJoinRequestPacket): ChatJoinRequest | void;
}
