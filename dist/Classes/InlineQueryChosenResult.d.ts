import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { User } from './User';
export interface ChosenInlineResultPacket {
    result_id: string;
    from: User;
    location?: any;
    inline_message_id?: string;
    query?: string;
}
export declare class ChosenInlineResult extends BaseClass<ChosenInlineResult, ChosenInlineResultPacket> implements ChosenInlineResultPacket {
    from: User;
    result_id: string;
    constructor(client: Client, packet: ChosenInlineResult);
    get user(): User;
}
