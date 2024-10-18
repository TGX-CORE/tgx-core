import type { Client } from '../Client'

import { InlineQuery } from '../../Classes/InlineQuery'
import { GenericCreator } from './GenericCreator'
import { ClientEvent } from '../../Types/ClientEvent'

export class InlineQueryAction extends GenericCreator<InlineQuery, InlineQuery> {

    public static pointer: ClientEvent = ClientEvent.InlineQuery

    public constructor(client: Client){
        super(client, InlineQuery, InlineQueryAction.pointer)
    }

}