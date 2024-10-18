"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachedManager = void 0;
const DataManager_1 = require("./DataManager");
class CachedManager extends DataManager_1.DataManager {
    constructor(client, holds, iterable) {
        super(client, holds);
        if (iterable) {
            for (const hold of iterable) {
                this._add(hold);
            }
        }
    }
    /**
     * Gets the cache collection of the manager.
     */
    get cache() {
        return this._cache;
    }
    /**
     * Add data with cache check to the current manager.
     *
     * @param data The data to add to the cache manager.
     * @param cache Pass *True* to cache the data.
     * @param param2 Additional data to pass.
     */
    _add(data, cache = true, { id, extras = [], force, holds } = {}) {
        const existing = this.cache.get(id ?? data.id);
        if (existing && !force) {
            if (cache) {
                existing._patch(data);
                return existing;
            }
            const clone = existing._clone();
            clone._patch(data);
            return clone;
        }
        const entry = holds || this.holds ? new (holds ?? this.holds)(this.client, data, extras ?? undefined) : data;
        if (cache)
            this.cache.set(id ?? entry.id, entry);
        return entry;
    }
}
exports.CachedManager = CachedManager;
//# sourceMappingURL=CachedManager.js.map