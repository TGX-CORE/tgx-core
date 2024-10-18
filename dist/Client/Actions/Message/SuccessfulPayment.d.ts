import { SuccessfulPayment, type SerializedSuccessfulPayment } from '../../../Classes/SuccessfulPayment';
import type { Client } from '../../../Client/Client';
import { ClientEvent } from '../../../Types/ClientEvent';
import { GenericCreator } from '../GenericCreator';
import { Message } from '../../../Classes/Message';
export declare class SuccessfulPaymenAction extends GenericCreator<SuccessfulPayment, SerializedSuccessfulPayment> {
    static pointer: ClientEvent;
    constructor(client: Client);
    handleMessage(_packet: Message): any;
}
