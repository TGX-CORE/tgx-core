import type { Client } from '../Client';
import { PreCheckoutQuery } from '../../Classes/PreCheckoutQuery';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericCreator } from './GenericCreator';
export declare class PreCheckoutQueryAction extends GenericCreator<PreCheckoutQuery, PreCheckoutQuery> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
