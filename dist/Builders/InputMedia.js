"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMediaBuilder = void 0;
const Builder_1 = require("./Builder");
/**
 * Array describing messages to be sent, must include 2-10 items. Paired with sending a media group.
 */
class InputMediaBuilder extends Builder_1.Builder {
    /**
     * @param medias Array describing messages to be sent, must include 2-10 items
     */
    constructor(...medias) {
        super({ value: medias, parseVal: true });
    }
}
exports.InputMediaBuilder = InputMediaBuilder;
//# sourceMappingURL=InputMedia.js.map