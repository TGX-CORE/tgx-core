import type { InlineQueryResult } from '../Types/InlineQueryResult';
import { Builder } from './Builder';
export declare class InlineQueryResults extends Builder {
    value: InlineQueryResult[];
    /**
     * @param results Array of results for the inline query
     */
    constructor(...results: InlineQueryResult[]);
    /**
     * @param results The result to add to the current results.
     */
    add(...results: InlineQueryResult[]): void;
}
/**
 * The result button can be any of the inline query result buttons below.
 */
export type InlineQueryResultButtonType = InlineQueryResultButton.WebApp | InlineQueryResultButton.Start;
/**
 * Represents a button to be shown above inline query results.
 */
export declare namespace InlineQueryResultButton {
    class WebApp extends Builder {
        /**
         * @param text Label text on the button
         * @param url Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
         */
        constructor(text: string, url: string);
    }
    /**
     * [Deep-linking](https://core.telegram.org/bots/features#deep-linking) parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     */
    class Start extends Builder {
        /**
         * @param text Label text on the button.
         * @param start_parameter Parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         */
        constructor(text: string, start_parameter: string);
    }
}
