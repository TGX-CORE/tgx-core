import type { InlineQueryResult } from '../Types/InlineQueryResult'
import type { WebAppInfo } from '../Types/InlineQuery'
import { Builder } from './Builder'

export class InlineQueryResults extends Builder {

    public declare value: InlineQueryResult[]

    /**
     * @param results Array of results for the inline query
     */
    public constructor(...results: InlineQueryResult[]){
        super({ value: results, parseVal: true })
    }

    /**
     * @param results The result to add to the current results.
     */
    public add(...results: InlineQueryResult[]){
        this.value.push(...results)
    }

}

/**
 * The result button can be any of the inline query result buttons below.
 */
export type InlineQueryResultButtonType =
    | InlineQueryResultButton.WebApp
    | InlineQueryResultButton.Start

/**
 * Represents a button to be shown above inline query results.
 */
export namespace InlineQueryResultButton {

    export class WebApp extends Builder {

        /**
         * @param text Label text on the button
         * @param url Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
         */
        constructor(text: string, url: string ){
            super({ value: { text, web_app: { url } }, parseVal: true })
        }
    }
    
    /**
     * [Deep-linking](https://core.telegram.org/bots/features#deep-linking) parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     */
    export class Start extends Builder {

        /**
         * @param text Label text on the button.
         * @param start_parameter Parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         */
        constructor(text: string, start_parameter: string){
            super({ value: { text, start_parameter }, parseVal: true })
        }
    }

}