import type { ForumType } from '../Client/Actions/Message/ForumTopicCreated'

import { SuperGroupChat } from './SuperGroupChat'
import { Client } from '../Client/Client'
import { ChatBase } from './ChatBase'

export interface SerializedForumTopicPacket extends Partial<ForumTopicPacket> {
    message_thread_id: number
    type: ForumType
}

export interface ForumTopicPacket {
    message_thread_id: number
    name: string
    icon_color: number
    icon_custom_emoji_id: string
}

export class ForumTopic extends ChatBase<ForumTopic, SerializedForumTopicPacket> implements SerializedForumTopicPacket {

    public declare message_thread_id: number
    public declare icon_custom_emoji_id: string
    public declare icon_color: number
    public declare name: string

    public declare type: ForumType

    public constructor(client: Client, packet: SerializedForumTopicPacket){
        super(client, packet)
    }

    public async edit(name?: string, icon_custom_emoji_id?: string): Promise<boolean> {
        return this.chat.topics.edit(this.id, name, icon_custom_emoji_id)
    }

    public close(): Promise<boolean> {
        return this.chat.topics.close(this.id)
    }

    public reopen(): Promise<boolean> {
        return this.chat.topics.reopen(this.id)
    }

    public delete(): Promise<boolean> {
        return this.chat.topics.delete(this.id)
    }

    public unpinAll(): Promise<boolean> {
        return this.chat.topics.unpinAll(this.id)
    }

    public get chat(): SuperGroupChat {
        return this.client.chats.cache.get(this._chat as number)! as SuperGroupChat
    }

    public get id(): number {
        return this.message_thread_id
    }
    
}