import type { Message } from '../../Classes/Message';
import type { Client } from '../Client';
import { ClientEvent } from '../../Types/ClientEvent';
import { PartialTypes, Parseables } from '../../Types/Client';
export declare class GenericAction {
    client: Client;
    constructor(client: Client);
    handleMessage(packet: any): any;
    handle(packet: any): any;
    protected emitMessage(event: ClientEvent | false, message: Message, emit?: boolean): any[] | any;
    protected emit(event: ClientEvent, ...parameters: any[]): any[] | any;
    prepack(packet: any): false | any[];
    get partials(): {
        chat: (packet: any) => any;
        member: (packet: any, chat_id: any) => any;
    };
    parsable(parseable: Parseables): boolean;
    payload(packet: any, manager: any, id: any, partial_type: PartialTypes, optionals?: any): any;
}
