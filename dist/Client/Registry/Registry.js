"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const collection_1 = require("@discordjs/collection");
const fs_1 = require("fs");
const path_1 = require("path");
const Strategy_1 = require("./Strategy");
class Registry extends collection_1.Collection {
    constructor(client, constructor, options) {
        super();
        this.strategy = new Strategy_1.Strategy();
        this.paths = new Set();
        this.name = options.name;
        this.client = client;
        this.Constructor = constructor;
    }
    register(path) {
        this.paths.add(path);
        return this;
    }
    unregister(path) {
        this.paths.delete(path);
        return this;
    }
    async loadAll() {
        const registries = [];
        for (const directory of this.paths) {
            try {
                const stat = await fs_1.promises.stat(directory);
                if (!stat.isDirectory())
                    continue;
            }
            catch (e) {
                continue;
            }
            for await (const module of this.loadPath(directory)) {
                if (module)
                    registries.push(module);
            }
        }
        for (const registry of registries) {
            this.insert(registry);
        }
    }
    unload(name) {
        const piece = this.resolve(name);
        this.delete(piece.name);
        return piece;
    }
    async *loadPath(root) {
        for await (const child of this.read(root)) {
            const data = this.strategy.filter(child);
            if (!data)
                continue;
            try {
                const hydrated = { root, ...data };
                for await (const module of this.strategy.load(this, hydrated)) {
                    yield this.construct(module, hydrated);
                }
            }
            catch (e) {
                throw e;
            }
        }
    }
    async *read(root) {
        try {
            const directory = await fs_1.promises.opendir(root);
            for await (const file of directory) {
                if (file.isFile())
                    yield (0, path_1.join)(directory.path, file.name);
                else if (file.isDirectory())
                    yield* this.read((0, path_1.join)(directory.path, file.name));
            }
        }
        catch (e) {
            throw e;
        }
    }
    resolve(resolve) {
        if (typeof resolve === 'string') {
            const resolved = this.get(resolve);
            if (typeof resolved === undefined)
                throw 'Resolve cannot be found.';
            return resolved;
        }
        if (resolve instanceof this.Constructor)
            return resolve;
        throw 'Resolve cannot be found.';
    }
    async insert(insert) {
        insert.onLoad();
        this.set(insert.name, insert);
        return insert;
    }
    construct(constructor, hydrated) {
        return new constructor({ registry: this, root: hydrated.root, path: hydrated.path, name: hydrated.name }, { name: hydrated.name, enabled: true });
    }
}
exports.Registry = Registry;
//# sourceMappingURL=Registry.js.map