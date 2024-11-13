import { CollectorEvent, type CollectorOptions } from '../Types/Collector'

import { Collector } from './Collector'
import { ClientEvent } from '../Types/ClientEvent'
import { CallbackQuery } from './CallbackQuery'
import { Chat } from '../Types/Message'

/**
 * @property max The maximum count to collect.
 * @property maxProcess The maximum count of received datas.
 */
export interface CallbackCollectorOptions extends CollectorOptions {
    max?: number
    maxProcess?: number
    filter?: (query: CallbackQuery) => any
}

export class CallbackCollector extends Collector<CallbackCollectorOptions, string, CallbackQuery> {

    public chat: Chat

    public received: number

    public constructor(chat: Chat, options?: CallbackCollectorOptions){
        super(chat.client, options)

        this.chat = chat

        this.received =  0

        this.client.on(ClientEvent.CallbackQuery, this.handleCollect)
        this.once(CollectorEvent.End, () => {
            this.client.removeListener(ClientEvent.CallbackQuery, this.handleCollect)
        })

    }

    public collect(collect: CallbackQuery){
        let message = this.chat.messages.cache.get(collect._message)
        if(message?.chat.id !== this.chat.id) return null
        this.received ++
        return collect.id
    }

    public dispose(collect: CallbackQuery){
        return collect._message === this.chat.id ? collect.id : null
    }

    get endReason(){
        if(this.options?.max && this.collection.size >= this.options.max) return 'limit'
        if(this.options?.maxProcess && this.received >= this.options.maxProcess) return 'processedLimit'
        return super.endReason
    }
    
}