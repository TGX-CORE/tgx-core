import type { APIManagerOptions } from '../Client/Managers/ApiManager'
import type { PollManagerOptions } from '../Client/Managers/PollManager'
import type { LoggerOptions } from '../Client/Managers/Logger'
import type { ClientAction } from '../Client/Managers/ActionsManager'

/**
 * Available registries for loading.
 * 
 * @property All Register all the available registries.
 * @property Events Register the events registry.
 * @property Commands Register the commands registry.
 * @property Auxiliaries Register the auxiliries registry.
 */
export enum Registries {
    All,
    Auxiliaries,
    Commands,
    Events,
}

/**
 * Available methods for parsing and receiving updates from Telegram.
 * 
 * @property Poll Default long polling method.
 * @property Webhook Instead of long polling, opens a webhook endpoint to receive updates.
 * @property UpdatePacket If you have your own method of receiving updates, you can manually send updates to the client instead.
 */
export enum Endpoint {
    Poll,
    Webhook,
    UpdatePacket
}

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
 */
export interface ClientOptions {
    [key: string]: any
    poll?: PollManagerOptions
    logger?: LoggerOptions
    partials?: Array<PartialTypes>
    api?: APIManagerOptions
    parseables?: Array<Parseables>

    /**
     * The method for receiving updates from Telegram.
     * @default Endpoint.Poll
     */
    endpoint?: Endpoint

    sweep?: boolean|string
    registries?: Registries.All|Registries[]
    actions?: Array<ClientAction>|ClientAction.All
}