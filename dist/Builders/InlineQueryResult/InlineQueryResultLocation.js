"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultLocation = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultLocation extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'location'
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
    setHorizontalAccuracy(horizontalAccuracy) {
        this.horizontal_accuracy = horizontalAccuracy;
        return this;
    }
    setLivePeriod(livePeriod) {
        this.live_period = livePeriod;
        return this;
    }
    setHeading(heading) {
        this.heading = heading;
        return this;
    }
    setProximityAlertRadius(proximityAlertRadius) {
        this.proximity_alert_radius = proximityAlertRadius;
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
exports.InlineQueryResultLocation = InlineQueryResultLocation;
//# sourceMappingURL=InlineQueryResultLocation.js.map