"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reactions = void 0;
const Builder_1 = require("./Builder");
/**
 * Represents an array of reactions.
 */
class Reactions extends Builder_1.Builder {
    /**
     * @param emojis The emojis of what the payload should contain.
     */
    constructor(...emojis) {
        super({ value: emojis, parseVal: true });
    }
    /**
     * Adds an emoji to the current payload.
     *
     * @param emoji The emoji to add to the current payload.
     */
    add(emoji) {
        this.value.push(emoji);
        return this;
    }
}
exports.Reactions = Reactions;
//# sourceMappingURL=Reactions.js.map