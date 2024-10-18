import { KeyboardButton } from '../Types/ReplyMarkups';
import { Builder } from './Builder';
export interface ReplyKeyboardMarkupPayload {
    keyboard: KeyboardButton[][];
    is_persistent?: boolean;
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    input_field_placeholder?: string;
    selective?: boolean;
}
export declare class ReplyKeyboardMarkup extends Builder {
    value: ReplyKeyboardMarkupPayload;
    constructor(is_persistent?: boolean, resize_keyboard?: boolean, one_time_keyboard?: boolean, input_field_placeholder?: string, selective?: boolean);
    addRow(...InlineKeyboardButtons: KeyboardButton[]): void;
}
//# sourceMappingURL=ReplyKeyboardMarkup.d.ts.map