"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedUpdatesOptions = void 0;
const Builder_1 = require("./Builder");
class AllowedUpdatesOptions extends Builder_1.Builder {
    constructor(...allowed_updates) {
        super({ value: allowed_updates, parseVal: true });
    }
}
exports.AllowedUpdatesOptions = AllowedUpdatesOptions;
//# sourceMappingURL=Client.js.map