import type { LabeledPrice } from '../Types/Invoice'

import { Builder } from './Builder'

export class LabeledPrices extends Builder {

    public declare value: LabeledPrice[]

    /**
     * @param prices An array of labeled prices representing a portion of the price.
     * @param parse Pass *true* to return raw json, for internal purposes only.
     */
    public constructor(...prices: LabeledPrice[]){
        super({ value: prices })
    }

    /**
     * Adds a portion of a price to the list.
     * 
     * @param label The label of the portion.
     * @param amount The amount of the portion, see LabeledPrice for more info.
     */
    public add(label: string, amount: number){
        this.value.push({ label, amount })
        return this
    }

}