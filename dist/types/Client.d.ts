import type { APIManagerOptions } from '../Client/Managers/ApiManager';
import type { PollManagerOptions } from '../Client/Managers/PollManager';
import type { LoggerOptions } from '../Client/Managers/Logger';
import type { ClientAction } from '../Client/Managers/ActionsManager';
/**
 * Available registries for loading.
 *
 * @property All Register all the available registries.
 * @property Events Register the events registry.
 * @property Commands Register the commands registry.
 * @property Auxiliaries Register the auxiliries registry.
 */
export declare enum Registries {
    All = 0,
    Auxiliaries = 1,
    Commands = 2,
    Events = 3
}
/**
 * Available methods for parsing and receiving updates from Telegram.
 *
 * @property Poll Default long polling method.
 * @property Webhook Instead of long polling, opens a webhook endpoint to receive updates.
 * @property UpdatePacket If you have your own method of receiving updates, you can manually send updates to the client instead.
 */
export declare enum Endpoint {
    Poll = 0,
    Webhook = 1,
    UpdatePacket = 2
}
/**
 * Available registries for auxiliaries. The parameters are enclosed inside the codeblocks.
 *
 * @property Invoices Preload and store invoices for generation: `(client.invoices)`.
 */
export declare enum Auxiliaries {
    Invoices = "invoices"
}
/**
 * Wether to cache partial datas even if it's not complete and to be fetched.
 *
 * @property Chat Cache partial chats.
 * @property Member Cache partial members.
 */
export declare enum PartialTypes {
    Chat = 0,
    Member = 1
}
/**
 * The client will parse the corresponding object for you.
 *
 * @property UnhandledService The client will emit 'unhandled' for all events that has been ignored instead of a warning.
 * @property MessageService Parse message services that was sent by telegram e.g: NewChatMembers, ForumTopicCreated, SuccessfulPayment, etc.
 */
export declare enum Parseables {
    UnhandledService = 0,
    MessageService = 1
}
/**
 * @property endpoint The method for receiving updates from Telegram.
 * @property sweep Set to *true* to sweep main directory or set to an absolute path to sweep a specific path.
 * @property registries Set to `Registries.All` to load all registries or an array of specific registries.
 */
export interface ClientOptions {
    [key: string]: any;
    poll?: PollManagerOptions;
    logger?: LoggerOptions;
    partials?: Array<PartialTypes>;
    api?: APIManagerOptions;
    parseables?: Array<Parseables>;
    endpoint?: Endpoint;
    sweep?: boolean | string;
    registries?: Registries.All | Registries[];
    actions?: Array<ClientAction> | ClientAction.All;
}
