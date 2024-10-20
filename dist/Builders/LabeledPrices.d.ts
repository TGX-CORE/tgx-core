import type { LabeledPrice } from '../Types/Invoice';
import { Builder } from './Builder';
export declare class LabeledPrices extends Builder {
    value: LabeledPrice[];
    /**
     * @param prices An array of labeled prices representing a portion of the price.
     * @param parse Pass *true* to return raw json, for internal purposes only.
     */
    constructor(...prices: LabeledPrice[]);
    /**
     * Adds a portion of a price to the list.
     *
     * @param label The label of the portion.
     * @param amount The amount of the portion, see LabeledPrice for more info.
     */
    add(label: string, amount: number): this;
}
