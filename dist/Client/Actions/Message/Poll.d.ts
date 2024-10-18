import type { MessagePacket } from '../../Managers/MessagesManager';
import type { PollPacket } from '../../../Classes/Poll';
import type { Client } from '../../Client';
import { GenericAction } from '../Generic';
import { Poll } from '../../../Classes/Poll';
import { ClientEvent } from '../../../Types/Client';
export declare class PollAction extends GenericAction {
    static pointer: ClientEvent;
    constructor(client: Client);
    handleMessage(packet: MessagePacket): Poll | void;
    handle(packet: PollPacket, force?: boolean, parse?: boolean): Poll | void;
}
