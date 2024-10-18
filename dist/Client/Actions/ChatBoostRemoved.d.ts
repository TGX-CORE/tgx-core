import type { ChatBoostRemoved } from '../../Types/Chatboost';
import type { Client } from '../Client';
import { ChatBoost } from '../../Classes/ChatBoost';
import { GenericCreator } from './GenericCreator';
import { ClientEvent } from '../../Types/ClientEvent';
export declare class ChatBoostRemovedAction extends GenericCreator<ChatBoost, ChatBoostRemoved> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
