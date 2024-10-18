"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaidMedia = exports.InputPaidMedia = void 0;
const Builder_1 = require("./Builder");
class InputPaidMedia extends Builder_1.Builder {
    constructor(...medias) {
        super({ value: medias, parseVal: true });
    }
}
exports.InputPaidMedia = InputPaidMedia;
var PaidMedia;
(function (PaidMedia) {
    function Photo(payload) {
        return { type: 'photo', ...payload };
    }
    PaidMedia.Photo = Photo;
    function Video(payload) {
        return { type: 'video', ...payload };
    }
    PaidMedia.Video = Video;
})(PaidMedia || (exports.PaidMedia = PaidMedia = {}));
//# sourceMappingURL=InputFile.js.map