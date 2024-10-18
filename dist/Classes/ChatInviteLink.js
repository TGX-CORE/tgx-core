"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatInviteLink = void 0;
const BaseClass_1 = require("./BaseClass");
class ChatInviteLink extends BaseClass_1.BaseClass {
    constructor(client, packet, extras) {
        super(client, packet);
        this.manager = extras[0];
    }
    async edit(payload) {
        return this.manager[this.subscription_period ? 'edit' : 'editSubscription']({
            ...payload,
            invite_link: this.invite_link
        });
    }
    async revoke() {
        return this.manager.revoke(this.invite_link);
    }
}
exports.ChatInviteLink = ChatInviteLink;
//# sourceMappingURL=ChatInviteLink.js.map