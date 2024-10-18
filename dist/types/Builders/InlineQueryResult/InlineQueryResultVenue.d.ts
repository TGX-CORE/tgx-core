import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultVenuePayload {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export declare class InlineQueryResultVenue extends BaseBuilder<InlineQueryResultVenuePayload> implements InlineQueryResultVenuePayload {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    setId(id: string): this;
    setLatitude(latitude: number): this;
    setLongitude(longitude: number): this;
    setTitle(title: string): this;
    setAddress(address: string): this;
    setFoursquareId(foursquareId?: string): this;
    setFoursquareType(foursquareType?: string): this;
    setGooglePlaceId(googlePlaceId?: string): this;
    setGooglePlaceType(googlePlaceType?: string): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
    setThumbnailUrl(thumbnailUrl?: string): this;
    setThumbnailWidth(thumbnailWidth?: number): this;
    setThumbnailHeight(thumbnailHeight?: number): this;
}
//# sourceMappingURL=InlineQueryResultVenue.d.ts.map