import type { Client } from '../Client';
import { BaseManager } from './BaseManager';
export interface APIManagerOptions {
    base: string;
}
export interface RequestOptions {
    returnOk?: boolean;
    result?: boolean;
    lean?: boolean;
}
export type AxiosMethod = 'get' | 'post';
export declare class APIManager extends BaseManager<APIManagerOptions> {
    private protected_token?;
    [key: string]: any;
    constructor(client: Client);
    acknowledge(method: string): void;
    generate(method: string): string;
    request(URL: string, method: AxiosMethod, ...argumants: any[]): Promise<any>;
    serialize(object: any, output?: any): any;
    setToken(token: string): void;
    private get token();
}
//# sourceMappingURL=ApiManager.d.ts.map