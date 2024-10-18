import type { PollAnswerPacket } from '../../Classes/PollAnswer'

import { PollAnswer } from '../../Classes/PollAnswer'
import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export class PollAnswerAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.PollAnswer

    public override handle(packet: PollAnswerPacket){
        const poll = this.client.polls.cache.get(packet.poll_id)

        if(poll){
            const answer = new PollAnswer(this.client, packet)
            poll?.answers!.update(answer.id, packet.option_ids)

            return this.emit(PollAnswerAction.pointer, poll, answer)
        }

        return this.client.logger.warn('A poll answer has been rejected; the poll has not been cached.')
    }

}