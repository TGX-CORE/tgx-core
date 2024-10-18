import type { Message } from './Message'

import { Collector, CollectorEvent, CollectorOptions, type CollectorFilter } from './Collector'
import { ClientEvent } from '../Types/ClientEvent' 
import { Chat } from '../Types/Message'

/**
 * @property max The maximum count to collect.
 * @property maxProcess The maximum count of received datas.
 */
export interface MessageCollectorOptions extends CollectorOptions { 
    max?: number
    maxProcess?: number
}

export class MessageCollector extends Collector<MessageCollectorOptions, number, Message> {

    public chat: Chat

    public received: number

    public constructor(chat: Chat, options: MessageCollectorOptions = { }){
        super(chat.client, options)

        this.chat = chat

        this.received = 0

        this.client.on(ClientEvent.Message, this.handleCollect)

        this.once(CollectorEvent.End, () => {
            this.client.removeListener(ClientEvent.Message, this.handleCollect)
        })

    }

    public collect(message: Message){
        if(message.chat.id !== this.chat.id) return null
        this.received ++
        return message.id
    }

    public dispose(message: Message){
        return message.chat.id === this.chat.id ? message.id : null
    }

    get endReason(){
        if(this.options.max && this.collection.size >= this.options.max) return 'limit'
        if(this.options.maxProcess && this.received >= this.options.maxProcess) return 'processedLimit'
        return super.endReason
    }

}