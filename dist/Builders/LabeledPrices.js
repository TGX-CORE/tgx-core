"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabeledPrices = void 0;
const Builder_1 = require("./Builder");
class LabeledPrices extends Builder_1.Builder {
    /**
     * @param prices An array of labeled prices representing a portion of the price.
     */
    constructor(...prices) {
        super({ value: prices, parseVal: true });
    }
    /**
     * Adds a portion of a price to the list.
     *
     * @param label The label of the portion.
     * @param amount The amount of the portion, see LabeledPrice for more info.
     */
    add(label, amount) {
        this.value.push({ label, amount });
        return this;
    }
}
exports.LabeledPrices = LabeledPrices;
//# sourceMappingURL=LabeledPrices.js.map