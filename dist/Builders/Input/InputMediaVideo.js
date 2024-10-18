"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMediaVideo = void 0;
const Builder_1 = require("../Builder");
class InputMediaVideo extends Builder_1.Builder {
    constructor() {
        super({ type: 'video', media: '' });
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
    showCaptionAboveMedia(value) {
        this.packet.show_caption_above_media = value;
        return this;
    }
    width(value) {
        this.packet.width = value;
        return this;
    }
    height(value) {
        this.packet.height = value;
        return this;
    }
    duration(value) {
        this.packet.duration = value;
        return this;
    }
    supportsStreaming(value) {
        this.packet.supports_streaming = value;
        return this;
    }
    hasSpoiler(value) {
        this.packet.has_spoiler = value;
        return this;
    }
}
exports.InputMediaVideo = InputMediaVideo;
//# sourceMappingURL=InputMediaVideo.js.map