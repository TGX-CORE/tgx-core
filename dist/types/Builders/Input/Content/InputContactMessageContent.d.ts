import { Builder } from '../../Builder';
export interface InputContactMessageContentPayload {
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
}
export declare class InputContactMessageContent extends Builder<InputContactMessageContentPayload> {
    constructor();
    phoneNumber(value: string): this;
    firstName(value: string): this;
    lastName(value?: string): this;
    vCard(value?: string): this;
}
//# sourceMappingURL=InputContactMessageContent.d.ts.map