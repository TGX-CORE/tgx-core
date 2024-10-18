"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputContactMessageContent = void 0;
const Builder_1 = require("../../Builder");
class InputContactMessageContent extends Builder_1.Builder {
    constructor() {
        super({ phone_number: '', first_name: '' });
    }
    phoneNumber(value) {
        this.packet.phone_number = value;
        return this;
    }
    firstName(value) {
        this.packet.first_name = value;
        return this;
    }
    lastName(value) {
        this.packet.last_name = value;
        return this;
    }
    vCard(value) {
        this.packet.vcard = value;
        return this;
    }
}
exports.InputContactMessageContent = InputContactMessageContent;
//# sourceMappingURL=InputContactMessageContent.js.map