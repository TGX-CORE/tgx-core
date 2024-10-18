"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCollector = void 0;
const Collector_1 = require("./Collector");
const ClientEvent_1 = require("../Types/ClientEvent");
class MessageCollector extends Collector_1.Collector {
    constructor(chat, options = {}) {
        super(chat.client, options);
        this.chat = chat;
        this.received = 0;
        this.client.on(ClientEvent_1.ClientEvent.Message, this.handleCollect);
        this.once(Collector_1.CollectorEvent.End, () => {
            this.client.removeListener(ClientEvent_1.ClientEvent.Message, this.handleCollect);
        });
    }
    collect(message) {
        if (message.chat.id !== this.chat.id)
            return null;
        this.received++;
        return message.id;
    }
    dispose(message) {
        return message.chat.id === this.chat.id ? message.id : null;
    }
    get endReason() {
        if (this.options.max && this.collection.size >= this.options.max)
            return 'limit';
        if (this.options.maxProcess && this.received >= this.options.maxProcess)
            return 'processedLimit';
        return super.endReason;
    }
}
exports.MessageCollector = MessageCollector;
//# sourceMappingURL=MessageCollector.js.map