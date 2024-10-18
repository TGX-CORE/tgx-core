import type { InlineQueryResult } from '../Types/InlineQueryResult';
import type { WebAppInfo } from '../Types/InlineQuery';
import { Builder } from './Builder';
export declare class InlineQueryResults extends Builder {
    value: InlineQueryResult[];
    constructor(...results: InlineQueryResult[]);
}
export type InlineQueryResultButtonType = typeof InlineQueryResultButton.WebApp | typeof InlineQueryResultButton.Start;
export declare namespace InlineQueryResultButton {
    class WebApp extends Builder {
        constructor(text: string, web_app: WebAppInfo);
    }
    class Start extends Builder {
        constructor(text: string, start_parameter: string);
    }
}
//# sourceMappingURL=InlineQueryResult.d.ts.map