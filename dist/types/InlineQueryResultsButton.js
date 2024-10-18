"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultButton = void 0;
var InlineQueryResultButton;
(function (InlineQueryResultButton) {
    class WebApp extends Builder {
        constructor(text, url) {
            super({ value: { text, web_app: { url } }, parseVal: true });
        }
    }
    InlineQueryResultButton.WebApp = WebApp;
    class Start extends Builder {
        constructor(text, start_parameter) {
            super({ value: { text, start_parameter }, parseVal: true });
        }
    }
    InlineQueryResultButton.Start = Start;
})(InlineQueryResultButton || (exports.InlineQueryResultButton = InlineQueryResultButton = {}));
//# sourceMappingURL=InlineQueryResultsButton.js.map