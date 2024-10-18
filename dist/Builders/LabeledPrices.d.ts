import { Builder } from './Builder';
/**
 * Represents a portion of a price.
 */
export interface LabeledPrice {
    /**
     * The label of the portion of the price.
     *
     * An example of the label would be; Base Shipping Fee, Taxes, Transaction Fee, etc.
     */
    label: string;
    /**
     * Price of the product in the smallest units of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145.
     *
     * See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
     */
    amount: number;
}
export declare class LabeledPrices extends Builder {
    value: LabeledPrice[];
    /**
     * @param prices An array of labeled prices representing a portion of the price.
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
