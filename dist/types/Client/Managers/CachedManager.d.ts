import { DataManager } from "./DataManager";
export declare class CachedManager<HoldType = any> extends DataManager {
    constructor(client: any, holds?: HoldType, iterable?: any[]);
    get cache(): import("@discordjs/collection").Collection<string | number, any>;
    _add(data: any, cache?: boolean, { id, extras, force, holds }?: any): any;
}
//# sourceMappingURL=CachedManager.d.ts.map