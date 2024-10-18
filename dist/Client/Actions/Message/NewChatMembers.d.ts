import type { Message } from '../../../Classes/Message';
import { ClientEvent } from '../../../Types/ClientEvent';
import { GenericAction } from '../Generic';
export declare class NewChatMembersAction extends GenericAction {
    static pointer: ClientEvent;
    handleMessage(message: Message): void;
}
