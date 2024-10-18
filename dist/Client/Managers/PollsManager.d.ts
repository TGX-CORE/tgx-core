import type { Client } from '../../Client/Client';
import { CachedManager } from './CachedManager';
import { Poll } from '../../Classes/Poll';
export declare class PollsManager extends CachedManager<string, Poll> {
    constructor(client: Client);
}
