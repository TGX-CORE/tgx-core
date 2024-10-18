"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
class Piece {
    constructor(context_piece, context_metadata) {
        this.name = context_metadata.name;
        this.enabled = context_metadata.enabled ?? true;
        this.registry = context_piece.registry;
        this.client = context_piece.registry.client;
    }
    onLoad() {
        return undefined;
    }
}
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map