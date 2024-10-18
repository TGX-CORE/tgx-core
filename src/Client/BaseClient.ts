import { Endpoint, type ClientOptions } from '../Types/Client'

import { defaults } from '../Internals/shared'
import { LogLevel } from './Managers/Logger'
import { Base } from '../Classes/Base'

export class BaseClient extends Base {

  /**
   * The options provided to the client.
   */
  public options: ClientOptions;
  
  public constructor(options: ClientOptions){
    super()

    this.options = defaults({
        logger: {
            level: LogLevel.Debug
        },
        endpoint: Endpoint.Poll
    }, options)
  }
  
}