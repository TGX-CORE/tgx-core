"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataBuilder = void 0;
const fs_1 = require("fs");
const Builder_1 = require("./Builder");
const form_data_1 = __importDefault(require("form-data"));
class FormDataBuilder extends Builder_1.Builder {
    constructor(...append_datas) {
        super({ value: new form_data_1.default(), returnValue: true });
        for (let [name, path, options] of append_datas) {
            this.append(name, path, options);
        }
    }
    /**
     * Append a file to the form.
     *
     * @param name The name the file will be attached as.
     * @param path Absolute path to the file or a readstream.
     * @param options Additional options or the name of the file.
     */
    append(name, path, options) {
        this.value.append(name, typeof path === 'string' ? (0, fs_1.createReadStream)(path) : path, options);
        return this;
    }
    /**
     * @hidden
     */
    _append(...any) {
        this.value.append(...any);
    }
}
exports.FormDataBuilder = FormDataBuilder;
//# sourceMappingURL=FormData.js.map