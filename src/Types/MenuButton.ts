import type { WebAppInfo } from './InlineQuery'

export type ChatMenuButton = typeof MenuButton.Default |
                             typeof MenuButton.Commands |
                             typeof MenuButton.WebApp

export namespace MenuButton {

    export function Default(){
        return '{ "type" : "default" }'
    }

    export function Commands(){
        return '{ "type" : "commands" }'
    }

    export function WebApp(text: string, web_app: WebAppInfo){
        return JSON.stringify({ type: 'web_app', text, web_app })
    }

}