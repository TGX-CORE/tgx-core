import type { Client } from '../Client'

import { CachedManager } from './CachedManager'
import { User } from '../../Classes/User'

export class UsersManager extends CachedManager<number, User>{

    public constructor(client: Client) {
        super(client, User)
    }

}