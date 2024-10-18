import type { MessagePacket } from '../../Managers/MessagesManager';
import type { PollPacket } from '../../../Classes/Poll';
import type { Client } from '../../Client';
import { GenericAction } from '../Generic';
import { Poll } from '../../../Classes/Poll';
export declare class PollAction extends GenericAction {
    static pointer: string;
    constructor(client: Client);
    handleMessage(packet: MessagePacket): Poll | void;
    handle(packet: PollPacket, force?: boolean, parse?: boolean): Poll | void;
}
//# sourceMappingURL=Poll.d.ts.map