import type { Client } from '../Client'

import { CallbackQuery, CallbackQueryPacket } from '../../Classes/CallbackQuery'
import { GenericCreator } from './GenericCreator'
import { ClientEvent } from '../../Types/ClientEvent'

export class CallbackQueryAction extends GenericCreator<CallbackQuery, CallbackQueryPacket> {

    public static pointer: ClientEvent = ClientEvent.CallbackQuery

    public constructor(client: Client){
        super(client, CallbackQuery, CallbackQueryAction.pointer)
    }
    
}