/**
 * The filter of a collector, this will decide wether to collect the data or not.
 */
export type CollectorFilter = (...args: any[]) => unknown

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