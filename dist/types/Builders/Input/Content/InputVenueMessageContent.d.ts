import { Builder } from '../../Builder';
export interface InputVenueMessageContentPayload {
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
}
export declare class InputVenueMessageContent extends Builder<InputVenueMessageContentPayload> {
    constructor();
    latitude(latitude: number): this;
    longitude(longitude: number): this;
    title(title: string): this;
    address(address: string): this;
    foursquareId(id?: string): this;
    foursquareType(type?: string): this;
    googlePlaceId(id?: string): this;
    googlePlaceType(type?: string): this;
}
//# sourceMappingURL=InputVenueMessageContent.d.ts.map