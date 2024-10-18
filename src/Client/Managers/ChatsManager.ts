import type { Chat } from '../../Types/Message'
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
        var message = await this.client.api.getChat(null, {
            params: { chat_id },
            lean: true
        })
        return message.ok ?this._add(message.result, true, { id: message.result.id, extras: [false] }) : false
    }

}