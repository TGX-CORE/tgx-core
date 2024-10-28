import type { Client } from '../Client/Client'

import { Collection } from '@discordjs/collection'
import { Message } from './Message'

import EventEmitter from 'node:events'

/**
 * The filter of a collector, this will decide wether to collect the data or not.
 */
export type CollectorFilter = (...args: unknown[]) => unknown

export enum CollectorEvent {
    Collect = 'collect',
    Dispose = 'dispose',
    End = 'end',
    Ignore = 'ignore'
}

/**
 * @property filter The filter of the collector.
 * @property dispose Wether to emit 'dispose' event when a collected data is disposed or removed.
 * @property time The maximum time for the collector to wait in milliseconds.
 * @property idle The maximum time for the collector to wait after a collection in milliseconds.
 */
export interface CollectorOptions {
    filter?: CollectorFilter
    dispose?: boolean
    time?: number
    idle?: number
}

export abstract class Collector<O extends CollectorOptions, I, C> extends EventEmitter {

    public declare readonly client: Client

    public filter: CollectorFilter
    public options: O
    public collection: Collection<I, any>

    public ended: boolean

    /**
     * @hidden
     */
    public _endReason?: string
    
    /**
     * @hidden
     */
    public _timeout?: NodeJS.Timeout

    /**
     * @hidden
     */
    public _idleTimeout?: NodeJS.Timeout

    public constructor(client: Client, options: O){
        super({ captureRejections: true })

        Object.defineProperty(this, 'client', { value: client })

        this.filter = options.filter ?? (() => true )

        this.options = options

        this.collection = new Collection()

        this.ended = false

        this.handleCollect = this.handleCollect.bind(this)
        this.handleDispose = this.handleDispose.bind(this)

        if(options.time) this._timeout = setTimeout(() => this.stop('time'), options.time).unref()
        if(options.idle) this._idleTimeout = setTimeout(() => this.stop('idle'), options.idle).unref()
    }

    public async handleCollect(collect: C){
        const collected = this.collect(collect)

        if(collected && this.filter(collect, this.collection)){
            this.collection.set(collected, collect)

            this.emit(CollectorEvent.Collect, collect)

            if(this._idleTimeout){
                clearTimeout(this._idleTimeout)
                this._idleTimeout = setTimeout(() => this.stop('idle'), this.options.idle).unref()
            }
        } else {
            this.emit(CollectorEvent.Ignore, collect)
        }
        this.checkEnd()
    }

    public async handleDispose(dispose: C){
        if(!this.options.dispose) return
        
        const disposed = this.dispose(dispose)
        if(!disposed || !(await this.filter(dispose)) || !this.collection.has(disposed)) return
        this.collection.delete(disposed)

        this.emit(CollectorEvent.Dispose, dispose)
        this.checkEnd()
    }

    public stop(reason: string = 'user'){

        this._endReason = reason
        this.ended = true

        this.emit(CollectorEvent.End, this.collection, reason)

    }

    public checkEnd(){
        let reason = this.endReason
        if(reason) this.stop(reason)
        return Boolean(reason)
    }

    get endReason(){
        return this._endReason
    }

    get next(): Promise<Message> {
        return new Promise((resolve, reject) => {
            if(this.ended) {
                return reject(this.collection)
            }

            const cleanup = () => {
                this.removeListener(CollectorEvent.Collect, onCollect)
                this.removeListener(CollectorEvent.End, onEnd)
            }

            const onCollect = (collect: Message) => {
                cleanup()
                resolve(collect)
            }

            const onEnd = () => {
                cleanup()
                reject(this.collection)
            }

            this.on(CollectorEvent.Collect, onCollect)
            this.on(CollectorEvent.End, onEnd)
        })
    }

    async *[Symbol.asyncIterator](){
        const queue: unknown[] = [ ]
        const onCollect = (collect: unknown) => queue.push(collect)
        this.on(CollectorEvent.Collect, onCollect)

        try{
            while(queue.length || !this.ended){
                if(queue.length){
                    yield queue.shift()
                } else {
                    await new Promise(resolve => {
                        const tick = () => {
                            this.removeListener(CollectorEvent.Collect, tick)
                            this.removeListener(CollectorEvent.End, tick)
                            return
                        }
                        this.on(CollectorEvent.Collect, tick)
                        this.on(CollectorEvent.End, tick)
                    })
                }
            } 
        } finally {
            this.removeListener(CollectorEvent.Collect, onCollect)
        }
    }

    public abstract collect(collect: C): I|null

    public abstract dispose(dispose: C): I|null

}