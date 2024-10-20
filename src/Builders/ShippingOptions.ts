import type { LabeledPrices } from './LabeledPrices'
import type { LabeledPrice } from '../Types/Invoice'

import { Builder } from './Builder'

/**
 * This object represents one shipping option.
 * 
 * @property id Shipping option unique identifier.
 * @property title Shipping option name or title.
 * @property prices List of price portions or breakdown.
 */
export interface ShippingOptionPayload {
    id: string
    title: string
    prices: LabeledPrices|LabeledPrice[]
}

export class ShippingOptions extends Builder {

    public value: ShippingOptionPayload[] = [ ]

    /**
     * @param shippings - Available shipping options for flexible invoices.
     */
    public constructor(...shippings: ShippingOptionPayload[]){
        super({ value: shippings = [ ], parseVal: true })
    }

    /**
     * Adds a new shipping option.
     * 
     * @param id Shipping option identifier
     * @param title Shipping option title.
     * @param prices List of price portions.
     */
    public add(id: string, title: string, prices: LabeledPrices|LabeledPrice[]){
        this.value.push({ id, title, prices: prices })
        return this
    }

}