import type { Message } from './Message';
import { Collector, CollectorOptions } from './Collector';
import { Chat } from '../Types/Message';
/**
 * @property max The maximum count to collect.
 * @property maxProcess The maximum count of received datas.
 */
export interface MessageCollectorOptions extends CollectorOptions {
    max?: number;
    maxProcess?: number;
}
export declare class MessageCollector extends Collector<MessageCollectorOptions, number, Message> {
    chat: Chat;
    received: number;
    constructor(chat: Chat, options?: MessageCollectorOptions);
    collect(message: Message): number | null;
    dispose(message: Message): number | null;
    get endReason(): string | undefined;
}
