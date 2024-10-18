"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultButton = exports.InlineQueryResults = void 0;
const Builder_1 = require("./Builder");
class InlineQueryResults extends Builder_1.Builder {
    /**
     * @param results Array of results for the inline query
     */
    constructor(...results) {
        super({ value: results, parseVal: true });
    }
    /**
     * @param results The result to add to the current results.
     */
    add(...results) {
        this.value.push(...results);
    }
}
exports.InlineQueryResults = InlineQueryResults;
/**
 * Represents a button to be shown above inline query results.
 */
var InlineQueryResultButton;
(function (InlineQueryResultButton) {
    class WebApp extends Builder_1.Builder {
        /**
         * @param text Label text on the button
         * @param url Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
         */
        constructor(text, url) {
            super({ value: { text, web_app: { url } }, parseVal: true });
        }
    }
    InlineQueryResultButton.WebApp = WebApp;
    /**
     * [Deep-linking](https://core.telegram.org/bots/features#deep-linking) parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     */
    class Start extends Builder_1.Builder {
        /**
         * @param text Label text on the button.
         * @param start_parameter Parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         */
        constructor(text, start_parameter) {
            super({ value: { text, start_parameter }, parseVal: true });
        }
    }
    InlineQueryResultButton.Start = Start;
})(InlineQueryResultButton || (exports.InlineQueryResultButton = InlineQueryResultButton = {}));
//# sourceMappingURL=InlineQueryResult.js.map