import { Builder } from './Builder';
import { type ReadStream } from 'fs';
import FORMDATA from 'form-data';
export declare function FormData(name: string, path: string, options?: FORMDATA.AppendOptions | string): (string | FORMDATA.AppendOptions | ReadStream | undefined)[];
export declare class FormDataBuilder extends Builder {
    constructor(...form_datas: [string, ReadStream, FORMDATA.AppendOptions | string][]);
}
//# sourceMappingURL=FormDataBuilder.d.ts.map