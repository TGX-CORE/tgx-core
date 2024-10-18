import { createReadStream, type ReadStream } from 'fs'
import { Builder } from './Builder'
import { join } from 'path'

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

export class FormDataBuilder extends Builder {

    public constructor(...append_datas: FormAppendData[]){
        super({ value: new FORMDATA(), returnValue: true })

        for(let [name, path, options] of append_datas){
            this.append(name, path, options)
        }  
    }

    /**
     * Append a file to the form.
     * 
     * @param name The name the file will be attached as.
     * @param path Absolute path to the file or a readstream.
     * @param options Additional options or the name of the file.
     */
    public append(name: string, path: string|ReadStream, options?: FORMDATA.AppendOptions|string) {
        this.value.append(name, typeof path === 'string' ? createReadStream(path) : path, options)
        return this
    }

    /**
     * @hidden
     */

    public _append(...any: any){
        this.value.append(...any)
    }

}