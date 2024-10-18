import type { InlineQueryResults, InlineQueryResultButtonType } from '../Builders/InlineQueryResult';
export interface InlineQueryAnswer {
    results: InlineQueryResults;
    button?: InlineQueryResultButtonType;
    cache_time?: number;
    is_personal?: boolean;
    next_offset?: string;
}
export interface WebAppInfo {
    url: string;
}
//# sourceMappingURL=InlineQuery.d.ts.map