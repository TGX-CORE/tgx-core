import { InlineQueryChosenResult, InlineQueryChosenResultPacket } from '../../Classes/InlineQueryChosenResult';
import { GenericCreator } from './GenericCreator';
import { Client } from '../Client';
export declare class ChosenInlineQueryAction extends GenericCreator<InlineQueryChosenResult, InlineQueryChosenResultPacket> {
    static pointer: string;
    constructor(client: Client);
}
//# sourceMappingURL=ChosenInlineQuery.d.ts.map