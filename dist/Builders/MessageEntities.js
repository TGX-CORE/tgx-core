"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEntities = void 0;
const Builder_1 = require("./Builder");
class MessageEntities extends Builder_1.Builder {
    /**
     * @param entites The entities to attach to the message.
     */
    constructor(...entites) {
        super({ value: entites = [] });
    }
    /**
     * Add entities to the current builder.
     *
     * @param entity The entities to add to the message.
     */
    add(...entity) {
        this.value.push(...entity);
        return this;
    }
}
exports.MessageEntities = MessageEntities;
//# sourceMappingURL=MessageEntities.js.map