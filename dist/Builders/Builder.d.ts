export declare class Builder<Payload extends object = any> {
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
    constructor(packet: Payload);
    /**
     * @hidden
     */
    parse({ parseVal, parseArray, returnValue, value }?: any): any;
}
