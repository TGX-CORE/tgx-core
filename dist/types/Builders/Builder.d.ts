export declare class Builder<Payload extends object = any> {
    packet: Payload;
    value?: any;
    parseVal?: boolean;
    constructor(packet: Payload);
    parse(): any;
    defaults(defaults: any, context?: any): any;
}
//# sourceMappingURL=Builder.d.ts.map