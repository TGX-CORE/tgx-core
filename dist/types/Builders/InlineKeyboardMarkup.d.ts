import type { LoginUrl, SwitchInlineQueryChosenChat } from '../Types/InlineQueryResult';
import type { WebAppInfo } from '../Types/InlineQuery';
import { Builder } from './Builder';
export declare class InlineKeyboardMarkup extends Builder {
    value: InlineKeyboardButton[][];
    constructor(...InlineKeyboardGroups: InlineKeyboardButton[][]);
    addRow(...InlineKeyboardButtons: InlineKeyboardButton[]): void;
}
export declare function InlineKeyboardGroup(...InlineKeyboardButtons: InlineKeyboardButton[]): InlineKeyboardButton[];
export type InlineKeyboardButton = typeof KeyboardButton.Pay | typeof KeyboardButton.Url | typeof KeyboardButton.Text | typeof KeyboardButton.LoginUrl | typeof KeyboardButton.WebAppInfo | typeof KeyboardButton.CallbackGame | typeof KeyboardButton.CallbackData | typeof KeyboardButton.SwitchInlineQuery | typeof KeyboardButton.SwitchInlineQueryChosenChat | typeof KeyboardButton.SwitchInlineQueryCurrentChat;
export declare namespace KeyboardButton {
    function Pay(): {
        pay: boolean;
    };
    function Url(url: string): {
        url: string;
    };
    function Text(text: string): {
        text: string;
    };
    function LoginUrl(login_url: LoginUrl): {
        login_url: LoginUrl;
    };
    function WebAppInfo(web_app: WebAppInfo): {
        web_app: WebAppInfo;
    };
    function CallbackGame(callback_game: string): {
        callback_game: string;
    };
    function CallbackData(callback_data: string): {
        callback_data: string;
    };
    function SwitchInlineQuery(switch_inline_query: string): {
        switch_inline_query: string;
    };
    function SwitchInlineQueryCurrentChat(switch_inline_query_current_chat: string): {
        switch_inline_query_current_chat: string;
    };
    function SwitchInlineQueryChosenChat(switch_inline_query_chosen_chat: SwitchInlineQueryChosenChat): {
        switch_inline_query_chosen_chat: SwitchInlineQueryChosenChat;
    };
}
//# sourceMappingURL=InlineKeyboardMarkup.d.ts.map