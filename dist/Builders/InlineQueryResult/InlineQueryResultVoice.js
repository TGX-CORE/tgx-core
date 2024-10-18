"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultVoice = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultVoice extends BaseBuilder_1.BaseBuilder {
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
    setVoiceUrl(voiceUrl) {
        this.voice_url = voiceUrl;
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
    setVoiceDuration(voiceDuration) {
        this.voice_duration = voiceDuration;
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
exports.InlineQueryResultVoice = InlineQueryResultVoice;
//# sourceMappingURL=InlineQueryResultVoice.js.map