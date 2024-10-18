import type { InlineQueryResults, InlineQueryResultButtonType } from '../Builders/InlineQueryResult';
import type { InlineQueryPacket } from '../Client/Actions/InlineQuery';
import type { Client } from '../Client/Client';
import { User } from './User';
import { BaseClass } from './BaseClass';
export declare class InlineQuery extends BaseClass<InlineQuery, InlineQueryPacket> implements Partial<InlineQueryPacket> {
    id: string;
    from: User;
    constructor(client: Client, packet: InlineQueryPacket);
    answer(results: InlineQueryResults, button?: InlineQueryResultButtonType, next_offset?: string, is_personal?: boolean, cache_time?: number): Promise<boolean>;
    get user(): User;
}
//# sourceMappingURL=InlineQuery.d.ts.map