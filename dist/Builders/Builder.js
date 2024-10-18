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
        let parsed;
        if (returnValue)
            return value;
        if (Array.isArray(value)) {
            parsed = [];
            for (let val of value) {
                if (Array.isArray(val)) {
                    parsed.push(this.parse({ value: val }));
                    continue;
                }
                if (val instanceof Builder) {
                    parsed.push(val.parse());
                    continue;
                }
                parsed.push(val);
            }
            return parseVal || parseArray ? JSON.stringify(parsed) : parsed;
        }
        else {
            parsed = {};
            for (let val in value) {
                if (value[val] instanceof Builder) {
                    parsed[val] = value[val].parse();
                }
                else {
                    if (Array.isArray(value[val])) {
                        parsed[val] = this.parse({ parseArray, value: value[val] });
                        continue;
                    }
                    parsed[val] = value[val];
                }
            }
            return parseVal ? JSON.stringify(parsed) : parsed;
        }
    }
}
exports.Builder = Builder;
//# sourceMappingURL=Builder.js.map