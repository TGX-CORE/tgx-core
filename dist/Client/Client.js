"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Client_1 = require("../Types/Client");
const AuxilliaryRegistry_1 = require("./Registry/AuxilliaryRegistry");
const CommandsRegistry_1 = require("./Registry/CommandsRegistry");
const CommandsManager_1 = require("./Managers/CommandsManager");
const InvoicesManager_1 = require("./Managers/InvoicesManager");
const PaymentsManager_1 = require("./Managers/PaymentsManager");
const RegistryManager_1 = require("./Managers/RegistryManager");
const ActionsManager_1 = require("./Managers/ActionsManager");
const WebhookManager_1 = require("./Managers/WebhookManager");
const EventsRegistry_1 = require("./Registry/EventsRegistry");
const PollsManager_1 = require("./Managers/PollsManager");
const ChatsManager_1 = require("./Managers/ChatsManager");
const UsersManager_1 = require("./Managers/UsersManager");
const PollManager_1 = require("./Managers/PollManager");
const ClientEvent_1 = require("../Types/ClientEvent");
const ApiManager_1 = require("./Managers/ApiManager");
const MeManager_1 = require("./Managers/MeManager");
const Logger_1 = require("./Managers/Logger");
const BaseClient_1 = require("./BaseClient");
const path_1 = require("path");
/**
 * The main hub for interacting with the Telegram API.
 *
 * @information Client Events|The {@link ClientEvent:enum} contains the events that the client emits and what their parameters.
 */
class Client extends BaseClient_1.BaseClient {
    /**
     * @param options - The options for your client.
     */
    constructor(options) {
        super(options);
        this.logger = new Logger_1.Logger(this.options.logger?.level);
        this.api = new ApiManager_1.APIManager(this);
        this.poll = new PollManager_1.PollManager(this);
        this.actions = new ActionsManager_1.ActionsManager(this);
        this.chats = new ChatsManager_1.ChatsManager(this);
        this.users = new UsersManager_1.UsersManager(this);
        this.payments = new PaymentsManager_1.PaymentsManager(this);
        this.polls = new PollsManager_1.PollsManager(this);
        this.invoices = new InvoicesManager_1.InvoicesManager(this);
        this.commands = new CommandsManager_1.CommandsManager(this);
        this.me = new MeManager_1.MeManager(this);
        this.registries = new RegistryManager_1.RegistryManager()
            .register(new AuxilliaryRegistry_1.AuxiliariesRegistry(this))
            .register(new EventsRegistry_1.EventsRegistry(this))
            .register(new CommandsRegistry_1.CommandsRegistry(this));
    }
    /**
     *  Updates the me manager of the client.
     */
    async update() {
        await this.me.update();
        return this.logger.debug(`Client has been updated, hello ${this.me?.first_name}@${this.me?.username}!`);
    }
    /**
     * Intializes your client and the poll manager, also updating the me manager.
     *
     * @param token - Your token for authorization, or stored in process.env as 'TELEGRAM_TOKEN'.
     * @param provider_token - Your token provided by your payment provider, or stored in process.env as 'PAYMENT_PROVIDER_TOKEN'.
     */
    async intialize(token = process.env['TELEGRAM_TOKEN'], provider_token = process.env['PAYMENT_PROVIDER_TOKEN']) {
        this.logger.debug(`Client is prepraring to start, token: ${token?.split(':')[0]}:${token?.split(':')[1]?.replace(/[a-zA-Z0-9]/g, 'X')} `);
        this.api.setToken(token);
        this.invoices.setToken(provider_token);
        if (this.options.sweep !== null) {
            this.registries.registerPath(typeof this.options.sweep == 'string' ? (0, path_1.join)(process.cwd(), this.options.sweep) : undefined);
        }
        this.registries.forEach(async (registry) => {
            if (this.options.registries == Client_1.Registries.All || this.options.registries?.includes(registry.id)) {
                await registry.loadAll();
            }
        });
        await this.update();
        switch (this.options.endpoint) {
            case Client_1.Endpoint.Poll:
                await this.poll.initialize();
                break;
            case Client_1.Endpoint.Webhook:
                this.webhook = new WebhookManager_1.WebhookManager(this);
                await this.webhook.intialize();
                break;
        }
        this.emit(ClientEvent_1.ClientEvent.Ready, this);
        return true;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map