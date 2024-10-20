"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClass = void 0;
const shared_1 = require("../Internals/shared");
const Base_1 = require("./Base");
class BaseClass {
    constructor(client, packet) {
        Object.defineProperty(this, 'client', { value: client });
        if (packet) {
            this._patch(packet);
        }
    }
    /**
     * @hidden
     */
    _patch(data) {
        return this.defaults(data, this, true);
    }
    /**
     * @hidden
     */
    _clone() {
        return Object.assign(Object.create(this), this);
    }
    /**
     * @hidden
     */
    _update(data) {
        const cloned = this._clone();
        this._patch(data);
        return cloned;
    }
    /**
     * @hidden
     */
    get defaults() {
        return (defaults, context = this, top_layer) => {
            return (0, shared_1.defaults)(defaults, context, top_layer);
        };
    }
    /**
     * @hidden
     */
    get nest() {
        return Base_1.Base.nest;
    }
}
exports.BaseClass = BaseClass;
//# sourceMappingURL=BaseClass.js.map