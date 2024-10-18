import type { Client } from '../Client';
import { CallbackQuery, CallbackQueryPacket } from '../../Classes/CallbackQuery';
import { GenericCreator } from './GenericCreator';
export declare class CallbackQueryAction extends GenericCreator<CallbackQuery, CallbackQueryPacket> {
    static pointer: string;
    constructor(client: Client);
}
//# sourceMappingURL=CallbackQuery.d.ts.map