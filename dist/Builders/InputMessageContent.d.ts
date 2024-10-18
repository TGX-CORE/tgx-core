import type { InputContactMessageContentPayload, InputInvoiceMessageContentPayload, InputLocationMessageContentPayload, InputTextMessageContentPayload, InputVenueMessageContentPayload } from '../Types/InputMessageContent';
import { Builder } from '../Builders/Builder';
/**
 * An input message content can be any of the inputs below.
 */
export type InputMessageContent = Input.Text | Input.Location | Input.Contact | Input.Venue | Input.Invoice;
export declare namespace Input {
    class Text extends Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload: InputTextMessageContentPayload);
    }
    class Location extends Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload: InputLocationMessageContentPayload);
    }
    class Venue extends Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload: InputVenueMessageContentPayload);
    }
    class Contact extends Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload: InputContactMessageContentPayload);
    }
    class Invoice extends Builder {
        /**
         * @param payload The payload of what the content of a message to be sent as a result of an inline query.
         */
        constructor(payload: InputInvoiceMessageContentPayload);
    }
}
