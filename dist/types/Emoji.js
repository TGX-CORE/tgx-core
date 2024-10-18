"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
var Emoji;
(function (Emoji_1) {
    function Emoji(emoji) {
        return { type: 'emoji', emoji };
    }
    Emoji_1.Emoji = Emoji;
    function Custom(custom_emoji_id) {
        return { type: 'custom_emoji', custom_emoji_id };
    }
    Emoji_1.Custom = Custom;
    function Paid() {
        return { type: 'paid' };
    }
    Emoji_1.Paid = Paid;
})(Emoji || (exports.Emoji = Emoji = {}));
//# sourceMappingURL=Emoji.js.map