import { WebAppInfo } from '../../Classes/InlineQueryAnswer';
export interface InlineQueryResultsButtonPayload {
    text: string;
    web_app?: WebAppInfo;
    start_parameter?: string;
}
export declare class InlineQueryResultsButton implements InlineQueryResultsButtonPayload {
    text: string;
    web_app?: WebAppInfo;
    start_parameter?: string;
    setText(text: string): this;
    setWebApp(webApp?: WebAppInfo): this;
    setStartParameter(startParameter?: string): this;
}
//# sourceMappingURL=InlineQueryResultsButton.d.ts.map