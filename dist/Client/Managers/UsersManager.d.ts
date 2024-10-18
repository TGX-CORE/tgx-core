import type { Client } from '../Client';
import { CachedManager } from './CachedManager';
import { User } from '../../Classes/User';
export declare class UsersManager extends CachedManager<number, User> {
    constructor(client: Client);
}
