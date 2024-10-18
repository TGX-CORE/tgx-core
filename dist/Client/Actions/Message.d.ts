import type { MessagePacket } from '../../Client/Managers/MessagesManager';
import type { Message } from '../../Classes/Message';
import type { Client } from '../Client';
import { GenericAction } from './Generic';
export declare class MessageAction extends GenericAction {
    [key: string]: any;
    constructor(client: Client);
    handle(_packet: MessagePacket, parse?: boolean): Message | void;
}
