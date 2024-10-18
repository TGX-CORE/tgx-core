import type { MessagePayload } from '../Types/Message';
import type { Message } from './Message';
import { MessageCollector, type MessageCollectorOptions } from './MessageCollector';
import { MessagePayloadMethod } from '../Types/Message';
import { FormDataBuilder } from '../Builders/FormData';
import { BaseClass } from './BaseClass';
export declare abstract class ChatBase<T, P> extends BaseClass<T, P> {
    /**
     * @hidden
     */
    protected _chat: number | undefined;
    message_thread_id: number | undefined;
    abstract id: number;
    /**
     * Sends a text message to the current channel.
     *
     * @param text The text content of the message.
     */
    sendText(text: string): Promise<Message>;
    /**
     * Sends a message to the current channel.
     *
     * @param method The method of the message.
     * @param packet The packet of what the message will contain.
     * @param form_data The form data for uploading media, see also {@link File}
     */
    send(method: MessagePayloadMethod, packet: MessagePayload, form_data?: FormDataBuilder): Promise<Message>;
    /**
     * Creates a message collector to the current chat.
     *
     * @param options The options for the collector.
     */
    createMessageCollector(options: MessageCollectorOptions): MessageCollector;
}
