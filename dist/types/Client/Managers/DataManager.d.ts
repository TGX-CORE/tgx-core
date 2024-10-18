import { Collection } from '@discordjs/collection';
import { BaseManager } from './BaseManager';
export declare class DataManager extends BaseManager {
    protected holds: unknown;
    /**
     * @hidden
     */
    protected _cache: Collection<string | number, any>;
    constructor(client: any, holds: unknown);
}
//# sourceMappingURL=DataManager.d.ts.map