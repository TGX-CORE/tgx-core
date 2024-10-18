import type { Client } from '../../Client'

import { ForumTopic, type SerializedForumTopicPacket } from '../../../Classes/ForumTopic'
import { GenericCreator } from '../GenericCreator'
import { ClientEvent } from '../../../Types/ClientEvent'
import { Message } from '../../../Classes/Message'

export type ForumType = 'created'|'edited'|'reopened'|'closed'
export class ForumTopicCreatedAction extends GenericCreator<ForumTopic, SerializedForumTopicPacket> {

    public static pointer: ClientEvent = ClientEvent.ForumTopicCreated

    public constructor(client: Client){
        super(client, ForumTopic, ForumTopicCreatedAction.pointer)
    }

    public override handleMessage(_packet: Message) {
        let packed: any[] = this.prepack(_packet) as any[]

        let { _chat, message_thread_id, topic } = packed[1]
        let packet = {
            type: 'created',
            _chat, message_thread_id,
            ...topic,
        }

        return this.generate(packet)
    }

    public generate(_packet: SerializedForumTopicPacket){
        let forum = this.handle(_packet, false)
        forum.chat.topics._add(forum, true, { force: true })
        return forum
    }

}