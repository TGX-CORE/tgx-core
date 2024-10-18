"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTextMessageContent = void 0;
const Builder_1 = require("../../Builder");
class InputTextMessageContent extends Builder_1.Builder {
    constructor() {
        super({ message_text: '' });
    }
    messageText(text) {
        this.packet.message_text = text;
        return this;
    }
    parseMode(mode) {
        this.packet.parse_mode = mode;
        return this;
    }
    entities(entities) {
        this.packet.entities = entities;
        return this;
    }
    linkPreviewOptions(options) {
        this.packet.link_preview_options = options;
        return this;
    }
}
exports.InputTextMessageContent = InputTextMessageContent;
//# sourceMappingURL=InputTextMessageContent.js.map