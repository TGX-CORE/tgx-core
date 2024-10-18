import type { Client } from '../../Client';
import { ForumTopic, type SerializedForumTopicPacket } from '../../../Classes/ForumTopic';
import { GenericCreator } from '../GenericCreator';
import { ClientEvent } from '../../../Types/ClientEvent';
import { Message } from '../../../Classes/Message';
export type ForumType = 'created' | 'edited' | 'reopened' | 'closed';
export declare class ForumTopicCreatedAction extends GenericCreator<ForumTopic, SerializedForumTopicPacket> {
    static pointer: ClientEvent;
    constructor(client: Client);
    handleMessage(_packet: Message): any;
    generate(_packet: SerializedForumTopicPacket): any;
}
