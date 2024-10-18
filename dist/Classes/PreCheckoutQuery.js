"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreCheckoutQuery = void 0;
const BaseClass_1 = require("./BaseClass");
class PreCheckoutQuery extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    async notOk(error_message) {
        return this.client.api.answerPreCheckoutQuery(null, {
            params: { pre_checkout_query_id: this.id, ok: false, error_message },
            returnOk: true
        });
    }
    async ok() {
        return this.client.api.answerPreCheckoutQuery(null, {
            params: { pre_checkout_query_id: this.id, ok: true },
            returnOk: true
        });
    }
    get user() {
        return this.client.users.cache.get(this._from);
    }
}
exports.PreCheckoutQuery = PreCheckoutQuery;
//# sourceMappingURL=PreCheckoutQuery.js.map