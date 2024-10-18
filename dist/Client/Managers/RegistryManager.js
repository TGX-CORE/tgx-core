"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryManager = void 0;
const scanner_1 = require("../../Internals/scanner");
const collection_1 = require("@discordjs/collection");
const path_1 = require("path");
class RegistryManager extends collection_1.Collection {
    constructor() {
        super();
    }
    register(store) {
        this.set(store.name, store);
        return this;
    }
    deregister(store) {
        this.delete(store.name);
        return this;
    }
    registerPath(root = (0, scanner_1.scanRoot)().root) {
        for (const store of this.values()) {
            store.register((0, path_1.join)(root, store.name));
        }
    }
}
exports.RegistryManager = RegistryManager;
//# sourceMappingURL=RegistryManager.js.map