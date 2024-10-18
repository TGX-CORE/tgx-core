"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMediaAudio = void 0;
const Builder_1 = require("../Builder");
class InputMediaAudio extends Builder_1.Builder {
    constructor() {
        super({ type: 'audio', media: '' });
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
    duration(value) {
        this.packet.duration = value;
        return this;
    }
    performer(value) {
        this.packet.performer = value;
        return this;
    }
    title(value) {
        this.packet.title = value;
        return this;
    }
}
exports.InputMediaAudio = InputMediaAudio;
//# sourceMappingURL=InputMediaAudio.js.map