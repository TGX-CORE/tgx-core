import type { Message } from '../../../Classes/Message'

import { ClientEvent } from '../../../Types/ClientEvent'
import { GenericAction } from '../Generic'

export class ForumTopicReopenedAction extends GenericAction {

    public static pointer: ClientEvent.ForumTopicReopened

    public handleMessage(_packet: Message){
        let packed: any[] = this.prepack(_packet) as any[]

        let { _chat, message_thread_id, topic } = packed[1]
        let packet = {
            type: 'reopened',
            _chat, message_thread_id,
            ...topic,
        }

        return this.client.actions[ClientEvent.ForumTopicCreated].generate(packet)
    }

}