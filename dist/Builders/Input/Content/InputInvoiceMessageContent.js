"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInvoiceMessageContent = void 0;
const Builder_1 = require("../../Builder");
class InputInvoiceMessageContent extends Builder_1.Builder {
    constructor() {
        super({ title: '', description: '', payload: '', currency: '', prices: [] });
    }
    title(value) {
        this.packet.title = value;
        return this;
    }
    description(value) {
        this.packet.description = value;
        return this;
    }
    payload(value) {
        this.packet.payload = value;
        return this;
    }
    providerToken(value) {
        this.packet.provider_token = value;
        return this;
    }
    currency(value) {
        this.packet.currency = value;
        return this;
    }
    prices(value) {
        this.packet.prices = value;
        return this;
    }
    maxTipAmount(value) {
        this.packet.max_tip_amount = value;
        return this;
    }
    suggestedTipAmounts(value) {
        this.packet.suggested_tip_amounts = value;
        return this;
    }
    providerData(value) {
        this.packet.provider_data = value;
        return this;
    }
    photoUrl(value) {
        this.packet.photo_url = value;
        return this;
    }
    photoSize(value) {
        this.packet.photo_size = value;
        return this;
    }
    photoWidth(value) {
        this.packet.photo_width = value;
        return this;
    }
    photoHeight(value) {
        this.packet.photo_height = value;
        return this;
    }
    needName(value) {
        this.packet.need_name = value;
        return this;
    }
    needPhoneNumber(value) {
        this.packet.need_phone_number = value;
        return this;
    }
    needEmail(value) {
        this.packet.need_email = value;
        return this;
    }
    needShippingAddress(value) {
        this.packet.need_shipping_address = value;
        return this;
    }
    sendPhoneNumberToProvider(value) {
        this.packet.send_phone_number_to_provider = value;
        return this;
    }
    sendEmailToProvider(value) {
        this.packet.send_email_to_provider = value;
        return this;
    }
    flexible(value) {
        this.packet.is_flexible = value;
        return this;
    }
}
exports.InputInvoiceMessageContent = InputInvoiceMessageContent;
//# sourceMappingURL=InputInvoiceMessageContent.js.map