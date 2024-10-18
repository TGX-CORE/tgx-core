"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var Media;
(function (Media) {
    /**
     * @param payload The payload of what the media contains.
     */
    function Animation(payload) {
        return { type: 'animation', ...payload };
    }
    Media.Animation = Animation;
    /**
     * @param payload The payload of what the media contains.
     */
    function Audio(payload) {
        return { type: 'audio', ...payload };
    }
    Media.Audio = Audio;
    /**
     * @param payload The payload of what the media contains.
     */
    function Document(payload) {
        return { type: 'document', ...payload };
    }
    Media.Document = Document;
    /**
     * @param payload The payload of what the media contains.
     */
    function Photo(payload) {
        return { type: 'photo', ...payload };
    }
    Media.Photo = Photo;
    /**
     * @param payload The payload of what the media contains.
     */
    function Video(payload) {
        return { type: 'video', ...payload };
    }
    Media.Video = Video;
})(Media || (exports.Media = Media = {}));
//# sourceMappingURL=InputMedia.js.map