"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputVenueMessageContent = void 0;
const Builder_1 = require("../../Builder");
class InputVenueMessageContent extends Builder_1.Builder {
    constructor() {
        super({
            latitude: 0,
            longitude: 0,
            title: '',
            address: ''
        });
    }
    latitude(latitude) {
        this.packet.latitude = latitude;
        return this;
    }
    longitude(longitude) {
        this.packet.longitude = longitude;
        return this;
    }
    title(title) {
        this.packet.title = title;
        return this;
    }
    address(address) {
        this.packet.address = address;
        return this;
    }
    foursquareId(id) {
        this.packet.foursquare_id = id;
        return this;
    }
    foursquareType(type) {
        this.packet.foursquare_type = type;
        return this;
    }
    googlePlaceId(id) {
        this.packet.google_place_id = id;
        return this;
    }
    googlePlaceType(type) {
        this.packet.google_place_type = type;
        return this;
    }
}
exports.InputVenueMessageContent = InputVenueMessageContent;
//# sourceMappingURL=InputVenueMessageContent.js.map