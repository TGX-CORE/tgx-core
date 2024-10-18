"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMessage = void 0;
var InputMessage;
(function (InputMessage) {
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Text(payload) {
        return payload;
    }
    InputMessage.Text = Text;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Location(payload) {
        return payload;
    }
    InputMessage.Location = Location;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Venue(payload) {
        return payload;
    }
    InputMessage.Venue = Venue;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Contact(payload) {
        return payload;
    }
    InputMessage.Contact = Contact;
    /**
     * @param payload The payload of what the content of a message to be sent as a result of an inline query.
     */
    function Invoice(payload) {
        return payload;
    }
    InputMessage.Invoice = Invoice;
})(InputMessage || (exports.InputMessage = InputMessage = {}));
//# sourceMappingURL=InputMessageContent.js.map