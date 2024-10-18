import { Builder } from './Builder';
export interface LabeledPrice {
    label: string;
    amount: number;
}
export declare class LabeledPrices extends Builder {
    value: LabeledPrice[];
    constructor(...prices: LabeledPrice[]);
    add(label: string, amount: number): this;
}
//# sourceMappingURL=LabeledPrices.d.ts.map