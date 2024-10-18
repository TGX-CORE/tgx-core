import type { InputMedia } from '../Types/InputMedia'

import { Builder } from './Builder'

/**
 * Array describing messages to be sent, must include 2-10 items. Paired with sending a media group.
 */
export class InputMediaBuilder extends Builder {

    public declare value: InputMedia[]

    /**
     * @param medias Array describing messages to be sent, must include 2-10 items
     */
    public constructor(...medias: InputMedia[]){
        super({ value: medias, parseVal: true })
    }

}