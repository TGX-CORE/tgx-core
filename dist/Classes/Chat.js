"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const Message_1 = require("../Types/Message");
const BaseClass_1 = require("./BaseClass");
class Chat extends BaseClass_1.BaseClass {
    async sendText(text) {
        return this.send(Message_1.MessagePayloadMethod.Text, { text });
    }
    async send(method, packet, form_data) {
        form_data = form_data?.parse();
        let message = await this.client.api[method](form_data, {
            params: {
                ...packet,
                chat_id: this.id
            },
            headers: { ...form_data?.getHeaders() },
            result: true,
            lean: true
        });
        return message ? this.client.actions.message.handle(message, false) : false;
    }
}
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map