import type { Client } from '../Client/Client'
import type { ChatPacket } from './BaseChat'

import { TopicsManager } from '../Client/Managers/TopicsManager'
import { BaseGroupChat } from './BaseGroupChat'
import { Routes } from '../Types/Routes'

export class SuperGroupChat extends BaseGroupChat {

    public topics: TopicsManager
    
    public constructor(client: Client, packet: ChatPacket){
        super(client, packet)

        this.topics = new TopicsManager(this)
    }

    public async setAdministratorCustomTitle(user_id: number, custom_title: string): Promise<boolean> {
        let { id: chat_id } = this
        return this.client.rest.post(Routes.SetChatAdministratorCustomTitle, { chat_id, user_id, custom_title }, { ok: true })
    }

}