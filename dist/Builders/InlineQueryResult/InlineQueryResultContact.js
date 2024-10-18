"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultContact = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultContact extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'contact'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setPhoneNumber(phoneNumber) {
        this.phone_number = phoneNumber;
        return this;
    }
    setFirstName(firstName) {
        this.first_name = firstName;
        return this;
    }
    setLastName(lastName) {
        this.last_name = lastName;
        return this;
    }
    setVcard(vcard) {
        this.vcard = vcard;
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
exports.InlineQueryResultContact = InlineQueryResultContact;
//# sourceMappingURL=InlineQueryResultContact.js.map