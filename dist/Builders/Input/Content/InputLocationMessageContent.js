"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputLocationMessageContent = void 0;
const Builder_1 = require("../../Builder");
class InputLocationMessageContent extends Builder_1.Builder {
    constructor() {
        super({ latitude: 0, longitude: 0 });
    }
    latitude(value) {
        this.packet.latitude = value;
        return this;
    }
    longitude(value) {
        this.packet.longitude = value;
        return this;
    }
    horizontalAccuracy(accuracy) {
        this.packet.horizontal_accuracy = accuracy;
        return this;
    }
    livePeriod(period) {
        this.packet.live_period = period;
        return this;
    }
    heading(value) {
        this.packet.heading = value;
        return this;
    }
    proximityAlertRadius(radius) {
        this.packet.proximity_alert_radius = radius;
        return this;
    }
}
exports.InputLocationMessageContent = InputLocationMessageContent;
//# sourceMappingURL=InputLocationMessageContent.js.map