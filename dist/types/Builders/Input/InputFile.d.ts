import { Builder } from '../Builder';
export type InputFile = InputPaidMediaPhoto | InputPaidMediaVideo;
export interface InputPaidMediaPhotoPayload {
    type: 'photo';
    media: string;
}
export interface InputPaidMediaVideoPayload {
    type: 'video';
    media: string;
    thumbnail?: InputFile | string;
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
}
export declare class InputPaidMediaPhoto extends Builder<InputPaidMediaPhotoPayload> {
    constructor();
    media(value: string): this;
}
export declare class InputPaidMediaVideo extends Builder<InputPaidMediaVideoPayload> {
    constructor();
    media(value: string): this;
    thumbnail(value?: InputFile | string): this;
    width(value?: number): this;
    height(value?: number): this;
    duration(value?: number): this;
    supportsStreaming(value?: boolean): this;
}
//# sourceMappingURL=InputFile.d.ts.map