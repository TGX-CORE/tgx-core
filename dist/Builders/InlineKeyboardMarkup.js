"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardButton = exports.InlineKeyboardMarkup = void 0;
exports.InlineKeyboardGroup = InlineKeyboardGroup;
const Builder_1 = require("./Builder");
class InlineKeyboardMarkup extends Builder_1.Builder {
    constructor(...InlineKeyboardGroups) {
        super({ value: { inline_keyboard: InlineKeyboardGroups }, parseVal: true });
    }
    addRow(...InlineKeyboardButtons) {
        this.value.push(InlineKeyboardGroup(...InlineKeyboardButtons));
    }
}
exports.InlineKeyboardMarkup = InlineKeyboardMarkup;
function InlineKeyboardGroup(...InlineKeyboardButtons) {
    return [...InlineKeyboardButtons];
}
var KeyboardButton;
(function (KeyboardButton) {
    function Pay() {
        return { pay: true };
    }
    KeyboardButton.Pay = Pay;
    function Url(url) {
        return { url };
    }
    KeyboardButton.Url = Url;
    function Text(text) {
        return { text };
    }
    KeyboardButton.Text = Text;
    function LoginUrl(login_url) {
        return { login_url };
    }
    KeyboardButton.LoginUrl = LoginUrl;
    function WebAppInfo(web_app) {
        return { web_app };
    }
    KeyboardButton.WebAppInfo = WebAppInfo;
    function CallbackGame(callback_game) {
        return { callback_game };
    }
    KeyboardButton.CallbackGame = CallbackGame;
    function CallbackData(callback_data) {
        return { callback_data };
    }
    KeyboardButton.CallbackData = CallbackData;
    function SwitchInlineQuery(switch_inline_query) {
        return { switch_inline_query };
    }
    KeyboardButton.SwitchInlineQuery = SwitchInlineQuery;
    function SwitchInlineQueryCurrentChat(switch_inline_query_current_chat) {
        return { switch_inline_query_current_chat };
    }
    KeyboardButton.SwitchInlineQueryCurrentChat = SwitchInlineQueryCurrentChat;
    function SwitchInlineQueryChosenChat(switch_inline_query_chosen_chat) {
        return { switch_inline_query_chosen_chat };
    }
    KeyboardButton.SwitchInlineQueryChosenChat = SwitchInlineQueryChosenChat;
})(KeyboardButton || (exports.KeyboardButton = KeyboardButton = {}));
//# sourceMappingURL=InlineKeyboardMarkup.js.map