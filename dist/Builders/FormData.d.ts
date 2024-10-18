import { type ReadStream } from 'fs';
import { Builder } from './Builder';
import FORMDATA from 'form-data';
/**
 * An array representing a data to append to a form;
 *
 * ```js
 * [ id, path, options ]
 *
 * id: The name the file will be attached as,
 * path: The absolute path of the file,
 * options: Additional options for the FormData
 * ```
 */
export type FormAppendData = [string, string, FORMDATA.AppendOptions | string | undefined];
export declare class FormDataBuilder extends Builder {
    constructor(...append_datas: FormAppendData[]);
    /**
     * Append a file to the form.
     *
     * @param name The name the file will be attached as.
     * @param path Absolute path to the file or a readstream.
     * @param options Additional options or the name of the file.
     */
    append(name: string, path: string | ReadStream, options?: FORMDATA.AppendOptions | string): this;
    /**
     * @hidden
     */
    _append(...any: any): void;
}
