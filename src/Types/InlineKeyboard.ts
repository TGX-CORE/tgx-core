import type { LoginUrl as LoginUrlPayload, SwitchInlineQueryChosenChat as SwitchInlineQueryChosenChatPayload } from './InlineQueryResult'
import type { ChatAdministratorRights } from '../Builders/ChatPermissions'
import type { WebAppInfo, WebAppInfo as WebAppInfoPayload } from './InlineQuery'

/**
 * An inline keyboard button can be any of the keyboard buttons below.
 */
export type InlineKeyboardButton = KeyboardButtonPayload |
                                   typeof KeyboardButton.Pay |
                                   typeof KeyboardButton.Url |
                                   typeof KeyboardButton.LoginUrl |
                                   typeof KeyboardButton.WebAppInfo |
                                   typeof KeyboardButton.CallbackGame |
                                   typeof KeyboardButton.CallbackData |
                                   typeof KeyboardButton.SwitchInlineQuery |
                                   typeof KeyboardButton.SwitchInlineQueryChosenChat |
                                   typeof KeyboardButton.SwitchInlineQueryCurrentChat

/**
 * A reply keyboard button can be any of the reply buttons below.
 */
export type ReplyKeyboardButton = ReplyButtonPayload |
                                  typeof ReplyButton.Text |
                                  typeof ReplyButton.Chats |
                                  typeof ReplyButton.Contact |
                                  typeof ReplyButton.Users | 
                                  typeof ReplyButton.Location |
                                  typeof ReplyButton.Poll |
                                  typeof ReplyButton.WebApp
                   
/**
 * This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
 */
export interface KeyboardButtonPayload {
    text: string
    pay?: boolean
    url?: string
    login_url?: LoginUrlPayload
    web_app?: WebAppInfoPayload
    callback_game?: string
    callback_data?: string
    switch_inline_query?: string
    switch_inline_query_current_chat?: string
    switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChatPayload
}

/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export interface ReplyButtonPayload {
    text: string
    request_users?: RequestUsers
    request_chat?: RequestChat
    request_contact?: boolean
    request_location?: boolean
    request_poll?: {
        type?: 'quiz' | 'regular'
    }
    web_app?: WebAppInfo
}

export interface RequestUsers {
    request_id: number
    user_is_bot?: boolean
    user_is_premium?: boolean
    max_quantity?: number
    request_name?: boolean
    request_username?: boolean
    request_photo?: boolean
}

export interface RequestChat {
    request_id: number
    chat_is_channel: boolean
    chat_is_forum?: boolean
    chat_has_username?: boolean
    chat_is_created?: boolean
    user_administrator_rights?: ChatAdministratorRights
    bot_administrator_rights?: ChatAdministratorRights
    bot_is_member?: boolean
    request_title?: boolean
    request_username?: boolean
    request_photo?: boolean
}

export namespace KeyboardButton {

    /**
     * @param text Label text on the button.
     */
    export function Text(text: string): KeyboardButtonPayload {
        return { text }
    }

    /**
     * To send a Pay button. Substrings “⭐” and “XTR” in the button's text will be replaced with a Telegram Star icon.
     * 
     * NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
     * 
     * @param text Label text on the button.
     */
    export function Pay(text: string): KeyboardButtonPayload {
        return { text, pay: true }
    }

    /**
     * @param text Label text on the button.
     * @param url HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=user_id can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
     */
    export function Url(text: string, url: string): KeyboardButtonPayload {
        return { text, url }
    }

    /**
     * @param text Label text on the button.
     * @param login_url HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
     */
    export function LoginUrl(text: string, login_url: LoginUrlPayload): KeyboardButtonPayload {
        return { text, login_url }
    }

    /**
     * @param text Label text on the button.
     * @param web_app Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
     */
    export function WebAppInfo(text: string, web_app: WebAppInfoPayload): KeyboardButtonPayload {
        return { text, web_app }
    }

    /**
     * @param text Label text on the button.
     * @param callback_game Description of the game that will be launched when the user presses the button.
     */
    export function CallbackGame(text: string, callback_game: string): KeyboardButtonPayload {
        return { text, callback_game }
    }

    /**
     * @param text Label text on the button.
     * @param callback_data Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
     */
    export function CallbackData(text: string, callback_data: string): KeyboardButtonPayload {
        return { text, callback_data }
    }

    /**
     * @param text Label text on the button.
     * @param switch_inline_query If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted.
     */
    export function SwitchInlineQuery(text: string, switch_inline_query: string): KeyboardButtonPayload {
        return { text, switch_inline_query }
    }

    /**
     * @param text Label text on the button.
     * @param switch_inline_query_current_chat If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.
     */
    export function SwitchInlineQueryCurrentChat(text: string, switch_inline_query_current_chat: string): KeyboardButtonPayload {
        return { text, switch_inline_query_current_chat }
    }

    /**
     * @param text Label text on the button.
     * @param switch_inline_query_chosen_chat If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field.
     */
    export function SwitchInlineQueryChosenChat(text: string, switch_inline_query_chosen_chat: SwitchInlineQueryChosenChatPayload): KeyboardButtonPayload {
        return { text, switch_inline_query_chosen_chat }
    }

}

export namespace ReplyButton {

    /**
     * @param text Label text on the button.
     */
    export function Text(text: string): ReplyButtonPayload {
        return { text };
    }

    /**
     * @param text Label text on the button.
     * @param request_users Pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.
     */
    export function Users(text: string, request_users: RequestUsers): ReplyButtonPayload {
        return { text, request_users };
    }

    /**
     * @param text Label text on the button.
     * @param request_chat Chat request object.
     */
    export function Chats(text: string, request_chat: RequestChat): ReplyButtonPayload {
        return { text, request_chat };
    }

    /**
     * The user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
     * 
     * @param text Label text on the button.
     */
    export function Contact(text: string): ReplyButtonPayload {
        return { text, request_contact: true };
    }

    /**
     * The user's current location will be sent when the button is pressed. Available in private chats only.
     * 
     * @param text Label text on the button.
     */
    export function Location(text: string): ReplyButtonPayload {
        return { text, request_location: true };
    }

    /**
     * The user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
     * 
     * @param text Label text on the button.
     * @param type If 'quiz' is passed, the user will be allowed to create only polls in the quiz mode. If 'regular' is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
     */
    export function Poll(text: string, type?: 'quiz' | 'regular'): ReplyButtonPayload {
        return { text, request_poll: { type } };
    }

    /**
     * If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
     *
     * @param text Label text on the button.
     * @param url An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps.
     */
    export function WebApp(text: string, url: string): ReplyButtonPayload {
        return { text, web_app: { url } };
    }
}