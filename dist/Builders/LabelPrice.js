"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabeledPrices = void 0;
exports.LabeledPrice = LabeledPrice;
const Builder_1 = require("./Builder");
function LabeledPrice(label, amount) {
    return { label, amount };
}
class LabeledPrices extends Builder_1.Builder {
    constructor(...prices) {
        super({ value: JSON.stringify(prices) });
    }
}
exports.LabeledPrices = LabeledPrices;
//# sourceMappingURL=LabelPrice.js.map