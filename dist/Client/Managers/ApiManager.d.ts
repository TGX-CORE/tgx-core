import type { Client } from '../Client';
import { BaseManager } from './BaseManager';
export interface APIManagerOptions {
    base?: string;
    files?: string;
}
export interface RequestOptions {
    returnOk?: boolean;
    result?: boolean;
    lean?: boolean;
}
export type AxiosMethod = 'get' | 'post' | 'delete';
export declare class APIManager extends BaseManager<APIManagerOptions> {
    private axios;
    private _token?;
    [key: string]: any;
    constructor(client: Client);
    private acknowledge;
    private generate;
    request(URL: string, method: AxiosMethod, ...argumants: any[]): Promise<any>;
    setToken(token: string): void;
    get token(): string;
}
