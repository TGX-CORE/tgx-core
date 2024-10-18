"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManager = void 0;
const collection_1 = require("@discordjs/collection");
const BaseManager_1 = require("./BaseManager");
class DataManager extends BaseManager_1.BaseManager {
    constructor(client, holds) {
        super(client);
        /**
         * @hidden
         */
        this._cache = new collection_1.Collection();
        this.holds = holds;
    }
}
exports.DataManager = DataManager;
//# sourceMappingURL=DataManager.js.map