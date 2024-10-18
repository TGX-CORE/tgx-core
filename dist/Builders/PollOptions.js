"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollOptions = void 0;
const Builder_1 = require("./Builder");
class PollOptions extends Builder_1.Builder {
    /**
     * @param options The options of a poll to be sent.
     */
    constructor(...options) {
        super({ value: options = [], parseVal: true });
    }
    /**
     * Adds an option to the current builder.
     *
     * @param text Option text, 1-100 characters
     * @param text_parse_mode Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed.
     * @param text_entities List of special entities that appear in the poll option text. It can be specified instead of text_parse_mode.
     */
    add(text, text_parse_mode, text_entities) {
        this.value.push({ text, text_parse_mode, text_entities });
        return this;
    }
}
exports.PollOptions = PollOptions;
//# sourceMappingURL=PollOptions.js.map