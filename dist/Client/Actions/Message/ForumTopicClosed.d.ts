import type { Message } from '../../../Classes/Message';
import { ClientEvent } from '../../../Types/ClientEvent';
import { GenericAction } from '../Generic';
export declare class ForumTopicClosedAction extends GenericAction {
    static pointer: ClientEvent.ForumTopicClosed;
    handleMessage(_packet: Message): any;
}
