"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultVideo = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultVideo extends BaseBuilder_1.BaseBuilder {
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
    setVideoUrl(videoUrl) {
        this.video_url = videoUrl;
        return this;
    }
    setMimeType(mimeType) {
        this.mime_type = mimeType;
        return this;
    }
    setThumbnailUrl(thumbnailUrl) {
        this.thumbnail_url = thumbnailUrl;
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
    setVideoWidth(videoWidth) {
        this.video_width = videoWidth;
        return this;
    }
    setVideoHeight(videoHeight) {
        this.video_height = videoHeight;
        return this;
    }
    setVideoDuration(videoDuration) {
        this.video_duration = videoDuration;
        return this;
    }
    setDescription(description) {
        this.description = description;
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
exports.InlineQueryResultVideo = InlineQueryResultVideo;
//# sourceMappingURL=InlineQueryResultVideo.js.map