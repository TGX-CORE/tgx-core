"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMediaPhoto = void 0;
const Builder_1 = require("../Builder");
class InputMediaPhoto extends Builder_1.Builder {
    constructor() {
        super({ type: 'photo', media: '' });
    }
    media(value) {
        this.packet.media = value;
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
    showCaptionAboveMedia(value) {
        this.packet.show_caption_above_media = value;
        return this;
    }
    spoiler(value) {
        this.packet.has_spoiler = value;
        return this;
    }
}
exports.InputMediaPhoto = InputMediaPhoto;
//# sourceMappingURL=InputMediaPhoto.js.map