"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackCollector = void 0;
const Collector_1 = require("./Collector");
const ClientEvent_1 = require("../Types/ClientEvent");
class CallbackCollector extends Collector_1.Collector {
    constructor(message, options) {
        super(message.client, options);
        this.message = message;
        this.received = 0;
        this.client.on(ClientEvent_1.ClientEvent.CallbackQuery, this.handleCollect);
        this.once(Collector_1.CollectorEvent.End, () => {
            this.client.removeListener(ClientEvent_1.ClientEvent.CallbackQuery, this.handleCollect);
        });
    }
    collect(query) {
        if (query._message !== this.message.id)
            return null;
        this.received++;
        return query.id;
    }
    dispose(query) {
        return query._message === this.message.id ? query.id : null;
    }
    get endReason() {
        if (this.options.max && this.collection.size >= this.options.max)
            return 'limit';
        if (this.options.maxProcess && this.received >= this.options.maxProcess)
            return 'processedLimit';
        return super.endReason;
    }
}
exports.CallbackCollector = CallbackCollector;
//# sourceMappingURL=CallbackCollector.js.map