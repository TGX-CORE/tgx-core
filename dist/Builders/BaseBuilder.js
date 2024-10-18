"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBuilder = void 0;
const BaseClass_1 = require("../Classes/BaseClass");
class BaseBuilder {
    constructor(packet) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.defaults(packet);
    }
    parse() {
        return this.value ?? { ...this };
    }
    defaults(defaults, context = this) {
        for (const key in defaults) {
            const descriptor = Object.getOwnPropertyDescriptor(context, key);
            if (descriptor && (typeof descriptor.get === 'function' || !descriptor.configurable || !descriptor.writable))
                continue;
            if (typeof defaults[key] === 'object' || context[key] === undefined) {
                context[key] = defaults[key];
            }
            else {
                if (BaseClass_1.BaseClass.isClass(defaults[key])) {
                    context[key] = defaults[key];
                }
                else {
                    context[key] = this.defaults(defaults[key], context[key]);
                }
            }
        }
        return context;
    }
}
exports.BaseBuilder = BaseBuilder;
//# sourceMappingURL=BaseBuilder.js.map