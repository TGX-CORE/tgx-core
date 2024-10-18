"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaidMedia = void 0;
var PaidMedia;
(function (PaidMedia) {
    /**
     * @param media The media to attach.
     */
    function Photo(media) {
        return { type: 'photo', media };
    }
    PaidMedia.Photo = Photo;
    /**
     * @param media The media to attach.
     * @param thumbnail The thumbnail of the media to attach.
     * @param width Video width.
     * @param height Video height.
     * @param duration Video duration.
     * @param supports_streaming Pass *True* if the uploaded video is suitable for streaming
     */
    function Video(media, thumbnail, width, height, duration, supports_streaming) {
        return { type: 'video', media, thumbnail, width, height, duration, supports_streaming };
    }
    PaidMedia.Video = Video;
})(PaidMedia || (exports.PaidMedia = PaidMedia = {}));
//# sourceMappingURL=InputPaidMedia.js.map