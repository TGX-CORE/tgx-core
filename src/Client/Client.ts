import type { Registry } from './Registry/Registry'

import { Endpoint, Registries, type ClientOptions } from '../Types/Client'
import { AuxiliariesRegistry } from './Registry/AuxilliaryRegistry'
import { CommandsRegistry } from './Registry/CommandsRegistry'
import { CommandsManager } from './Managers/CommandsManager'
import { InvoicesManager } from './Managers/InvoicesManager'
import { PaymentsManager } from './Managers/PaymentsManager'
import { RegistryManager } from './Managers/RegistryManager'
import { ActionsManager } from './Managers/ActionsManager'
import { WebhookManager } from './Managers/WebhookManager'
import { EventsRegistry } from './Registry/EventsRegistry'
import { PollsManager } from './Managers/PollsManager'
import { ChatsManager } from './Managers/ChatsManager'
import { UsersManager } from './Managers/UsersManager'
import { PollManager, } from './Managers/PollManager'
import { ClientEvent } from '../Types/ClientEvent'
import { APIManager } from './Managers/ApiManager'
import { MeManager } from './Managers/MeManager'
import { Logger } from './Managers/Logger'
import { BaseClient } from './BaseClient'
import { join } from 'path'

/**
 * The main hub for interacting with the Telegram API.
 * 
 * @information Client Events|The {@link ClientEvent:enum} contains the events that the client emits and what their parameters.
 */
export class Client extends BaseClient {

  /**
   * The token provided by Telegram for your client.
   */
  public readonly token?: string

  public logger: Logger
  
  public actions: ActionsManager
  
  public api: APIManager

  public chats: ChatsManager

  public registries: RegistryManager

  public users: UsersManager

  public polls: PollsManager
  
  public invoices: InvoicesManager
  
  public payments: PaymentsManager
  
  public commands: CommandsManager
  
  public me: MeManager
  
  public poll: PollManager

  public webhook?: WebhookManager

  /**
   * @param options - The options for your client.
   */
  public constructor(options: ClientOptions){
    super(options)

    this.logger = new Logger(this.options.logger?.level)

    this.api = new APIManager(this)

    this.poll = new PollManager(this)

    this.actions = new ActionsManager(this)

    this.chats = new ChatsManager(this)

    this.users = new UsersManager(this)

    this.payments = new PaymentsManager(this)

    this.polls = new PollsManager(this)

    this.invoices = new InvoicesManager(this)

    this.commands = new CommandsManager(this)

    this.me = new MeManager(this)

    this.registries = new RegistryManager()
      .register(new AuxiliariesRegistry(this))
      .register(new EventsRegistry(this))
      .register(new CommandsRegistry(this))

  }

  /**
   *  Updates the me manager of the client.
   */
  public async update(): Promise<void> {
    await this.me.update()
    return this.logger.debug(`Client has been updated, hello ${ this.me?.first_name }@${ this.me?.username }!`)
  }

  /**
   * Intializes your client and the poll manager, also updating the me manager.
   * 
   * @param token - Your token for authorization, or stored in process.env as 'TELEGRAM_TOKEN'.
   * @param provider_token - Your token provided by your payment provider, or stored in process.env as 'PAYMENT_PROVIDER_TOKEN'.
   */
  public async intialize(
    token: string = process.env['TELEGRAM_TOKEN'] as string,
    provider_token: string = process.env['PAYMENT_PROVIDER_TOKEN'] as string
  ): Promise<boolean> {

    this.logger.debug(`Client is prepraring to start, token: ${ token?.split(':')[0] }:${ token?.split(':')[1]?.replace(/[a-zA-Z0-9]/g, 'X') } `)
    
    this.api.setToken(token)
    this.invoices.setToken(provider_token)

    if(this.options.sweep !== null){
      this.registries.registerPath(typeof this.options.sweep == 'string' ? join(process.cwd(), this.options.sweep) : undefined)
    }

    this.registries.forEach(async (registry: Registry<any>) => {
      if(this.options.registries == Registries.All || this.options.registries?.includes(registry.id!)){
        await registry.loadAll()
      }
    })
    
    await this.update()
    switch(this.options.endpoint){
      case Endpoint.Poll:
        await this.poll.initialize()
        break
      case Endpoint.Webhook:
        this.webhook = new WebhookManager(this)
        await this.webhook.intialize()
        break
    }
    
    this.emit(ClientEvent.Ready, this)
    return true
  }
  
}