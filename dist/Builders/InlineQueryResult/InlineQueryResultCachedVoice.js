"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultCachedVoice = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultCachedVoice extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'voice'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setVoiceFileId(voiceFileId) {
        this.voice_file_id = voiceFileId;
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
    setReplyMarkup(replyMarkup) {
        this.reply_markup = replyMarkup;
        return this;
    }
    setInputMessageContent(inputMessageContent) {
        this.input_message_content = inputMessageContent;
        return this;
    }
}
exports.InlineQueryResultCachedVoice = InlineQueryResultCachedVoice;
//# sourceMappingURL=InlineQueryResultCachedVoice.js.map