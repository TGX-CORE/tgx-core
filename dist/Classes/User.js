"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const ChatBase_1 = require("./ChatBase");
class User extends ChatBase_1.ChatBase {
    constructor(client, packet) {
        super(client, packet);
    }
    async boosts(chat_id) {
        return this.client.api.getUserChatBoosts(null, {
            params: { chat_id },
            lean: true, result: true
        });
    }
    async getProfilePhotos(offset, limit) {
        return this.client.api.getUserProfilePhotos(null, {
            params: { user_id: this.id, offset, limit },
            lean: true, result: true
        });
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map