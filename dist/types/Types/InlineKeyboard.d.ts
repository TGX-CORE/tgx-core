import type { LoginUrl as LoginUrlPayload, SwitchInlineQueryChosenChat as SwitchInlineQueryChosenChatPayload } from './InlineQueryResult';
import type { ChatAdministratorRights } from '../Builders/ChatPermissions';
import type { WebAppInfo as WebAppInfoPayload } from './InlineQuery';
import { Builder } from '../Builders/Builder';
export type InlineKeyboardButton = KeyboardButton.Pay | KeyboardButton.Url | KeyboardButton.LoginUrl | KeyboardButton.WebAppInfo | KeyboardButton.CallbackGame | KeyboardButton.CallbackData | KeyboardButton.SwitchInlineQuery | KeyboardButton.SwitchInlineQueryChosenChat | KeyboardButton.SwitchInlineQueryCurrentChat;
export type ReplyKeyboardButton = ReplyButton.Text | ReplyButton.Chats | ReplyButton.Contact | ReplyButton.Users | ReplyButton.Location | ReplyButton.Poll | ReplyButton.WebApp;
export declare namespace KeyboardButton {
    class Pay extends Builder {
        constructor(text: string);
    }
    class Url extends Builder {
        constructor(text: string, url: string);
    }
    class LoginUrl extends Builder {
        constructor(text: string, login_url: LoginUrlPayload);
    }
    class WebAppInfo extends Builder {
        constructor(text: string, web_app: WebAppInfoPayload);
    }
    class CallbackGame extends Builder {
        constructor(text: string, callback_game: string);
    }
    class CallbackData extends Builder {
        constructor(text: string, callback_data: string);
    }
    class SwitchInlineQuery extends Builder {
        constructor(text: string, switch_inline_query: string);
    }
    class SwitchInlineQueryCurrentChat extends Builder {
        constructor(text: string, switch_inline_query_current_chat: string);
    }
    class SwitchInlineQueryChosenChat extends Builder {
        constructor(text: string, switch_inline_query_chosen_chat: SwitchInlineQueryChosenChatPayload);
    }
}
export declare namespace ReplyButton {
    class Text extends Builder {
        constructor(text: string);
    }
    class Users extends Builder {
        constructor(text: string, request_users: RequestUsers);
    }
    class Chats extends Builder {
        constructor(text: string, request_chat: RequestChat);
    }
    class Contact extends Builder {
        constructor(text: string);
    }
    class Location extends Builder {
        constructor(text: string);
    }
    class Poll extends Builder {
        constructor(text: string, type?: 'quiz' | 'regular');
    }
    class WebApp extends Builder {
        constructor(text: string, web_app: WebAppInfoPayload);
    }
}
export interface RequestUsers {
    request_id: number;
    user_is_bot?: boolean;
    user_is_premium?: boolean;
    max_quantity?: number;
    request_name?: boolean;
    request_username?: boolean;
    request_photo?: boolean;
}
interface RequestChat {
    request_id: number;
    chat_is_channel: boolean;
    chat_is_forum?: boolean;
    chat_has_username?: boolean;
    chat_is_created?: boolean;
    user_administrator_rights?: ChatAdministratorRights;
    bot_administrator_rights?: ChatAdministratorRights;
    bot_is_member?: boolean;
    request_title?: boolean;
    request_username?: boolean;
    request_photo?: boolean;
}
export {};
//# sourceMappingURL=InlineKeyboard.d.ts.map