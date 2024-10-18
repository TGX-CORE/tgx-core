"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGroupChat = void 0;
const ChatInviteLinksManager_1 = require("../Client/Managers/ChatInviteLinksManager");
const ChatRequestsManager_1 = require("../Client/Managers/ChatRequestsManager");
const MembersManager_1 = require("../Client/Managers/MembersManager");
const BaseChat_1 = require("./BaseChat");
class BaseGroupChat extends BaseChat_1.BaseChat {
    constructor(client, packet) {
        super(client, packet);
        this.members = new MembersManager_1.MembersManager(this);
        this.invites = new ChatInviteLinksManager_1.ChatInviteLinksManager(this);
        this.requests = new ChatRequestsManager_1.ChatRequestsManager(this);
    }
    async setPhoto(photo, form) {
        return this.client.api.setChatPhoto(form, {
            params: { photo },
            headers: { 'Content-Type': form ? 'multipart/form-data' : 'application/json' },
            returnOk: true
        });
    }
    async deletePhoto() {
        return this.client.api.deleteChatPhoto(null, {
            params: { chat_id: this.id },
            returnOk: true
        });
    }
    async administrators() {
        const result = await this.client.api.getChatAdministrators(null, {
            params: { chat_id: this.id },
            lean: true,
            result: true
        });
        if (result) {
            return result.map((packet) => {
                return this.members._add(packet, true);
            });
        }
        else
            return result;
    }
}
exports.BaseGroupChat = BaseGroupChat;
//# sourceMappingURL=BaseGroupChat.js.map