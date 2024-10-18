import type { InlineQueryResults, InlineQueryResultButtonType } from '../Builders/InlineQueryResult';
import type { LocationPacket } from '../Types/Common';
import type { Client } from '../Client/Client';
import { User } from './User';
import { BaseClass } from './BaseClass';
export interface InlineQueryPacket {
    id: string;
    from: User;
    query: string;
    offset: string;
    chat_type?: 'private' | 'group' | 'supergroup' | 'channel';
    location?: LocationPacket;
}
/**
 * Represents an incoming inline query.
 */
export declare class InlineQuery extends BaseClass<InlineQuery, InlineQueryPacket> implements InlineQueryPacket {
    id: string;
    from: User;
    query: string;
    offset: string;
    /**
     *
     * @param client The client of the incoming inline query.
     * @param packet The packet of the incoming inline query.
     */
    constructor(client: Client, packet: InlineQueryPacket);
    /**
     * Sends an array of results to the inline query.
     *
     * @param results Array of results for the inline query
     * @param button The button to be shown above inline query results
     * @param next_offset Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
     * @param is_personal If results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
     * @param cache_time The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
     */
    answer(results: InlineQueryResults, button?: InlineQueryResultButtonType, next_offset?: string, is_personal?: boolean, cache_time?: number): Promise<boolean>;
    get user(): User;
}
