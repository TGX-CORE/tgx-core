"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelPrices = void 0;
const Builder_1 = require("./Builder");
class LabelPrices extends Builder_1.Builder {
    constructor(...prices) {
        super({ value: prices ?? [], parseVal: true });
    }
    add(label, amount) {
        this.value.push({ label, amount });
    }
}
exports.LabelPrices = LabelPrices;
//# sourceMappingURL=LabelPrices.js.map