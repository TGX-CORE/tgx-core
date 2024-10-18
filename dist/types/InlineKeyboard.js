"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyButton = exports.KeyboardButton = void 0;
var KeyboardButton;
(function (KeyboardButton) {
    /**
     * @param text Label text on the button.
     */
    function Text(text) {
        return { text };
    }
    KeyboardButton.Text = Text;
    /**
     * To send a Pay button. Substrings “⭐” and “XTR” in the button's text will be replaced with a Telegram Star icon.
     *
     * NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
     *
     * @param text Label text on the button.
     */
    function Pay(text) {
        return { text, pay: true };
    }
    KeyboardButton.Pay = Pay;
    /**
     * @param text Label text on the button.
     * @param url HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=user_id can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
     */
    function Url(text, url) {
        return { text, url };
    }
    KeyboardButton.Url = Url;
    /**
     * @param text Label text on the button.
     * @param login_url HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
     */
    function LoginUrl(text, login_url) {
        return { text, login_url };
    }
    KeyboardButton.LoginUrl = LoginUrl;
    /**
     * @param text Label text on the button.
     * @param web_app Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
     */
    function WebAppInfo(text, web_app) {
        return { text, web_app };
    }
    KeyboardButton.WebAppInfo = WebAppInfo;
    /**
     * @param text Label text on the button.
     * @param callback_game Description of the game that will be launched when the user presses the button.
     */
    function CallbackGame(text, callback_game) {
        return { text, callback_game };
    }
    KeyboardButton.CallbackGame = CallbackGame;
    /**
     * @param text Label text on the button.
     * @param callback_data Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
     */
    function CallbackData(text, callback_data) {
        return { text, callback_data };
    }
    KeyboardButton.CallbackData = CallbackData;
    /**
     * @param text Label text on the button.
     * @param switch_inline_query If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted.
     */
    function SwitchInlineQuery(text, switch_inline_query) {
        return { text, switch_inline_query };
    }
    KeyboardButton.SwitchInlineQuery = SwitchInlineQuery;
    /**
     * @param text Label text on the button.
     * @param switch_inline_query_current_chat If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.
     */
    function SwitchInlineQueryCurrentChat(text, switch_inline_query_current_chat) {
        return { text, switch_inline_query_current_chat };
    }
    KeyboardButton.SwitchInlineQueryCurrentChat = SwitchInlineQueryCurrentChat;
    /**
     * @param text Label text on the button.
     * @param switch_inline_query_chosen_chat If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field.
     */
    function SwitchInlineQueryChosenChat(text, switch_inline_query_chosen_chat) {
        return { text, switch_inline_query_chosen_chat };
    }
    KeyboardButton.SwitchInlineQueryChosenChat = SwitchInlineQueryChosenChat;
})(KeyboardButton || (exports.KeyboardButton = KeyboardButton = {}));
var ReplyButton;
(function (ReplyButton) {
    /**
     * @param text Label text on the button.
     */
    function Text(text) {
        return { text };
    }
    ReplyButton.Text = Text;
    /**
     * @param text Label text on the button.
     * @param request_users Pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.
     */
    function Users(text, request_users) {
        return { text, request_users };
    }
    ReplyButton.Users = Users;
    /**
     * @param text Label text on the button.
     * @param request_chat Chat request object.
     */
    function Chats(text, request_chat) {
        return { text, request_chat };
    }
    ReplyButton.Chats = Chats;
    /**
     * The user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
     *
     * @param text Label text on the button.
     */
    function Contact(text) {
        return { text, request_contact: true };
    }
    ReplyButton.Contact = Contact;
    /**
     * The user's current location will be sent when the button is pressed. Available in private chats only.
     *
     * @param text Label text on the button.
     */
    function Location(text) {
        return { text, request_location: true };
    }
    ReplyButton.Location = Location;
    /**
     * The user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
     *
     * @param text Label text on the button.
     * @param type If 'quiz' is passed, the user will be allowed to create only polls in the quiz mode. If 'regular' is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
     */
    function Poll(text, type) {
        return { text, request_poll: { type } };
    }
    ReplyButton.Poll = Poll;
    /**
     * If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
     *
     * @param text Label text on the button.
     * @param url An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps.
     */
    function WebApp(text, url) {
        return { text, web_app: { url } };
    }
    ReplyButton.WebApp = WebApp;
})(ReplyButton || (exports.ReplyButton = ReplyButton = {}));
//# sourceMappingURL=InlineKeyboard.js.map