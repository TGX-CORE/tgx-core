"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsManager = void 0;
const BaseManager_1 = require("./BaseManager");
class CommandsManager extends BaseManager_1.BaseManager {
    async set(payload) {
        return this.client.api.setMyCommands(null, {
            params: payload,
            returnOk: true
        });
    }
    async get(scope, language_code) {
        return this.client.api.getMyCommands(null, {
            params: { scope, language_code },
            lean: true,
            result: true
        });
    }
    async delete(scope, language_code) {
        return this.client.api.deleteMyCommands(null, {
            params: { scope, language_code },
            lean: true,
            result: true
        });
    }
}
exports.CommandsManager = CommandsManager;
//# sourceMappingURL=CommandsManager.js.map