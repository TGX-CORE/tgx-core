"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeManager = void 0;
const BaseClass_1 = require("../../Classes/BaseClass");
class MeManager extends BaseClass_1.BaseClass {
    constructor(client) {
        super(client);
        this.adminsitrator_rights = {};
    }
    async update() {
        this.name = (await this.client.api.getMyName(null, { lean: true, result: true }))?.name;
        this.description = (await this.client.api.getMyDescription(null, { lean: true, result: true }))?.description;
        this.short_description = (await this.client.api.getMyShortDescription(null, { lean: true, result: true }))?.short_description;
        this.adminsitrator_rights = {
            channels: await this.client.api.getMyDefaultAdministratorRights(null, { params: { for_channels: true, lean: true, result: true } }),
            default: await this.client.api.getMyDefaultAdministratorRights(null, { params: { lean: true, result: true } })
        };
        const result = await this.client.api.getMe(null, { lean: true, result: true });
        return result ? Boolean(this._patch(result)) : false;
    }
    async setName(name, language_code) {
        return Boolean(this.name = await this.client.api.setMyName(null, {
            params: { name, language_code },
            lean: true, result: true
        }) ?? undefined);
    }
    async setDescription(description, language_code) {
        return Boolean(this.description = await this.client.api.setMyDescription(null, {
            params: { description, language_code },
            lean: true, result: true
        }) ?? undefined);
    }
    async setShortDescription(short_description, language_code) {
        return Boolean(this.short_description = await this.client.api.setMyShortDescription(null, {
            params: { short_description, language_code },
            lean: true, result: true
        }) ?? undefined);
    }
    async setMenuButton(chat_id, menu_button) {
        return this.client.api.setChatMenuButton(null, {
            params: { chat_id, menu_button },
            returnOk: true
        });
    }
    async getBusinessConnection(business_connection_id) {
        return this.client.api.getBusinessConnection(null, {
            params: { business_connection_id },
            lean: true,
            result: true
        });
    }
    async getMenuButton(chat_id) {
        return this.client.api.getChatMenuButton(null, {
            params: { chat_id },
            lean: true,
            result: true
        });
    }
    async setMyDefaultAdministratorRights(rights, for_channels) {
        const result = await this.client.api.setMyDefaultAdministratorRights(null, {
            params: { rights: JSON.stringify(rights), for_channels },
            returnOk: true
        });
        return result ? !(!(this.adminsitrator_rights[for_channels ? 'default' : 'channels'] = result)) : false;
    }
}
exports.MeManager = MeManager;
//# sourceMappingURL=MeManager.js.map