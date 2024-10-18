"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const Builder_1 = require("../Builders/Builder");
var Input;
(function (Input) {
    class Text extends Builder_1.Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload) {
            super({ value: { ...payload } });
        }
    }
    Input.Text = Text;
    class Location extends Builder_1.Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload) {
            super({ value: { ...payload } });
        }
    }
    Input.Location = Location;
    class Venue extends Builder_1.Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload) {
            super({ value: { ...payload } });
        }
    }
    Input.Venue = Venue;
    class Contact extends Builder_1.Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload) {
            super({ value: { ...payload } });
        }
    }
    Input.Contact = Contact;
    class Invoice extends Builder_1.Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload) {
            super({ value: { ...payload } });
        }
    }
    Input.Invoice = Invoice;
})(Input || (exports.Input = Input = {}));
//# sourceMappingURL=InputMessageContent.js.map