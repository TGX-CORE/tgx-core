import { Builder } from './Builder';
export declare function LabeledPrice(label: string, amount: number): {
    label: string;
    amount: number;
};
export declare class LabeledPrices extends Builder {
    value: typeof LabeledPrice[];
    constructor(...prices: typeof LabeledPrice[]);
}
//# sourceMappingURL=LabelPrice.d.ts.map