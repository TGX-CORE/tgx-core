"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChosenInlineResult = void 0;
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
class ChosenInlineResult extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client, packet);
    }
    get user() {
        return new User_1.User(this.client, this.from);
    }
}
exports.ChosenInlineResult = ChosenInlineResult;
//# sourceMappingURL=InlineQueryChosenResult.js.map