import type { InputMedia } from '../Types/InputMedia';
import { Builder } from './Builder';
/**
 * Array describing messages to be sent, must include 2-10 items. Paired with sending a media group.
 */
export declare class InputMediaBuilder extends Builder {
    value: InputMedia[];
    /**
     * @param medias Array describing messages to be sent, must include 2-10 items
     */
    constructor(...medias: InputMedia[]);
}
