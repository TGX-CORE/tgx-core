"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultCachedVideo = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultCachedVideo extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'video'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setVideoFileId(videoFileId) {
        this.video_file_id = videoFileId;
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
exports.InlineQueryResultCachedVideo = InlineQueryResultCachedVideo;
//# sourceMappingURL=InlineQueryResultCachedVideo.js.map