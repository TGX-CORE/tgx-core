"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPaidMediaVideo = exports.InputPaidMediaPhoto = void 0;
const Builder_1 = require("../Builder");
class InputPaidMediaPhoto extends Builder_1.Builder {
    constructor() {
        super({ type: 'photo', media: '' });
    }
    media(value) {
        this.packet.media = value;
        return this;
    }
}
exports.InputPaidMediaPhoto = InputPaidMediaPhoto;
class InputPaidMediaVideo extends Builder_1.Builder {
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
}
exports.InputPaidMediaVideo = InputPaidMediaVideo;
//# sourceMappingURL=InputFile.js.map