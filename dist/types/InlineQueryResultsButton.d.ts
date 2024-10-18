export type InlineQueryResultButtonType = InlineQueryResultButton.WebApp | InlineQueryResultButton.Start;
export declare namespace InlineQueryResultButton {
    class WebApp extends Builder {
        constructor(text: string, url: string);
    }
    class Start extends Builder {
        constructor(text: string, start_parameter: string);
    }
}
