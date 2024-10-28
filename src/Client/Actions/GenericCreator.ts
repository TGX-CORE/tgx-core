import { ClientEvent } from '../../Types/ClientEvent';
import { Client } from '../Client';
import { GenericAction } from './Generic'

export type Constructable<T, P, E extends any[] = []> = new (client: Client, packet: P, extras?: E) => T
export class GenericCreator<H, P, E extends any[] = []> extends GenericAction {

    public hold: Constructable<H, P, E>
    public pointer: ClientEvent

    public constructor(client: Client, hold: Constructable<H, P, E>, pointer: ClientEvent) {
        super(client)

        this.hold = hold
        this.pointer = pointer
    }

    public override handle(_packet: P, prepack: boolean = true): any {
        let packet: any[]|any = prepack ? this.prepack(_packet) : _packet

        const constructed = new this.hold(this.client, Array.isArray(packet) ? packet[1] : packet)
        return this.emit(this.pointer, constructed)
    }

}