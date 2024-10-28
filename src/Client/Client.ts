import type { ClientOptions } from '../Types/Client'
import type { File } from '../Classes/File'

import { ExtensionsManager } from './Managers/ExtensionsManager'
import { CommandsManager } from './Managers/CommandsManager'
import { InvoicesManager } from './Managers/InvoicesManager'
import { PaymentsManager } from './Managers/PaymentsManager'
import { EndpointManager } from './Managers/EndpointManager'
import { WebhookManager } from './Managers/WebhookManager'
import { ActionsManager } from './Managers/ActionsManager'
import { PollsManager } from './Managers/PollsManager'
import { ChatsManager } from './Managers/ChatsManager'
import { UsersManager } from './Managers/UsersManager'
import { ClientEvent } from '../Types/ClientEvent'
import { ClientUser } from './ClientUser'
import { BaseClient } from './BaseClient'

import { EnvironmentVariables } from '../Internals/shared'
import { Logger } from './Managers/Logger'
import { Rest } from '../Classes/Rest'

import { ErrorCodes } from '../Error/Codes'
import { TGXError } from '../Error'

/**
 * The main hub for interacting with the Telegram API.
 * 
 * @information Client Events|The {@link ClientEvent:enum} contains the events that the client emits and what their parameters.
 * 
 * @property token The token provided by Telegram for your client.
 * @property database An extension activated property.
 */
export class Client extends BaseClient {

  public logger: Logger
  public user: ClientUser
  
  public actions: ActionsManager
  public chats: ChatsManager
  public users: UsersManager
  public polls: PollsManager
  public invoices: InvoicesManager
  public payments: PaymentsManager
  public commands: CommandsManager
  public extensions: ExtensionsManager
  public endpoint: EndpointManager
  public webhook: WebhookManager

  public rest: Rest

  public database?: any

  /**
   * @param options The options for your client.
   */
  public constructor(options: ClientOptions){
    super(options)

    this.logger = new Logger(this.options.logger?.level)

    this.actions = new ActionsManager(this)

    this.chats = new ChatsManager(this)

    this.users = new UsersManager(this)

    this.payments = new PaymentsManager(this)

    this.polls = new PollsManager(this)

    this.invoices = new InvoicesManager(this)

    this.commands = new CommandsManager(this)

    this.extensions = new ExtensionsManager(this)

    this.endpoint = new EndpointManager(this)

    this.webhook = new WebhookManager(this)

    this.user = new ClientUser(this, { id: 0 })

    this.rest = new Rest()

  }

  /**
   * {@inheritDoc Rest.fetchFile}
   */
  public async fetchFile(file_id: string, file?: boolean): Promise<File|false> {
    return this.rest.fetchFile(file_id, file)
  }

  /**
   * Intializes your client and the poll manager, also updating the me manager.
   * 
   * @param token Your token for authorization, or see {@link EnvironmentVariables}.
   * @param provider_token Your token provided by your payment provider, or see {@link EnvironmentVariables}.
   */
  public async intialize(
    token: string = process.env[EnvironmentVariables.Token] as string,
    provider_token: string = process.env[EnvironmentVariables.ProviderToken] as string
  ): Promise<void> {

    if(!token) throw new TGXError(ErrorCodes.MissingToken)

    this.logger.debug(`Client is preparing to start.`, `\n`, `${ token?.split(':')[0] }:${ token?.split(':')[1]?.replace(/[a-zA-Z0-9]/g, 'X') }`)
    this.rest.setToken(token)
    this.invoices.setToken(provider_token)
    
    await this.user.get()
    await this.extensions.initialize()
    await this.endpoint.initialize()

    this.emit(ClientEvent.Ready, this)
  }
  
}