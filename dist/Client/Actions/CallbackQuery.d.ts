import type { Client } from '../Client';
import { CallbackQuery, CallbackQueryPacket } from '../../Classes/CallbackQuery';
import { GenericCreator } from './GenericCreator';
import { ClientEvent } from '../../Types/ClientEvent';
export declare class CallbackQueryAction extends GenericCreator<CallbackQuery, CallbackQueryPacket> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
