import type { Chat, MessagePayload,  } from '../Types/Message'
import type { Message } from './Message'

import { MessageCollector, type MessageCollectorOptions } from './MessageCollector'
import { MessagePayloadMethod } from '../Types/Message'
import { FormDataBuilder } from '../Builders/FormData'
import { BaseClass } from './BaseClass'
import { File } from './File'

export abstract class ChatBase<T, P> extends BaseClass<T, P> {

    /**
     * @hidden
     */
    protected declare _chat: number

    public message_thread_id?: number

    public abstract id: number

    /**
     * Sends a text message to the current chat.
     * 
     * @param text The text content of the message.
     */
    public async sendText(text: string) {
        return this.send(MessagePayloadMethod.Text, { text })
    }

    /**
     * Sends the stored invoice with the id to the current chat.
     * 
     * @param id The id of the invoice.
     */
    public async sendInvoice(id: string) {
        return this.client.invoices.send(id, this._chat)
    }

    /**
     * Sends a message to the current channel.
     * 
     * @param method The method of the message.
     * @param packet The packet of what the message will contain.
     * @param form_data The form data for uploading media, see also {@link File}
     */
    public async send(method: MessagePayloadMethod, packet: MessagePayload, form_data?: FormDataBuilder): Promise<Message> {
        this.nest(packet, {}, (_, value) => {
            if(value instanceof File){
                if(!form_data) form_data = new FormDataBuilder()
                form_data!.append(...value.form)
                return value.id
            }
        })

        let message = await this.client.api[method](form_data?.parse(), {
            params: {
                ...packet,
                chat_id: this._chat ?? this.id,
                message_thread_id: this.message_thread_id
            },
            headers: { ...(form_data?.value.getHeaders()) },
            result: true,
            lean: true
        })

        return message ? this.client.actions.message.handle(message, false) : false
    }

    /**
     * Creates a message collector to the current chat.
     * 
     * @param options The options for the collector.
     */
    public createMessageCollector(options: MessageCollectorOptions): MessageCollector {
        return new MessageCollector(this as unknown as Chat, options)
    }

}