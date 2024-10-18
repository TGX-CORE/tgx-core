import type { MessagePayload } from '../Types/Message';
import type { FormDataBuilder } from '../Builders/FormData';
import type { Message } from './Message';
import { MessagePayloadMethod } from '../Types/Message';
import { BaseClass } from './BaseClass';
export declare abstract class Chat<T, P> extends BaseClass<T, P> {
    abstract id: number;
    sendText(text: string): Promise<Message>;
    send(method: MessagePayloadMethod, packet: MessagePayload, form_data?: FormDataBuilder): Promise<Message>;
}
