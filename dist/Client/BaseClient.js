"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const Client_1 = require("../Types/Client");
const shared_1 = require("../Internals/shared");
const Logger_1 = require("./Managers/Logger");
const Base_1 = require("../Classes/Base");
class BaseClient extends Base_1.Base {
    constructor(options) {
        super();
        this.options = (0, shared_1.defaults)({
            logger: {
                level: Logger_1.LogLevel.Debug
            },
            endpoint: Client_1.Endpoint.Poll
        }, options);
    }
}
exports.BaseClient = BaseClient;
//# sourceMappingURL=BaseClient.js.map