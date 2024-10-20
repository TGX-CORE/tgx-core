"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingOptions = void 0;
const Builder_1 = require("./Builder");
class ShippingOptions extends Builder_1.Builder {
    /**
     * @param shippings - Available shipping options for flexible invoices.
     */
    constructor(...shippings) {
        super({ value: shippings = [], parseVal: true });
        this.value = [];
    }
    /**
     * Adds a new shipping option.
     *
     * @param id Shipping option identifier
     * @param title Shipping option title.
     * @param prices List of price portions.
     */
    add(id, title, prices) {
        this.value.push({ id, title, prices: prices });
        return this;
    }
}
exports.ShippingOptions = ShippingOptions;
//# sourceMappingURL=ShippingOptions.js.map