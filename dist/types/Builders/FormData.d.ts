import { Builder } from './Builder';
import FORMDATA from 'form-data';
export type FormAppendData = [string, string, FORMDATA.AppendOptions | string | undefined];
export declare class FormDataBuilder extends Builder {
    constructor(...append_datas: FormAppendData[]);
    /**
     * Append a file to the form.
     *
     * @param name The name the file will be attached as.
     * @param path Relative path to the file.
     * @param options Additional options or file name of the file.
     */
    append(name: string, path: string, options?: FORMDATA.AppendOptions | string): this;
}
//# sourceMappingURL=FormData.d.ts.map