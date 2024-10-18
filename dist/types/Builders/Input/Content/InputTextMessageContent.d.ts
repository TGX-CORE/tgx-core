import type { MessageEntity } from '../../../Client/Managers/MessagesManager';
import { Builder } from '../../Builder';
export interface LinkPreviewOptions {
    is_disabled?: boolean;
    url?: string;
    prefer_small_media?: boolean;
    prefer_large_media?: boolean;
    show_above_text?: boolean;
}
export interface InputTextMessageContentPayload {
    message_text: string;
    parse_mode?: string;
    entities?: MessageEntity[];
    link_preview_options?: LinkPreviewOptions;
}
export declare class InputTextMessageContent extends Builder<InputTextMessageContentPayload> {
    constructor();
    messageText(text: string): this;
    parseMode(mode?: string): this;
    entities(entities?: MessageEntity[]): this;
    linkPreviewOptions(options?: LinkPreviewOptions): this;
}
//# sourceMappingURL=InputTextMessageContent.d.ts.map