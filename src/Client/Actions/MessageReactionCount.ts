import { MessageReactionCountPacket } from '../../Classes/MessageReactionCount'
import { ClientEvent } from '../../Types/ClientEvent'
import { GenericAction } from './Generic'

export class MessageReactionCountAction extends GenericAction { 

    public static pointer: ClientEvent = ClientEvent.MessageReactionCount

    public override handle(packet: MessageReactionCountPacket){
        const partial_chat = this.partials.chat(packet.chat)

        if( partial_chat ){
            const message = partial_chat.message.cache.get(packet.message_id)
            if( message ){
                const increased: { [key: string]: number } = { }
                const decreased: any = { }

                for(let reaction of packet.reactions){
                    let current = message.reactions.count_records[this.client.actions['message_reaction'].resolve(reaction.type)]

                    if(current < reaction.total_count){
                        increased[this.client.actions['message_reaction'].resolve(reaction)] = reaction.total_count
                    } else if(current > reaction.total_count){
                        decreased[this.client.actions['message_reaction'].resolve(reaction)] = reaction.total_count 
                    }

                }

                return this.emit(MessageReactionCountAction.pointer, message, decreased, increased)
            }
            return this.client.logger.warn('A message reaction count update has been rejected; the message has not been cached yet.')
        }
        return this.client.logger.warn('A message reaction count update has been rejected; the chat has not been cached yet.')
    }

}