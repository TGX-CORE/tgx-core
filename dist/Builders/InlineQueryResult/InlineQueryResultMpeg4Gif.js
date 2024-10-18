"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultMpeg4Gif = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultMpeg4Gif extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'mpeg4_gif'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setMpeg4Url(mpeg4Url) {
        this.mpeg4_url = mpeg4Url;
        return this;
    }
    setMpeg4Width(mpeg4Width) {
        this.mpeg4_width = mpeg4Width;
        return this;
    }
    setMpeg4Height(mpeg4Height) {
        this.mpeg4_height = mpeg4Height;
        return this;
    }
    setMpeg4Duration(mpeg4Duration) {
        this.mpeg4_duration = mpeg4Duration;
        return this;
    }
    setThumbnailUrl(thumbnailUrl) {
        this.thumbnail_url = thumbnailUrl;
        return this;
    }
    setThumbnailMimeType(thumbnailMimeType) {
        this.thumbnail_mime_type = thumbnailMimeType;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setCaption(caption) {
        this.caption = caption;
        return this;
    }
    setParseMode(parseMode) {
        this.parse_mode = parseMode;
        return this;
    }
    setCaptionEntities(captionEntities) {
        this.caption_entities = captionEntities;
        return this;
    }
    setShowCaptionAboveMedia(showCaptionAboveMedia) {
        this.show_caption_above_media = showCaptionAboveMedia;
        return this;
    }
    setReplyMarkup(replyMarkup) {
        this.reply_markup = replyMarkup;
        return this;
    }
    setInputMessageContent(inputMessageContent) {
        this.input_message_content = inputMessageContent;
        return this;
    }
}
exports.InlineQueryResultMpeg4Gif = InlineQueryResultMpeg4Gif;
//# sourceMappingURL=InlineQueryResultMpeg4Gif.js.map