import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { User } from './User';
export interface ChosenInlineResult {
    result_id: string;
    from: User;
    location?: any;
    inline_message_id?: string;
    query?: string;
}
export declare class ChosenInlineResult extends BaseClass<ChosenInlineResult, ChosenInlineResult> {
    from: User;
    constructor(client: Client, packet: ChosenInlineResult);
    get user(): User;
}
//# sourceMappingURL=InlineQueryChosenResult.d.ts.map