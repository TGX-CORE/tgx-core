"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryAnswer = void 0;
const BaseClass_1 = require("./BaseClass");
class InlineQueryAnswer {
    constructor(packet) {
        BaseClass_1.BaseClass.defaults(packet, this);
    }
    parse() {
        return { ...InlineQueryAnswer };
    }
}
exports.InlineQueryAnswer = InlineQueryAnswer;
//# sourceMappingURL=InlineQueryAnswer.js.map