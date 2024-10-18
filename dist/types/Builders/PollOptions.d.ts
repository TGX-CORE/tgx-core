import type { MessageEntity } from '../Types/Common';
import { Builder } from './Builder';
export interface PollOptionPayload {
    text: string;
    text_parse_mode?: string;
    text_entities?: MessageEntity[];
}
export declare class PollOption extends Builder implements PollOptionPayload {
    text: string;
    constructor(text: string, text_parse_mode?: string, text_entities?: MessageEntity[]);
}
export declare class PollOptions extends Builder {
    value: PollOptionPayload[];
    constructor(...options: PollOption[]);
}
//# sourceMappingURL=PollOptions.d.ts.map