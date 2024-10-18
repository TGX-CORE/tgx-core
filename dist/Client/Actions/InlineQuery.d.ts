import type { Client } from '../Client';
import { InlineQuery } from '../../Classes/InlineQuery';
import { GenericCreator } from './GenericCreator';
import { ClientEvent } from '../../Types/ClientEvent';
export declare class InlineQueryAction extends GenericCreator<InlineQuery, InlineQuery> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
