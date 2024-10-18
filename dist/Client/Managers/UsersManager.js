"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManager = void 0;
const CachedManager_1 = require("./CachedManager");
const User_1 = require("../../Classes/User");
class UsersManager extends CachedManager_1.CachedManager {
    constructor(client) {
        super(client, User_1.User);
    }
}
exports.UsersManager = UsersManager;
//# sourceMappingURL=UsersManager.js.map