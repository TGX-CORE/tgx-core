import type { InlineKeyboardButton, ReplyKeyboardButton } from '../Types/InlineKeyboard';
import { Builder } from './Builder';
export declare class InlineKeyboardMarkup extends Builder {
    constructor(...inline_buttons: InlineKeyboardButton[][]);
    addrow(...inline_buttons: InlineKeyboardButton[]): this;
}
export declare class ReplyKeyboardMarkup extends Builder {
    constructor(is_persistent?: boolean, resize_keyboard?: boolean, one_time_keyboard?: boolean, input_field_placeholder?: string, selective?: boolean);
    addRow(...reply_buttons: ReplyKeyboardButton[]): this;
}
export declare class ReplyKeyboardRemove extends Builder {
    constructor(is_selective?: boolean);
}
export declare class ForceReply extends Builder {
    constructor(input_field_placeholder?: string, selective?: boolean);
}
//# sourceMappingURL=InlineKeyboard.d.ts.map