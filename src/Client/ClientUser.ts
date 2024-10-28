import type { BusinessConnectionPacket } from '../Types/BusinessConnection'
import type { ChatAdministratorRights } from '../Types/ReplyMarkups'
import type { MenuButtonBuilder } from '../Builders/MenuButton'
import type { ChatMenuButton } from '../Types/Client'

import { Routes } from '../Types/Routes'
import { User } from '../Classes/User'

export class ClientUser extends User {

    [key: string]: any

    public name?: string
    public description?: string
    public short_description?: string

    public menu_button: {
       [key: number|string]: ChatMenuButton
    } = { }

    public adminsitrator_rights: {
        channels?: ChatAdministratorRights
        default?: ChatAdministratorRights
    } = {
        channels: { },
        default: { }
    }

    public async get(): Promise<ClientUser> {
        this.name = (await this.client.rest.get(Routes.GetMyName))?.name
        this.description = (await this.client.rest.get(Routes.GetMyDescription))?.description
        this.short_description = (await this.client.rest.get(Routes.GetMyShortDescription))?.short_description

        this.menu_button['undefined'] = (await this.getChatMenuButton())

        this.adminsitrator_rights = { 
            channels: await this.client.rest.get(Routes.GetMyDefaultAdministratorRights, { for_channels: true }),
            default: await this.client.rest.get(Routes.GetMyDefaultAdministratorRights)
        }
        
        this._patch(await this.client.rest.get(Routes.GetMe) ?? { })
        return this
    }

    public async setName(name: string, language_code?: string): Promise<boolean> {
        return this.update(Routes.SetMyName, 'name', { name, language_code })
    }

    public async setDescription(description: string, language_code?: string): Promise<boolean> {
        return this.update(Routes.SetMyDescription, 'description', { description, language_code })
    }

    public async setShortDescription(short_description: string, language_code?: string): Promise<boolean> {
        return this.update(Routes.SetMyShortDescription, 'short_description', { short_description, language_code })
    }

    public async setDefaultAdministratorRights(rights: ChatAdministratorRights, for_channels?: boolean): Promise<boolean> {
        return (this.adminsitrator_rights[for_channels?'default':'channels'] = await this.client.rest.post(Routes.SetMyDefaultAdministratorRights, { rights: JSON.stringify(rights), for_channels }, { ok: true }) ?
                rights
            :   this.adminsitrator_rights[for_channels?'default':'channels']) === rights
    }

    public async setMenuButton(menu_button?: MenuButtonBuilder|string, chat_id?: number): Promise<boolean> {
        return (this.menu_button[chat_id ?? 'undefined'] = await this.client.rest.post(Routes.SetChatMenuButton, { menu_button, chat_id }, { ok: true }) ?
                JSON.parse(menu_button as string)
            :   this.menu_button[chat_id ?? 'undefined']) === menu_button
    }

    public async getBusinessConnection(business_connection_id: string): Promise<BusinessConnectionPacket> {
        return this.client.rest.get(Routes.GetBusinessConnection, { business_connection_id })
    }

    public async getChatMenuButton(chat_id?: number, force?: boolean): Promise<ChatMenuButton> {
        if(this.menu_button[chat_id ?? 'undefined'] && !force) return this.menu_button[chat_id ?? 'undefined']
        return this.menu_button[chat_id ?? 'undefined'] = await this.client.rest.get(Routes.GetChatMenuButton, { chat_id })
    }

    private async update(method: Routes, name: string, params: any): Promise<boolean> {
        return (this[name] = await this.client.rest.post(method, params, { ok: true }) ?
                params[name]
            :   this[name]) === params[name]
    }

}