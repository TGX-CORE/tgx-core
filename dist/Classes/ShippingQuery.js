"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingQuery = void 0;
const BaseClass_1 = require("./BaseClass");
class ShippingQuery extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    async ok(shipping_options) {
        return this.client.api.answerShippingQuery(null, {
            params: { shipping_query_id: this.id, ok: true, shipping_options },
            returnOk: true
        });
    }
    async notOk(error_message) {
        return this.client.api.answerShippingQuery(null, {
            params: { shipping_query_id: this.id, ok: false, error_message },
            returnOk: true
        });
    }
    get user() {
        return this.client.users.cache.get(this._from);
    }
}
exports.ShippingQuery = ShippingQuery;
//# sourceMappingURL=ShippingQuery.js.map