"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultGif = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultGif extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'gif'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setGifUrl(gifUrl) {
        this.gif_url = gifUrl;
        return this;
    }
    setGifWidth(gifWidth) {
        this.gif_width = gifWidth;
        return this;
    }
    setGifHeight(gifHeight) {
        this.gif_height = gifHeight;
        return this;
    }
    setGifDuration(gifDuration) {
        this.gif_duration = gifDuration;
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
exports.InlineQueryResultGif = InlineQueryResultGif;
//# sourceMappingURL=InlineQueryResultGif.js.map