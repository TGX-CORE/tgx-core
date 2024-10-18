import type { ChatBoostUpdated } from '../../Types/Chatboost'
import type { Client } from '../Client'

import { ChatBoost } from '../../Classes/ChatBoost'
import { GenericCreator } from './GenericCreator'
import { ClientEvent } from '../../Types/ClientEvent'

export class ChatBoostAction extends GenericCreator<ChatBoost, ChatBoostUpdated> {

    public static pointer: ClientEvent = ClientEvent.ChatBoost

    public constructor(client: Client){
        super(client, ChatBoost, ChatBoostAction.pointer)
    }

}