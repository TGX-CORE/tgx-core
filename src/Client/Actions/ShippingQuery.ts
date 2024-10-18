import type { Client } from '../Client'

import { ShippingQuery } from '../../Classes/ShippingQuery'
import { ClientEvent } from '../../Types/ClientEvent'
import { GenericCreator } from './GenericCreator'

export class ShippingQueryAction extends GenericCreator<ShippingQuery, ShippingQuery> {

    public static pointer: ClientEvent = ClientEvent.ShippingQuery

    public constructor(client: Client){
        super(client, ShippingQuery, ShippingQueryAction.pointer)
    }

}