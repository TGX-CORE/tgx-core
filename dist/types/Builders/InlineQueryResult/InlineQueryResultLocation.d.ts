import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import type { InputMessageContent } from '../Input/Content/InputMessageContent';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultLocationPayload {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}
export declare class InlineQueryResultLocation extends BaseBuilder<InlineQueryResultLocationPayload> implements InlineQueryResultLocationPayload {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    setId(id: string): this;
    setLatitude(latitude: number): this;
    setLongitude(longitude: number): this;
    setTitle(title: string): this;
    setHorizontalAccuracy(horizontalAccuracy?: number): this;
    setLivePeriod(livePeriod?: number): this;
    setHeading(heading?: number): this;
    setProximityAlertRadius(proximityAlertRadius?: number): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
    setInputMessageContent(inputMessageContent?: InputMessageContent): this;
    setThumbnailUrl(thumbnailUrl?: string): this;
    setThumbnailWidth(thumbnailWidth?: number): this;
    setThumbnailHeight(thumbnailHeight?: number): this;
}
//# sourceMappingURL=InlineQueryResultLocation.d.ts.map