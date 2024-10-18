import type { Message } from './Message'

import { Collector, CollectorEvent, CollectorOptions } from './Collector'
import { ClientEvent } from '../Types/ClientEvent'
import { CallbackQuery } from './CallbackQuery'

/**
 * @property max The maximum count to collect.
 * @property maxProcess The maximum count of received datas.
 */
export interface CallbackCollectorOptions extends CollectorOptions {
    max?: number
    maxProcess?: number
}

export class CallbackCollector extends Collector<CallbackCollectorOptions, string, CallbackQuery> {

    public message: Message

    public received: number

    public constructor(message: Message, options: CallbackCollectorOptions){
        super(message.client, options)

        this.message = message

        this.received =  0

        this.client.on(ClientEvent.CallbackQuery, this.handleCollect)

        this.once(CollectorEvent.End, () => {
            this.client.removeListener(ClientEvent.CallbackQuery, this.handleCollect)
        })

    }

    public collect(query: CallbackQuery){
        if(query._message !== this.message.id) return null
        this.received ++ 
        return query.id
    }

    public dispose(query: CallbackQuery){
        return query._message === this.message.id ? query.id : null
    }

    get endReason(){
        if(this.options.max && this.collection.size >= this.options.max) return 'limit'
        if(this.options.maxProcess && this.received >= this.options.maxProcess) return 'processedLimit'
        return super.endReason
    }
    
}