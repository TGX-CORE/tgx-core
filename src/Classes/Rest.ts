import type { AxiosResponse, AxiosInstance } from 'axios'

import { FormDataBuilder } from '../Builders/FormData'
import { Builder } from '../Builders/Builder'
import { nest } from '../Internals/shared'
import { Routes } from '../Types/Routes'
import { File } from './File'

import axios from 'axios'
import https from 'node:https'
import http from 'node:http'

export interface RestOptions {
    token?: string
    base?: string
    files?: string
    timeout?: number
    onReject?: (error: any) => any
}

export interface RestRequestOptions {
    responseType?: 'arraybuffer'|'document'|'json'|'text'|'stream'
    method?: RequestMethod
    form?: FormDataBuilder
    headers?: any
    url?: string
    ok?: boolean
    file?: boolean
    data?: boolean
}

export enum RequestMethod {
    Delete = 'delete',
    Post = 'post',
    Get = 'get'
}

export class Rest {

    private _token?: string

    private axios: AxiosInstance

    public base: string = 'https://api.telegram.org'
    public files: string = 'https://api.telegram.org/file'

    public timeout: number = 10_000

    public onReject?: (error: any) => any

    public constructor(options: RestOptions = { }){

        this._token = options.token ?? process.env['TELEGRAM_TOKEN']

        if(options.base){
            this.base = options.base
        }

        if(options.files){
            this.files = options.files
        }

        if(options.timeout){
            this.timeout = options.timeout
        }

        this.axios = axios.create({
            httpsAgent: new https.Agent({
                keepAlive: true,
                timeout: this.timeout,
                scheduling: 'fifo'
            }),
            httpAgent: new http.Agent({
                keepAlive: true,
                timeout: this.timeout,
                scheduling: 'fifo'
            })
        })

    }

    public setToken(token: string){
        this._token = token
        return this
    }

    private get token(){
        return `bot${this._token}`
    }

    /**
     * @param file_id The id of the file to fetch.
     * @param file Wether to return the class File or an object.
     */
    public async fetchFile(file_id: string, file: boolean = true): Promise<File|false> {
        let response
        if(response = await this.get(Routes.GetFile, { file_id })){
           return file ? new File(response).setToken(this._token!) : response
        }
        return false
    }

    public generate(route: Routes|string, file?: boolean): string {
        return `${file ? this.files : this.base}/${this.token}${route}`
    }

    public serialize(object: any, form?: FormDataBuilder): [any, FormDataBuilder|undefined]{
        if(!object) object = { }
        nest(object, { array: true, merge: true }, (type, key, value) => {
            if(value instanceof Builder){
                return value.parse()
            } else if(value instanceof File){
                form ??= new FormDataBuilder()
                form.append(...value.form)
                return value.parse()
            }
            return value
        })
        return [object, form]
    }

    public async get(route: Routes, params?: any, options?: RestRequestOptions){
        return this.request(route, params, { ...options, method: RequestMethod.Get })
        .catch(this.onReject ?? this.handleCatch)
    }

    public async post(route: Routes, params?: any, options?: RestRequestOptions){
        return this.request(route, params, { ...options, method: RequestMethod.Post })
        .catch(this.onReject ?? this.handleCatch)
    }

    public async request(route: Routes|string, params: any = { }, options: RestRequestOptions = { }): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let [serialized, form]: [any, FormDataBuilder|undefined] = this.serialize(params, params?.form)
            let { 
                method = RequestMethod.Post,
                headers = form ? form?.value.getHeaders() : { 'content-type': 'application/json' },
                ok, data, responseType, url, file
            } = options

            this.axios({
                url: url ?? this.generate(route, file),
                responseType, method, headers,
                params: form ? serialized : null,
                data: form?.parse() ?? serialized,
            })
            .then((response: AxiosResponse) => {
                if(ok) resolve(response.data.ok)
                if(data) resolve(response.data)
                resolve(response.data.result)
            })
            .catch(reject)
        })
    }

    private handleCatch(error: any){
        console.log(
            `[REST] An interal error was encountered.`, `\n`,
            `(${(error.response?.data?.error_code ?? error.code ?? 'unknown')}) ${error.response?.data?.description ?? error.cause ?? 'No descrption was provided.'}`
        )
        return false
    }

    public get ready(){
        return !!this._token
    }

}