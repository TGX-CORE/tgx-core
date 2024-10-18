import type { Client } from '../Client'

import { PreCheckoutQuery } from '../../Classes/PreCheckoutQuery'
import { ClientEvent } from '../../Types/ClientEvent'
import { GenericCreator } from './GenericCreator'

export class PreCheckoutQueryAction extends GenericCreator<PreCheckoutQuery, PreCheckoutQuery> {

    public static pointer: ClientEvent = ClientEvent.PreCheckoutQuery

    public constructor(client: Client){
        super(client, PreCheckoutQuery, PreCheckoutQueryAction.pointer)
    }
    
}