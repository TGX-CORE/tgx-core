import { Client, PartialTypes, Parseables } from '../Client';
export declare class GenericAction {
    client: Client;
    constructor(client: Client);
    handleMessage(packet: any): any;
    handle(packet: any): any;
    parse(parameters: any[], message?: boolean, emit?: string): any;
    parsable(parseable: Parseables): boolean;
    payload(packet: any, manager: any, id: any, partial_type: PartialTypes, optionals?: any): any;
    get partials(): {
        chat: (packet: any) => any;
        member: (packet: any, chat_id: any) => any;
    };
}
//# sourceMappingURL=Generic.d.ts.map