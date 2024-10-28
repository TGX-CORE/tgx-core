import type { ChatBoost } from './ChatBoost'

import { UserProfilePhotos } from '../Types/Common'
import { Client } from '../Client/Client'
import { ChatBase } from './ChatBase'
import { Routes } from '../Types/Routes'

export interface UserPacket {
    id: number
    is_bot?: boolean
    username?: string
    first_name?: string
    last_name?: string
    language_code?: string
    is_premium?: boolean
    has_main_web_app?: boolean
    can_connect_to_business?: boolean
    added_to_attachment_menu?: boolean
    can_read_all_group_messages?: boolean
    supports_inline_queries?: boolean
}

export class User extends ChatBase<User, UserPacket> implements UserPacket {

    public declare id: number

    public language_code?: string
    public is_bot?: boolean

    constructor(client: Client, packet: UserPacket){
        super(client, packet)
    }

    public async boosts(chat_id: number): Promise<Array<ChatBoost>|boolean> {
        let { id: user_id } = this
        return this.client.rest.get(Routes.GetUserChatBoosts, { chat_id, user_id })
    }

    public async getProfilePhotos(offset?: number, limit?: number): Promise<UserProfilePhotos> {
        let { id: user_id } = this
        return this.client.rest.get(Routes.GetUserProfilePhotos, { user_id, offset, limit })
    }

}