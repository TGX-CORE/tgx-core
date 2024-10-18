"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryResultGame = void 0;
const BaseBuilder_1 = require("../BaseBuilder");
class InlineQueryResultGame extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'game'
        });
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setGameShortName(gameShortName) {
        this.game_short_name = gameShortName;
        return this;
    }
    setReplyMarkup(replyMarkup) {
        this.reply_markup = replyMarkup;
        return this;
    }
}
exports.InlineQueryResultGame = InlineQueryResultGame;
//# sourceMappingURL=InlineQueryResultGame.js.map