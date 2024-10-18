import type { MessageEntityPayload } from '../Types/MessageEntity';
import type { MessageEntities } from './MessageEntities';
import { Builder } from './Builder';
/**
 * Represents an option of a poll to be sent.
 *
 * @property text Option text, 1-100 characters
 * @property text_parse_mode Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed.
 * @property text_entities List of special entities that appear in the poll option text. It can be specified instead of text_parse_mode.
 */
export interface PollOption {
    text: string;
    text_parse_mode?: string;
    text_entities?: MessageEntities | MessageEntityPayload[];
}
export declare class PollOptions extends Builder {
    value: PollOption[];
    /**
     * @param options The options of a poll to be sent.
     */
    constructor(...options: PollOption[]);
    /**
     * Adds an option to the current builder.
     *
     * @param text Option text, 1-100 characters
     * @param text_parse_mode Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed.
     * @param text_entities List of special entities that appear in the poll option text. It can be specified instead of text_parse_mode.
     */
    add(text: string, text_parse_mode?: string, text_entities?: MessageEntities | MessageEntityPayload[]): this;
}
