import type { SuperGroupChat } from './SuperGroupChat'
import type { PrivateChat } from './PrivateChat'
import type { ChannelChat } from './ChannelChat'
import type { Client } from '../Client/Client'
import type { GroupChat } from './GroupChat'
import type { User, UserPacket } from './User'
import type { Poll } from './Poll'

import { ChatPacket } from './BaseChat'
import { BaseClass } from './BaseClass'

export interface PollAnswerPacket {
    option_ids: number[]
    poll_id: string
    voter_chat?: ChatPacket
    user?: UserPacket
}

export class PollAnswer extends BaseClass<PollAnswer, PollAnswerPacket> implements PollAnswerPacket {

    public declare poll_id: string
    public declare option_ids: number[]

    private _voter_chat?: number
    private _from?: number

    public constructor(client: Client, packet: PollAnswerPacket){
        super(client, packet)
    }

    public get poll(): Poll {
        return this.client.polls.cache.get(this.poll_id)!
    }

    public get id(): number {
        return this._voter_chat ?? this._from!
    }

    public get user(): User|undefined {
        return this._from ? this.client.users.cache.get(this._from) : undefined
    }

    public get voter_chat(): PrivateChat|ChannelChat|GroupChat|SuperGroupChat|undefined {
        return this._voter_chat ? this.client.chats.cache.get(this._voter_chat) : undefined
    }

}