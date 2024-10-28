import type { ExtensionsManagerOptions } from '../Client/Managers/ExtensionsManager'
import type { ClientAction } from '../Client/Managers/ActionsManager'
import type { LoggerOptions } from '../Client/Managers/Logger'
import type { WebAppInfo } from './InlineQuery'
import type { EndpointOptions } from './EndpointManager'

export type ChatMenuButton = DefaultChatMenuButton|CommandsChatMenuButton|WebappChatMenuButton

/**
 * Available registries for auxiliaries. The parameters are enclosed inside the codeblocks.
 * 
 * @property Invoices Preload and store invoices for generation: `(client.invoices)`.
 */
export enum Auxiliaries {
    Invoices = 'invoices'
}

/**
 * Wether to cache partial datas even if it's not complete and to be fetched.
 * 
 * @property Chat Cache partial chats.
 * @property Member Cache partial members.
 */
export enum PartialTypes {
    Chat,
    Member
}
  
/**
 * The client will parse the corresponding object for you.
 * 
 * @property UnhandledService The client will emit 'unhandled' for all events that has been ignored instead of a warning.
 * @property MessageService Parse message services that was sent by telegram e.g: NewChatMembers, ForumTopicCreated, SuccessfulPayment, etc.
 */
export enum Parseables {
    UnhandledService,
    MessageService
}  

/**
 * @property sweep Set to *true* to sweep main directory or set to an absolute path to sweep a specific path.
 * @property registries Set to `Registries.All` to load all registries or an array of specific registries.
 * @property endpoing The cluster method for receiving updates from Telegram.
 */
export interface ClientOptions {
    [key: string]: any

    extensions?: ExtensionsManagerOptions
    logger?: LoggerOptions

    partials?: Array<PartialTypes>
    parseables?: Array<Parseables>
    endpoint?: EndpointOptions

    actions?: {
        load: Array<ClientAction>|ClientAction.All
    }
    
}

export interface WebappChatMenuButton {
    type: 'web_app'
    text: string
    web_app: WebAppInfo
}

export interface DefaultChatMenuButton {
    type: 'default'
}

export interface CommandsChatMenuButton {
    type: 'commands'
}