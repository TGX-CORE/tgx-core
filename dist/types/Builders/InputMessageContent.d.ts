import type { InputContactMessageContentPayload, InputInvoiceMessageContentPayload, InputLocationMessageContentPayload, InputTextMessageContentPayload, InputVenueMessageContentPayload } from '../Types/InputMessageContent';
import { Builder } from '../Builders/Builder';
export type InputMessageContent = Input.Text | Input.Location | Input.Contact | Input.Venue | Input.Invoice;
export declare namespace Input {
    class Text extends Builder {
        constructor(payload: InputTextMessageContentPayload);
    }
    class Location extends Builder {
        constructor(payload: InputLocationMessageContentPayload);
    }
    class Venue extends Builder {
        constructor(payload: InputVenueMessageContentPayload);
    }
    class Contact extends Builder {
        constructor(payload: InputContactMessageContentPayload);
    }
    class Invoice extends Builder {
        constructor(payload: InputInvoiceMessageContentPayload);
    }
}
//# sourceMappingURL=InputMessageContent.d.ts.map