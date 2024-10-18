export interface InlineQueryResulstButton {
    text: string;
    web_app: WebAppInfo;
    start_parameter: string;
}
export interface WebAppInfo {
    url: string;
}
export interface InlineQueryAnswer {
    results: Array<InlineQueryAnswer>;
    button?: InlineQueryResulstButton;
    cache_time?: number;
    is_personal?: boolean;
    next_offset?: string;
}
export declare class InlineQueryAnswer {
    constructor(packet: InlineQueryAnswer);
    parse(): object;
}
//# sourceMappingURL=InlineQueryAnswer.d.ts.map