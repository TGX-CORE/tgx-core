"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = Emoji;
exports.CustomEmoji = CustomEmoji;
exports.PaidEmoji = PaidEmoji;
function Emoji(emoji) {
    return { type: 'emoji', emoji };
}
function CustomEmoji(custom_emoji_id) {
    return { type: 'custom_emoji', custom_emoji_id };
}
function PaidEmoji() {
    return { type: 'paid' };
}
//# sourceMappingURL=Emojit.js.map