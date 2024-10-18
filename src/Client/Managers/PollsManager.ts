import type { Client } from '../../Client/Client'

import { CachedManager } from './CachedManager'
import { Poll } from '../../Classes/Poll'

export class PollsManager extends CachedManager<string, Poll> {

    public constructor(client: Client){
        super(client, Poll)
    }

}