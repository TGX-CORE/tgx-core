"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyKeyboardMarkup = void 0;
const Builder_1 = require("./Builder");
class ReplyKeyboardMarkup extends Builder_1.Builder {
    constructor(is_persistent, resize_keyboard, one_time_keyboard, input_field_placeholder, selective) {
        super({ value: { keyboard: [], is_persistent, resize_keyboard, one_time_keyboard, input_field_placeholder, selective } });
    }
    addRow(...InlineKeyboardButtons) {
        this.value.keyboard.push(InlineKeyboardButtons);
    }
}
exports.ReplyKeyboardMarkup = ReplyKeyboardMarkup;
//# sourceMappingURL=ReplyKeyboardMarkup.js.map