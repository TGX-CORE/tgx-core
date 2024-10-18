import { Base } from '../../Classes/Base';
import { type Client } from '../Client';
export declare abstract class BaseManager<OptionType = any> extends Base {
    client: Client;
    options: OptionType;
    default?: OptionType;
    constructor(client: Client, pointer?: string, defaults?: OptionType);
}
//# sourceMappingURL=BaseManager.d.ts.map