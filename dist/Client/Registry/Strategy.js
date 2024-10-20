"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = void 0;
const shared_1 = require("../../Internals/shared");
const path_1 = require("path");
class Strategy {
    constructor() {
        //'.cjs', '.mjs'
        this.supportedExtensions = ['.js'];
        this.filterDtsFiles = false;
        if (Reflect.has(process, Symbol.for('ts-node.register.instance')) || process.env.TS_NODE_DEV !== null) {
            this.supportedExtensions.push('.ts', '.cts', '.mts');
            this.filterDtsFiles = true;
        }
    }
    filter(path) {
        const extension = (0, path_1.extname)(path);
        if (!this.supportedExtensions.includes(extension))
            return null;
        if (this.filterDtsFiles && path.endsWith('.d.ts'))
            return null;
        const name = (0, path_1.basename)(path);
        if (name === '' || name.startsWith('.'))
            return null;
        return { extension, path, name };
    }
    async preload(file) {
        const typescript = ['.js', '.ts'].includes(file.extension);
        if (!typescript)
            return null;
        const module = require(file.path);
        delete require.cache[require.resolve(file.path)];
        return module;
    }
    async *load(registry, file) {
        let module = await this.preload(file), yielded = false;
        if ((0, shared_1.isClass)(module) && (0, shared_1.classExtends)(module, registry.Constructor)) {
            yield module;
            yielded = true;
        }
        for (const exported of Object.values(module)) {
            if ((0, shared_1.isClass)(exported) && (0, shared_1.classExtends)(exported, registry.Constructor)) {
                yield exported;
                yielded = true;
            }
        }
        if (!yielded) {
            throw 'Missing exports!';
        }
    }
}
exports.Strategy = Strategy;
//# sourceMappingURL=Strategy.js.map