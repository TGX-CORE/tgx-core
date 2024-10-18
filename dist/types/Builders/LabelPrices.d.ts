import { Builder } from './Builder';
export interface LabelPrice {
    label: string;
    amount: number;
}
export declare class LabelPrices extends Builder {
    value: LabelPrice[];
    constructor(...prices: LabelPrice[]);
    add(label: string, amount: number): void;
}
//# sourceMappingURL=LabelPrices.d.ts.map