"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperGroupChat = void 0;
const TopicsManager_1 = require("../Client/Managers/TopicsManager");
const BaseGroupChat_1 = require("./BaseGroupChat");
class SuperGroupChat extends BaseGroupChat_1.BaseGroupChat {
    constructor(client, packet) {
        super(client, packet);
        this.topics = new TopicsManager_1.TopicsManager(this);
    }
    async setAdministratorCustomTitle(user_id, custom_title) {
        return this.client.api.setChatAdministratorCustomTitle(null, {
            params: { chat_id: this.id, user_id, custom_title },
            returnOk: true
        });
    }
}
exports.SuperGroupChat = SuperGroupChat;
//# sourceMappingURL=SuperGroupChat.js.map