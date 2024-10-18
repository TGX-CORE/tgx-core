"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericCreator = void 0;
const Generic_1 = require("./Generic");
class GenericCreator extends Generic_1.GenericAction {
    constructor(client, hold, pointer) {
        super(client);
        this.hold = hold;
        this.pointer = pointer;
    }
    handle(_packet, prepack) {
        let packet = prepack ? this.prepack(_packet) : _packet;
        const constructed = new this.hold(this.client, Array.isArray(packet) ? packet[1] : packet);
        return this.emit(this.pointer, constructed);
    }
}
exports.GenericCreator = GenericCreator;
//# sourceMappingURL=GenericCreator.js.map