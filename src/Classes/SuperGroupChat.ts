import type { Client } from '../Client/Client'
import type { ChatPacket } from './BaseChat'

import { TopicsManager } from '../Client/Managers/TopicsManager'
import { BaseGroupChat } from './BaseGroupChat'

export class SuperGroupChat extends BaseGroupChat {

    public topics: TopicsManager
    
    public constructor(client: Client, packet: ChatPacket){
        super(client, packet)

        this.topics = new TopicsManager(this)
    }

    public async setAdministratorCustomTitle(user_id: number, custom_title: string): Promise<boolean> {
        return this.client.api.setChatAdministratorCustomTitle(null, {
            params: { chat_id: this.id, user_id, custom_title },
            returnOk: true
        })
    }

}