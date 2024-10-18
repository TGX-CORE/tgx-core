"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultPhoto = void 0;
const BaseBuilder_1 = require("./packages/tgx-core/src/Builders/BaseBuilder");
class InlineQueryResultPhoto extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'photo'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setPhotoUrl(photoUrl) {
        this.photo_url = photoUrl;
        return this;
    }
    setThumbnailUrl(thumbnailUrl) {
        this.thumbnail_url = thumbnailUrl;
        return this;
    }
    setPhotoWidth(photoWidth) {
        this.photo_width = photoWidth;
        return this;
    }
    setPhotoHeight(photoHeight) {
        this.photo_height = photoHeight;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
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
exports.InlineQueryResultPhoto = InlineQueryResultPhoto;
//# sourceMappingURL=InlineQueryResultPhoto.js.map