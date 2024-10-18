import { Builder } from '../../Builder';
export interface InputLocationMessageContentPayload {
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}
export declare class InputLocationMessageContent extends Builder<InputLocationMessageContentPayload> {
    constructor();
    latitude(value: number): this;
    longitude(value: number): this;
    horizontalAccuracy(accuracy?: number): this;
    livePeriod(period?: number): this;
    heading(value?: number): this;
    proximityAlertRadius(radius?: number): this;
}
//# sourceMappingURL=InputLocationMessageContent.d.ts.map