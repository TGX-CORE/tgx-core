"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collector = exports.CollectorEvent = void 0;
const collection_1 = require("@discordjs/collection");
const node_events_1 = __importDefault(require("node:events"));
var CollectorEvent;
(function (CollectorEvent) {
    CollectorEvent["Collect"] = "collect";
    CollectorEvent["Dispose"] = "dispose";
    CollectorEvent["End"] = "end";
    CollectorEvent["Ignore"] = "ignore";
})(CollectorEvent || (exports.CollectorEvent = CollectorEvent = {}));
class Collector extends node_events_1.default {
    constructor(client, options) {
        super({ captureRejections: true });
        Object.defineProperty(this, 'client', { value: client });
        this.filter = options.filter ?? (() => true);
        this.options = options;
        this.collection = new collection_1.Collection();
        this.ended = false;
        this.handleCollect = this.handleCollect.bind(this);
        this.handleDispose = this.handleDispose.bind(this);
        if (options.time)
            this._timeout = setTimeout(() => this.stop('time'), options.time).unref();
        if (options.idle)
            this._idleTimeout = setTimeout(() => this.stop('idle'), options.idle).unref();
    }
    async handleCollect(collect) {
        const collected = this.collect(collect);
        if (collected && this.filter(collect, this.collection)) {
            this.collection.set(collected, collect);
            this.emit(CollectorEvent.Collect, collect);
            if (this._idleTimeout) {
                clearTimeout(this._idleTimeout);
                this._idleTimeout = setTimeout(() => this.stop('idle'), this.options.idle).unref();
            }
        }
        else {
            this.emit(CollectorEvent.Ignore, collect);
        }
        this.checkEnd();
    }
    async handleDispose(dispose) {
        if (!this.options.dispose)
            return;
        const disposed = this.dispose(dispose);
        if (!disposed || !(await this.filter(dispose)) || !this.collection.has(disposed))
            return;
        this.collection.delete(disposed);
        this.emit(CollectorEvent.Dispose, dispose);
        this.checkEnd();
    }
    stop(reason = 'user') {
        this._endReason = reason;
        this.ended = true;
        this.emit(CollectorEvent.End, this.collection, reason);
    }
    checkEnd() {
        let reason = this.endReason;
        if (reason)
            this.stop(reason);
        return Boolean(reason);
    }
    get endReason() {
        return this._endReason;
    }
    get next() {
        return new Promise((resolve, reject) => {
            if (this.ended) {
                return reject(this.collection);
            }
            const cleanup = () => {
                this.removeListener(CollectorEvent.Collect, onCollect);
                this.removeListener(CollectorEvent.End, onEnd);
            };
            const onCollect = (collect) => {
                cleanup();
                resolve(collect);
            };
            const onEnd = () => {
                cleanup();
                reject(this.collection);
            };
            this.on(CollectorEvent.Collect, onCollect);
            this.on(CollectorEvent.End, onEnd);
        });
    }
    async *[Symbol.asyncIterator]() {
        const queue = [];
        const onCollect = (collect) => queue.push(collect);
        this.on(CollectorEvent.Collect, onCollect);
        try {
            while (queue.length || !this.ended) {
                if (queue.length) {
                    yield queue.shift();
                }
                else {
                    await new Promise(resolve => {
                        const tick = () => {
                            this.removeListener(CollectorEvent.Collect, tick);
                            this.removeListener(CollectorEvent.End, tick);
                            return;
                        };
                        this.on(CollectorEvent.Collect, tick);
                        this.on(CollectorEvent.End, tick);
                    });
                }
            }
        }
        finally {
            this.removeListener(CollectorEvent.Collect, onCollect);
        }
    }
}
exports.Collector = Collector;
//# sourceMappingURL=Collector.js.map