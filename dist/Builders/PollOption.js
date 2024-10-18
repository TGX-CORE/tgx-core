"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollOptions = exports.PollOption = void 0;
const Builder_1 = require("./Builder");
class PollOption extends Builder_1.Builder {
    constructor(text, text_parse_mode, text_entities) {
        super({ text, text_parse_mode, text_entities });
    }
}
exports.PollOption = PollOption;
class PollOptions extends Builder_1.Builder {
    constructor(...options) {
        super({ value: JSON.stringify(options.map((value) => value.parse())) });
    }
}
exports.PollOptions = PollOptions;
//# sourceMappingURL=PollOption.js.map