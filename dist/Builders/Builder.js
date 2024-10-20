"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const shared_1 = require("../Internals/shared");
class Builder {
    constructor(packet) {
        (0, shared_1.defaults)(packet, this, true);
    }
    /**
     * @hidden
     */
    parse({ parseVal, parseArray, returnValue, value } = this) {
        if (returnValue)
            return value;
        if (Array.isArray(value)) {
            value.map((v) => this.parse({ parseArray, value: v }));
            return parseVal || parseArray ? JSON.stringify(value) : value;
        }
        else if ((0, shared_1.isJson)(value)) {
            (0, shared_1.nest)(value, { merge: true, array: true }, (type, key, v) => {
                return this.parse({ parseArray, value: v });
            });
            return parseVal ? JSON.stringify(value) : value;
        }
        return value instanceof Builder ? value.parse() : value;
    }
}
exports.Builder = Builder;
//# sourceMappingURL=Builder.js.map