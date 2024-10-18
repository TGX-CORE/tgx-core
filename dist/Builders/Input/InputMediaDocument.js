"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMediaDocument = void 0;
const Builder_1 = require("../Builder");
class InputMediaDocument extends Builder_1.Builder {
    constructor() {
        super({ type: 'document', media: '' });
    }
    media(value) {
        this.packet.media = value;
        return this;
    }
    thumbnail(value) {
        this.packet.thumbnail = value;
        return this;
    }
    caption(value) {
        this.packet.caption = value;
        return this;
    }
    parseMode(value) {
        this.packet.parse_mode = value;
        return this;
    }
    captionEntities(value) {
        this.packet.caption_entities = value;
        return this;
    }
    disableContentTypeDetection(value) {
        this.packet.disable_content_type_detection = value;
        return this;
    }
}
exports.InputMediaDocument = InputMediaDocument;
//# sourceMappingURL=InputMediaDocument.js.map