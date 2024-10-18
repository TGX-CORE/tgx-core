import type { ChatBoostUpdated } from '../../Types/Chatboost';
import type { Client } from '../Client';
import { ChatBoost } from '../../Classes/ChatBoost';
import { GenericCreator } from './GenericCreator';
import { ClientEvent } from '../../Types/ClientEvent';
export declare class ChatBoostAction extends GenericCreator<ChatBoost, ChatBoostUpdated> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
