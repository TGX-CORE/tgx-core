import type { InlineKeyboardButton, ReplyKeyboardButton } from '../Types/InlineKeyboard'

import { Builder } from './Builder'

/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 */
export class InlineKeyboardMarkup extends Builder {

    /**
     * @param inline_buttons An array of arrays containing of buttons.
     */
    public constructor(...inline_buttons: InlineKeyboardButton[][]){
        super({ value: { inline_keyboard: inline_buttons }, parseVal: true })
    }

    /**
     * Adds a new row to the current markup.
     * 
     * @param inline_buttons The keyboard buttons to display in this row.
     */
    public addrow(...inline_buttons: InlineKeyboardButton[]){
        this.value.inline_keyboard.push([ ...inline_buttons ])
        return this
    }

}

/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export class ReplyKeyboardMarkup extends Builder {

    /**
     * @param is_persistent Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
     * @param resize_keyboard Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
     * @param one_time_keyboard Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
     * @param input_field_placeholder The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
     * @param selective Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
     */
    public constructor(is_persistent?: boolean, resize_keyboard?: boolean, one_time_keyboard?: boolean, input_field_placeholder?: string, selective?: boolean){
        super({ value: { keyboard: [ ], is_persistent, resize_keyboard, one_time_keyboard, input_field_placeholder, selective } })
    }

    /**
     * Adds a new row of buttons to the current markup.
     * 
     * @param reply_buttons The reply keyboard buttons to display in this row.
     */
    public addRow(...reply_buttons: ReplyKeyboardButton[]) {
        this.value.keyboard.push([ ...reply_buttons ])
        return this
    }

}

/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot.
 * 
 * An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export class ReplyKeyboardRemove extends Builder {

    /**
     * @param selective Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
     */
    public constructor(selective?: boolean){
        super({ value: { remove_keyboard: true, selective } })
    }
}
/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply').
 * 
 * This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.
 */
export class ForceReply extends Builder {

    /**
     * @param input_field_placeholder The placeholder to be shown in the input field when the reply is active; 1-64 characters
     * @param selective Use this parameter if you want to force reply from specific users only. Targets: 1) users that are mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
     */
    public constructor(input_field_placeholder?: string, selective?: boolean){
        super({ value: { force_reply: true, input_field_placeholder, selective } })
    }

}