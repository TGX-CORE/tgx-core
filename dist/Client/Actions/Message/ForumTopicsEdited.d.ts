import type { Message } from '../../../Classes/Message';
import { ClientEvent } from '../../../Types/ClientEvent';
import { GenericAction } from '../Generic';
export declare class ForumTopicEditedAction extends GenericAction {
    static pointer: ClientEvent.ForumTopicEdited;
    handleMessage(_packet: Message): any;
}
