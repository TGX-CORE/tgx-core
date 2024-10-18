"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsManager = void 0;
const CachedManager_1 = require("./CachedManager");
const Poll_1 = require("../../Classes/Poll");
class PollsManager extends CachedManager_1.CachedManager {
    constructor(client) {
        super(client, Poll_1.Poll);
    }
}
exports.PollsManager = PollsManager;
//# sourceMappingURL=PollsManager.js.map