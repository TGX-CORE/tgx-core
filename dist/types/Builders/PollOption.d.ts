import type { MessageEntity } from '../Client/Managers/MessagesManager';
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
//# sourceMappingURL=PollOption.d.ts.map