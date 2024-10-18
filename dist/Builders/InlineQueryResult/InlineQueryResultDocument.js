"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultDocument = void 0;
const BaseBuilder_1 = require("./packages/tgx-core/src/Builders/BaseBuilder");
class InlineQueryResultDocument extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'document'
        });
    }
    setId(id) {
        this.id = id;
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
    setDocumentUrl(documentUrl) {
        this.document_url = documentUrl;
        return this;
    }
    setMimeType(mimeType) {
        this.mime_type = mimeType;
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
    setThumbnailUrl(thumbnailUrl) {
        this.thumbnail_url = thumbnailUrl;
        return this;
    }
    setThumbnailWidth(thumbnailWidth) {
        this.thumbnail_width = thumbnailWidth;
        return this;
    }
    setThumbnailHeight(thumbnailHeight) {
        this.thumbnail_height = thumbnailHeight;
        return this;
    }
}
exports.InlineQueryResultDocument = InlineQueryResultDocument;
//# sourceMappingURL=InlineQueryResultDocument.js.map