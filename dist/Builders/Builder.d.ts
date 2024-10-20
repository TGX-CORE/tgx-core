export declare class Builder {
    /**
     * @hidden
     */
    value?: any;
    /**
     * @hidden
     */
    parseVal?: boolean;
    /**
     * @hidden
    */
    parseArray?: boolean;
    constructor(packet: any);
    /**
     * @hidden
     */
    parse({ parseVal, parseArray, returnValue, value }?: any): any;
}
