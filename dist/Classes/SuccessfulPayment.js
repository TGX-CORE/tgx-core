"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessfulPayment = void 0;
const BaseClass_1 = require("./BaseClass");
class SuccessfulPayment extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    async refund() {
        return this.client.payments.refund(this.user.id, this.telegram_payment_charge_id);
    }
    get user() {
        return this.client.users.cache.get(this._from);
    }
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    get message() {
        return this.chat?.message.cache.get(this._message);
    }
}
exports.SuccessfulPayment = SuccessfulPayment;
//# sourceMappingURL=SuccessfulPayment.js.map