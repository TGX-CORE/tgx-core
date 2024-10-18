import type { ClientOptions } from '../Types/Client';
import { CommandsManager } from './Managers/CommandsManager';
import { InvoicesManager } from './Managers/InvoicesManager';
import { PaymentsManager } from './Managers/PaymentsManager';
import { RegistryManager } from './Managers/RegistryManager';
import { ActionsManager } from './Managers/ActionsManager';
import { PollsManager } from './Managers/PollsManager';
import { ChatsManager } from './Managers/ChatsManager';
import { UsersManager } from './Managers/UsersManager';
import { PollManager } from './Managers/PollManager';
import { APIManager } from './Managers/ApiManager';
import { MeManager } from './Managers/MeManager';
import { Logger } from './Managers/Logger';
import { BaseClient } from './BaseClient';
export declare enum PartialTypes {
    Chat = 0,
    Member = 1
}
export declare enum Parseables {
    UnhandledService = 0,
    Command = 1
}
/**
 * The main hub for interacting with the Telegram API.
 */
export declare class Client extends BaseClient {
    private token?;
    logger: Logger;
    poll: PollManager;
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
     * @param token - Your token for authorization.
     * @param provider_token - Your token provided by your payment provider.
     */
    intialize(token?: string, provider_token?: string): Promise<boolean>;
}
//# sourceMappingURL=Client.d.ts.map