import type { ChatBoostRemoved } from '../../Types/Chatboost'
import type { Client } from '../Client'

import { ChatBoost } from '../../Classes/ChatBoost'
import { GenericCreator } from './GenericCreator'
import { ClientEvent } from '../../Types/ClientEvent'

export class ChatBoostRemovedAction extends GenericCreator<ChatBoost, ChatBoostRemoved> {

    public static pointer: ClientEvent = ClientEvent.RemovedChatBoost

    public constructor(client: Client){
        super(client, ChatBoost, ChatBoostRemovedAction.pointer)
    }

}