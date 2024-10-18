import type { Client } from '../Client/Client'

import { BaseClass } from './BaseClass'
import { User } from './User'

export interface ChosenInlineResultPacket {
    result_id: string
    from: User
    location?: any
    inline_message_id?: string
    query?: string
}

export class ChosenInlineResult extends BaseClass<ChosenInlineResult, ChosenInlineResultPacket> implements ChosenInlineResultPacket {

    public declare from: User
    public declare result_id: string

    public constructor(client: Client, packet: ChosenInlineResult){
        super(client, packet)
    }

    public get user(): User {
        return new User(this.client, this.from)
    }

}