import type { Client } from '../Client';
import { ShippingQuery } from '../../Classes/ShippingQuery';
import { ClientEvent } from '../../Types/ClientEvent';
import { GenericCreator } from './GenericCreator';
export declare class ShippingQueryAction extends GenericCreator<ShippingQuery, ShippingQuery> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
