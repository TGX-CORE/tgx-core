import type { Message } from '../../../Classes/Message';
import { ClientEvent } from '../../../Types/ClientEvent';
import { GenericAction } from '../Generic';
export declare class ForumTopicReopenedAction extends GenericAction {
    static pointer: ClientEvent.ForumTopicReopened;
    handleMessage(_packet: Message): any;
}
