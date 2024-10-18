"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseManager = void 0;
const shared_1 = require("../../Internals/shared");
const Base_1 = require("../../Classes/Base");
class BaseManager extends Base_1.Base {
    constructor(client, pointer, defaults) {
        super();
        Object.defineProperty(this, 'client', { value: client });
        Object.defineProperty(this, 'default', { value: defaults });
        let value = pointer && defaults ?
            (0, shared_1.defaults)(defaults, client.options[pointer])
            : pointer ? client.options[pointer] : undefined;
        Object.defineProperty(this, 'options', { value });
    }
}
exports.BaseManager = BaseManager;
//# sourceMappingURL=BaseManager.js.map