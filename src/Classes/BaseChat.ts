import type { ChatHold } from '../Client/Managers/ChatsManager'
import type { Client } from '../Client/Client'
import type { Chat } from '../Types/Message'

import { MessagesManager } from '../Client/Managers/MessagesManager'
import { Routes } from '../Types/Routes'
import { ChatBase } from './ChatBase'

export interface ChatPhoto {
    small_file_id: string
    small_file_unique_id: string
    big_file_id: string
    big_file_unique_id: string
}

export interface ChatPacket {
    type: keyof typeof ChatHold
    id: number
    is_forum?: boolean
    user_name?: string
    first_name?: string
    last_name?: string
}

export abstract class BaseChat extends ChatBase<BaseChat, ChatPacket> implements ChatPacket {

    public declare id: number
    public declare type: keyof typeof ChatHold
    
    public last_message_id?: number = 0
    public photo?: ChatPhoto
    
    public messages: MessagesManager
    
    [key: string]: any
    
    public constructor(client: Client, packet: ChatPacket){
        super(client, packet)
        
        this.messages = new MessagesManager(this)
    }

    public async leave(): Promise<boolean> {
        return this.client.rest.post(Routes.LeaveChat, { chat_id: this.id }, { ok: true })
    }

    public async fetch(): Promise<Chat|boolean> {
        return this.client.chats.fetch(this.id)
    } 

    public get partial(): boolean {
        return !this.photo
    }

}