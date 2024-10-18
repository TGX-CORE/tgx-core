"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQuery = void 0;
const BaseClass_1 = require("./BaseClass");
/**
 * Represents an incoming inline query.
 */
class InlineQuery extends BaseClass_1.BaseClass {
    /**
     *
     * @param client The client of the incoming inline query.
     * @param packet The packet of the incoming inline query.
     */
    constructor(client, packet) {
        super(client, packet);
    }
    /**
     * Sends an array of results to the inline query.
     *
     * @param results Array of results for the inline query
     * @param button The button to be shown above inline query results
     * @param next_offset Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
     * @param is_personal If results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
     * @param cache_time The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
     */
    async answer(results, button, next_offset, is_personal, cache_time) {
        return this.client.api.answerInlineQuery(null, {
            params: { inline_query_id: this.id, results, button, next_offset, is_personal, cache_time },
            returnOk: true
        });
    }
    get user() {
        return this.client.users._add(this.from, true);
    }
}
exports.InlineQuery = InlineQuery;
//# sourceMappingURL=InlineQuery.js.map