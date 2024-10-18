import type { InputPaidMedia } from '../Types/InputPaidMedia'

import { Builder } from './Builder'

export class InputPaidMediaBuilder extends Builder {

    /**
     * @param medias The medias to be attached to this builder.
     */
    public constructor(...medias: InputPaidMedia[]){
        super({ value: medias, parseVal: true })
    }

    /**
     * Adds medias to the current builder.
     * 
     * @param medias The medias to add.
     */
    public add(...medias: InputPaidMedia[]){
        this.value.push(...medias)
        return this
    }

}