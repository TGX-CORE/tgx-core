"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsManager = void 0;
const SuccessfulPayment_1 = require("../../Classes/SuccessfulPayment");
const CachedManager_1 = require("./CachedManager");
class PaymentsManager extends CachedManager_1.CachedManager {
    constructor(client) {
        super(client, SuccessfulPayment_1.SuccessfulPayment);
    }
    async refund(user_id, telegram_payment_charge_id) {
        return this.client.api.refundStarPayment(null, {
            params: { user_id, telegram_payment_charge_id },
            returnOk: true
        });
    }
}
exports.PaymentsManager = PaymentsManager;
//# sourceMappingURL=PaymentsManager.js.map