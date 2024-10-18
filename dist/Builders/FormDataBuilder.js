"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataBuilder = void 0;
exports.FormData = FormData;
const tslib_1 = require("tslib");
const Builder_1 = require("./Builder");
const fs_1 = require("fs");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
function FormData(name, path, options) {
    return [name, (0, fs_1.createReadStream)(path), options];
}
class FormDataBuilder extends Builder_1.Builder {
    constructor(...form_datas) {
        const form = new form_data_1.default();
        for (const [name, stream, options] of form_datas) {
            form.append(name, stream, options);
        }
        super({ value: form });
    }
}
exports.FormDataBuilder = FormDataBuilder;
//# sourceMappingURL=FormDataBuilder.js.map