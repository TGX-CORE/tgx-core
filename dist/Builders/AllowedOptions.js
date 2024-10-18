"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedUpdatesOptions = void 0;
const PollManager_1 = require("../Client/Managers/PollManager");
const Builder_1 = require("./Builder");
class AllowedUpdatesOptions extends Builder_1.Builder {
    /**
     * @param allowed_updates The updates the client will receive. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.
     */
    constructor(...allowed_updates) {
        if (allowed_updates.includes(PollManager_1.AllowedUpdates.All)) {
            allowed_updates = Object.values(PollManager_1.AllowedUpdates)
                .filter((value) => value !== PollManager_1.AllowedUpdates.All)
                .map((value) => value);
        }
        super({ value: allowed_updates, parseVal: true });
    }
}
exports.AllowedUpdatesOptions = AllowedUpdatesOptions;
//# sourceMappingURL=AllowedOptions.js.map