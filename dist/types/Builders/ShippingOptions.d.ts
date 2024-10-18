import type { LabeledPrices, LabeledPrice } from './LabeledPrices';
import { Builder } from './Builder';
export interface ShippingOptionPayload {
    id: string;
    title: string;
    prices: LabeledPrices | LabeledPrice[];
}
export declare function ShippingOption(id: string, title: string, prices: LabeledPrices | LabeledPrice[]): ShippingOptionPayload;
export declare class ShippingOptions extends Builder {
    value: ShippingOptionPayload[];
    /**
     * @param shippings - Available shipping options for flexible invoices.
     */
    constructor(...shippings: ShippingOptionPayload[]);
}
//# sourceMappingURL=ShippingOptions.d.ts.map