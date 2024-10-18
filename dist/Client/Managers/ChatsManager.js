"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsManager = exports.ChatHold = void 0;
const CachedManager_1 = require("./CachedManager");
const { ChannelChat } = require('../../Classes/ChannelChat');
const { PrivateChat } = require('../../Classes/PrivateChat');
const { GroupChat } = require('../../Classes/GroupChat');
const { SuperGroupChat } = require('../../Classes/SuperGroupChat');
var ChatHold;
(function (ChatHold) {
    ChatHold[ChatHold["channel"] = ChannelChat] = "channel";
    ChatHold[ChatHold["private"] = PrivateChat] = "private";
    ChatHold[ChatHold["group"] = GroupChat] = "group";
    ChatHold[ChatHold["supergroup"] = SuperGroupChat] = "supergroup";
})(ChatHold || (exports.ChatHold = ChatHold = {}));
class ChatsManager extends CachedManager_1.CachedManager {
    constructor(client) {
        super(client);
    }
    _add(packet, cache, { id, extras, force, holds } = {}) {
        return super._add(packet, cache, { id, extras, force, holds: ChatHold[packet.type] ?? holds });
    }
    async fetch(chat_id) {
        var message = await this.client.api.getChat(null, {
            params: { chat_id },
            lean: true
        });
        return message.ok ? this._add(message.result, true, { id: message.result.id, extras: [false] }) : false;
    }
}
exports.ChatsManager = ChatsManager;
//# sourceMappingURL=ChatsManager.js.map