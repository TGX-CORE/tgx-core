import type { Client } from '../Client';
import { Base } from '../../Classes/Base';
export declare abstract class BaseManager<OptionType = any> extends Base {
    readonly client: Client;
    readonly options: OptionType;
    readonly default?: OptionType;
    constructor(client: Client, pointer?: string, defaults?: OptionType);
}
