import type { ChatBoostPacket, ChatBoostRemoved, ChatBoostSource, ChatBoostUpdated } from '../Types/Chatboost';
import type { Client } from '../Client/Client';
import type { Chat } from '../Types/Message';
import { BaseClass } from './BaseClass';
import { User } from './User';
export declare class ChatBoost extends BaseClass<ChatBoost, ChatBoostUpdated | ChatBoostRemoved> implements Partial<ChatBoostUpdated>, Partial<ChatBoostRemoved> {
    private _source;
    private _chat;
    source?: ChatBoostSource;
    boost?: ChatBoostPacket;
    remove_date?: number;
    constructor(client: Client, packet: ChatBoostUpdated | ChatBoostRemoved);
    get removed(): boolean;
    get chat(): Chat;
    get user(): User;
}
