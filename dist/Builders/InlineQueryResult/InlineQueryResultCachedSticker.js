"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultCachedSticker = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultCachedSticker extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'sticker'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setStickerFileId(stickerFileId) {
        this.sticker_file_id = stickerFileId;
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
exports.InlineQueryResultCachedSticker = InlineQueryResultCachedSticker;
//# sourceMappingURL=InlineQueryResultCachedSticker.js.map