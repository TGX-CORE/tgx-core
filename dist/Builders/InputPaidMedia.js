"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPaidMediaBuilder = void 0;
const Builder_1 = require("./Builder");
class InputPaidMediaBuilder extends Builder_1.Builder {
    /**
     * @param medias The medias to be attached to this builder.
     */
    constructor(...medias) {
        super({ value: medias, parseVal: true });
    }
    /**
     * Adds medias to the current builder.
     *
     * @param medias The medias to add.
     */
    add(...medias) {
        this.value.push(...medias);
        return this;
    }
}
exports.InputPaidMediaBuilder = InputPaidMediaBuilder;
//# sourceMappingURL=InputPaidMedia.js.map