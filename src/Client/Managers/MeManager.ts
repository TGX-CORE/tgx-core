import type { BusinessConnectionPacket } from '../../Types/BusinessConnection'
import type { ChatAdministratorRights } from '../../Types/ReplyMarkups'
import type { ChatMenuButton } from '../../Types/MenuButton'
import type { User } from '../../Classes/User'
import type { Client } from '../Client'

import { BaseClass } from '../../Classes/BaseClass'

export class MeManager extends BaseClass<MeManager, User> {

    public id?: number
    public is_bot?: boolean;
    public first_name?: string;
    public last_name?: string;
    public username?: string;
    public language_code?: string;
    public is_premium?: boolean;
    public added_to_attachment_menu?: boolean;
    public can_join_groups?: boolean;
    public can_read_all_group_messages?: boolean;
    public supports_inline_queries?: boolean;
    public can_connect_to_business?: boolean;
    public has_main_web_app?: boolean;

    public name?: string

    public description?: string

    public short_description?: string

    public adminsitrator_rights: {
        channels?: ChatAdministratorRights
        default?: ChatAdministratorRights
    } = { }

    public constructor(client: Client){
        super(client)
    }

    public async update(): Promise<boolean> {

        this.name = (await this.client.api.getMyName(null, { lean: true, result: true }))?.name

        this.description = (await this.client.api.getMyDescription(null, { lean: true, result: true }))?.description

        this.short_description = (await this.client.api.getMyShortDescription(null, { lean: true, result: true }))?.short_description

        this.adminsitrator_rights = {
            channels: await this.client.api.getMyDefaultAdministratorRights(null, { params: { for_channels: true, lean: true, result: true }}),
            default: await this.client.api.getMyDefaultAdministratorRights(null, { params: { lean: true, result: true }})
        }

        const result = await this.client.api.getMe(null, { lean: true, result: true })
        
        return result ? Boolean(this._patch(result)) : false
    }

    public async setName(name: string, language_code?: string): Promise<boolean> {
        return Boolean(this.name = await this.client.api.setMyName(null, {
            params: { name, language_code },
            lean: true, result: true
        }) ?? undefined)
    }

    public async setDescription(description: string, language_code?: string): Promise<boolean> {
        return Boolean(this.description = await this.client.api.setMyDescription(null, {
            params: { description, language_code },
            lean: true, result: true
        }) ?? undefined)
    }

    public async setShortDescription(short_description: string, language_code?: string): Promise<boolean> {
        return Boolean(this.short_description = await this.client.api.setMyShortDescription(null, {
            params: { short_description, language_code },
            lean: true, result: true
        }) ?? undefined)
    }

    public async setMenuButton(chat_id?: number, menu_button?: ChatMenuButton): Promise<boolean> {
        return this.client.api.setChatMenuButton(null, {
            params: { chat_id, menu_button },
            returnOk: true
        })
    }

    public async getBusinessConnection(business_connection_id: string): Promise<BusinessConnectionPacket> {
        return this.client.api.getBusinessConnection(null, {
            params: { business_connection_id },
            lean: true,
            result: true
        })
    }

    public async getMenuButton(chat_id?: number): Promise<ChatMenuButton> {
        return this.client.api.getChatMenuButton(null, {
            params: { chat_id },
            lean: true,
            result: true
        })
    }

    public async setMyDefaultAdministratorRights(rights: ChatAdministratorRights, for_channels: boolean): Promise<boolean> {
        const result = await this.client.api.setMyDefaultAdministratorRights(null, {
          params: { rights: JSON.stringify(rights), for_channels },
          returnOk: true
        })
    
        return result ? !(!(this.adminsitrator_rights[for_channels ? 'default':'channels'] = result)) : false
    }

}