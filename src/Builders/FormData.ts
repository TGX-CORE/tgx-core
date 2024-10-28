import { createReadStream, type ReadStream } from 'fs'
import { Builder } from './Builder'

import { File } from '../Classes/File'
import FORMDATA from 'form-data'

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
export type FormAppendData = [string, string, FORMDATA.AppendOptions|string|undefined]

/**
 * FormData as a builder for sending files.
 */
export class FormDataBuilder extends Builder {

    /**
     * @param append_datas An array of FormAppendData to append to the form.
     */
    public constructor(...append_datas: FormAppendData[]){
        super({ value: new FORMDATA(), returnValue: true })

        for(let [name, path, options] of append_datas){
            this.append(name, path, options)
        }  
    }

    /**
     * Append a file to the form.
     * 
     * @param file The class File with an attached file to append to the form..
     */
    public append(file: File): this

    /**
     * Append a file to the form with a name, path or a read stream, and append options.
     * 
     * @param name The name the file will be attached as.
     * @param path Absolute path to the file or a ReadStream.
     * @param options Additional options or the name of the file.
     */
    public append(name: string, path: string|ReadStream, options?: FORMDATA.AppendOptions|string): this
    public append(input: string|File, path?: string|ReadStream, options?: FORMDATA.AppendOptions|string): this {
        if (input instanceof File) {
            this.value.append(...input.form)
        } else {
            this.value.append(input, typeof path === 'string' ? createReadStream(path) : path, options);
        } return this
    }

}