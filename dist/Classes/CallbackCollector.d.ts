import type { Message } from './Message';
import { Collector, CollectorOptions } from './Collector';
import { CallbackQuery } from './CallbackQuery';
/**
 * @property max The maximum count to collect.
 * @property maxProcess The maximum count of received datas.
 */
export interface CallbackCollectorOptions extends CollectorOptions {
    max?: number;
    maxProcess?: number;
}
export declare class CallbackCollector extends Collector<CallbackCollectorOptions, string, CallbackQuery> {
    message: Message;
    received: number;
    constructor(message: Message, options: CallbackCollectorOptions);
    collect(query: CallbackQuery): string | null;
    dispose(query: CallbackQuery): string | null;
    get endReason(): string | undefined;
}
