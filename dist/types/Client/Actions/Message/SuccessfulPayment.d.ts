import type { MessagePacket } from '../../../Client/Managers/MessagesManager';
import type { Client } from '../../../Client/Client';
import { SuccessfulPayment } from 'src/Classes/SuccessfulPayment';
import { GenericCreator } from '../GenericCreator';
export declare class SuccessfulPaymenAction extends GenericCreator<SuccessfulPayment, SuccessfulPayment> {
    static pointer: string;
    constructor(client: Client);
    handleMessage(packet: MessagePacket): Promise<SuccessfulPayment>;
}
//# sourceMappingURL=SuccessfulPayment.d.ts.map