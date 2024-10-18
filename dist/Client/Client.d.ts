import { type ClientOptions } from '../Types/Client';
import { CommandsManager } from './Managers/CommandsManager';
import { InvoicesManager } from './Managers/InvoicesManager';
import { PaymentsManager } from './Managers/PaymentsManager';
import { RegistryManager } from './Managers/RegistryManager';
import { ActionsManager } from './Managers/ActionsManager';
import { WebhookManager } from './Managers/WebhookManager';
import { PollsManager } from './Managers/PollsManager';
import { ChatsManager } from './Managers/ChatsManager';
import { UsersManager } from './Managers/UsersManager';
import { PollManager } from './Managers/PollManager';
import { APIManager } from './Managers/ApiManager';
import { MeManager } from './Managers/MeManager';
import { Logger } from './Managers/Logger';
import { BaseClient } from './BaseClient';
/**
 * The main hub for interacting with the Telegram API.
 *
 * @information Client Events|The {@link ClientEvent:enum} contains the events that the client emits and what their parameters.
 */
export declare class Client extends BaseClient {
    /**
     * The token provided by Telegram for your client.
     */
    readonly token?: string;
    logger: Logger;
    actions: ActionsManager;
    api: APIManager;
    chats: ChatsManager;
    registries: RegistryManager;
    users: UsersManager;
    polls: PollsManager;
    invoices: InvoicesManager;
    payments: PaymentsManager;
    commands: CommandsManager;
    me: MeManager;
    poll: PollManager;
    webhook?: WebhookManager;
    /**
     * @param options - The options for your client.
     */
    constructor(options: ClientOptions);
    /**
     *  Updates the me manager of the client.
     */
    update(): Promise<void>;
    /**
     * Intializes your client and the poll manager, also updating the me manager.
     *
     * @param token - Your token for authorization, or stored in process.env as 'TELEGRAM_TOKEN'.
     * @param provider_token - Your token provided by your payment provider, or stored in process.env as 'PAYMENT_PROVIDER_TOKEN'.
     */
    intialize(token?: string, provider_token?: string): Promise<boolean>;
}
