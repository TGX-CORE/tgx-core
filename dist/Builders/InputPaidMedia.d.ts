import type { InputPaidMedia } from '../Types/InputPaidMedia';
import { Builder } from './Builder';
export declare class InputPaidMediaBuilder extends Builder {
    /**
     * @param medias The medias to be attached to this builder.
     */
    constructor(...medias: InputPaidMedia[]);
    /**
     * Adds medias to the current builder.
     *
     * @param medias The medias to add.
     */
    add(...medias: InputPaidMedia[]): this;
}
