"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const Piece_1 = require("./Piece");
/**
 * An event piece.
 */
class Event extends Piece_1.Piece {
    constructor(context_piece, context_metadata) {
        super(context_piece, context_metadata);
        this.event = context_metadata.event ?? this.name;
        this.once = context_metadata.once ?? false;
        this.emitter = context_metadata.emitter ?? this.client;
        this.utilizer = this.emitter && this.event ? (this.once ? this._runOnce.bind(this) : this._run.bind(this)) : null;
        if (!this.emitter && !this.utilizer)
            this.enabled = false;
    }
    /**
     * Activates or resumes the listener, this is activated on load.
     */
    listen() {
        if (this.utilizer) {
            const maxListeners = this.emitter.getMaxListeners();
            if (maxListeners !== 0)
                this.emitter.setMaxListeners(maxListeners + 1);
            this.emitter[this.once ? 'once' : 'on'](this.event, this.utilizer);
        }
    }
    /**
     * Stops the listener.
     */
    stop() {
        this.emitter.removeListener(this.event, this.utilizer);
    }
    /**
     * @hidden
     */
    onLoad() {
        this.listen();
        return super.onLoad();
    }
    /**
     * @hidden
     */
    _run(...args) {
        this.run(...args);
    }
    /**
     * @hidden
     */
    _runOnce(...args) {
        this.run(...args);
        this.registry.unload(this);
    }
}
exports.Event = Event;
//# sourceMappingURL=Event.js.map