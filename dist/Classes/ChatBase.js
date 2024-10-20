"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBase = void 0;
const MessageCollector_1 = require("./MessageCollector");
const Message_1 = require("../Types/Message");
const FormData_1 = require("../Builders/FormData");
const BaseClass_1 = require("./BaseClass");
const File_1 = require("./File");
class ChatBase extends BaseClass_1.BaseClass {
    /**
     * Sends a text message to the current chat.
     *
     * @param text The text content of the message.
     */
    async sendText(text) {
        return this.send(Message_1.MessagePayloadMethod.Text, { text });
    }
    /**
     * Sends the stored invoice with the id to the current chat.
     *
     * @param id The id of the invoice.
     */
    async sendInvoice(id) {
        return this.client.invoices.send(id, this._chat);
    }
    /**
     * Sends a message to the current channel.
     *
     * @param method The method of the message.
     * @param packet The packet of what the message will contain.
     * @param form_data The form data for uploading media, see also {@link File}
     */
    async send(method, packet, form_data) {
        this.nest(packet, {}, (_, value) => {
            if (value instanceof File_1.File) {
                if (!form_data)
                    form_data = new FormData_1.FormDataBuilder();
                form_data.append(...value.form);
                return value.id;
            }
        });
        let message = await this.client.api[method](form_data?.parse(), {
            params: {
                ...packet,
                chat_id: this._chat ?? this.id,
                message_thread_id: this.message_thread_id
            },
            headers: { ...(form_data?.value.getHeaders()) },
            result: true,
            lean: true
        });
        return message ? this.client.actions.message.handle(message, false) : false;
    }
    /**
     * Creates a message collector to the current chat.
     *
     * @param options The options for the collector.
     */
    createMessageCollector(options) {
        return new MessageCollector_1.MessageCollector(this, options);
    }
}
exports.ChatBase = ChatBase;
//# sourceMappingURL=ChatBase.js.map