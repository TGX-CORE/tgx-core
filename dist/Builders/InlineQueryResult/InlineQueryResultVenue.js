"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultVenue = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultVenue extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'venue'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setLatitude(latitude) {
        this.latitude = latitude;
        return this;
    }
    setLongitude(longitude) {
        this.longitude = longitude;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    setFoursquareId(foursquareId) {
        this.foursquare_id = foursquareId;
        return this;
    }
    setFoursquareType(foursquareType) {
        this.foursquare_type = foursquareType;
        return this;
    }
    setGooglePlaceId(googlePlaceId) {
        this.google_place_id = googlePlaceId;
        return this;
    }
    setGooglePlaceType(googlePlaceType) {
        this.google_place_type = googlePlaceType;
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
exports.InlineQueryResultVenue = InlineQueryResultVenue;
//# sourceMappingURL=InlineQueryResultVenue.js.map