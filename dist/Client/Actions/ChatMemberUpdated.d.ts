import { ChatMemberUpdated, ChatMemberUpdatedPacket } from '../../Classes/ChatMemberUpdated';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericAction } from './Generic';
export declare class ChatMemeberUpdateAction extends GenericAction {
    static pointer: ClientEvent;
    handle(_packet: ChatMemberUpdatedPacket): ChatMemberUpdated | void;
}
