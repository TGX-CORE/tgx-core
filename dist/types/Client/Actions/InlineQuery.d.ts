import type { User } from '../../Classes/User';
import type { Client } from '../Client';
import { InlineQuery } from '../../Classes/InlineQuery';
import { GenericCreator } from './GenericCreator';
export interface InlineQueryPacket {
    id: string;
    from: User;
    query: string;
    offset: string;
    chat_type?: string;
    location: any;
}
export declare class InlineQueryAction extends GenericCreator<InlineQuery, InlineQueryPacket> {
    static pointer: string;
    constructor(client: Client);
}
//# sourceMappingURL=InlineQuery.d.ts.map