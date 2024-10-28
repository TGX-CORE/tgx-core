import type { Chat } from '../../Types/Message'
import { Routes } from '../../Types/Routes'
import type { Client } from '../Client'

import { CachedManager } from './CachedManager'

const { ChannelChat } = require('../../Classes/ChannelChat')
const { PrivateChat } = require('../../Classes/PrivateChat')
const { GroupChat } = require('../../Classes/GroupChat')
const { SuperGroupChat } = require('../../Classes/SuperGroupChat')

export enum ChatHold {
    channel = ChannelChat,
    private = PrivateChat,
    group = GroupChat,
    supergroup = SuperGroupChat
}

export class ChatsManager extends CachedManager<number, Chat> {

    public constructor(client: Client){
        super(client)
    }

    public override _add(packet: any, cache?: boolean, { id, extras, force, holds }: any = { }) {
        return super._add(packet, cache, { id, extras, force, holds: ChatHold[packet.type as keyof typeof ChatHold] ?? holds })
    }

    public async fetch(chat_id: number): Promise<Chat|boolean> {
        let response = await this.client.rest.get(Routes.GetChat, { chat_id }, { data: true })
        return response.ok ? this._add(response.result, true, { id: response.result.id, extras: [false] }): false
    }

}