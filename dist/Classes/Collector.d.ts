import type { Client } from '../Client/Client';
import { Collection } from '@discordjs/collection';
import EventEmitter from 'node:events';
import { Message } from './Message';
/**
 * The filter of a collector, this will decide wether to collect the data or not.
 */
export type CollectorFilter = (...args: unknown[]) => unknown;
export declare enum CollectorEvent {
    Collect = "collect",
    Dispose = "dispose",
    End = "end",
    Ignore = "ignore"
}
/**
 * @property filter The filter of the collector.
 * @property dispose Wether to emit 'dispose' event when a collected data is disposed or removed.
 * @property time The maximum time for the collector to wait in milliseconds.
 * @property idle The maximum time for the collector to wait after a collection in milliseconds.
 */
export interface CollectorOptions {
    filter?: CollectorFilter;
    dispose?: boolean;
    time?: number;
    idle?: number;
}
export declare abstract class Collector<O extends CollectorOptions, I, C> extends EventEmitter {
    readonly client: Client;
    filter: CollectorFilter;
    options: O;
    collection: Collection<I, any>;
    ended: boolean;
    /**
     * @hidden
     */
    _endReason?: string;
    /**
     * @hidden
     */
    _timeout?: NodeJS.Timeout;
    /**
     * @hidden
     */
    _idleTimeout?: NodeJS.Timeout;
    constructor(client: Client, options: O);
    handleCollect(collect: C): Promise<void>;
    handleDispose(dispose: C): Promise<void>;
    stop(reason?: string): void;
    checkEnd(): boolean;
    get endReason(): string | undefined;
    get next(): Promise<Message>;
    [Symbol.asyncIterator](): AsyncGenerator<unknown, void, unknown>;
    abstract collect(collect: C): I | null;
    abstract dispose(dispose: C): I | null;
}
