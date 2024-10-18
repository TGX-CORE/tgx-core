"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumTopic = void 0;
const BaseClass_1 = require("./BaseClass");
class ForumTopic extends BaseClass_1.BaseClass {
    constructor(client, packet, extras) {
        super(client, packet);
        this.manager = extras[0];
    }
    async edit(name, icon_custom_emoji_id) {
        return this.manager.edit(this.id, name, icon_custom_emoji_id);
    }
    close() {
        return this.manager.close(this.id);
    }
    reopen() {
        return this.manager.reopen(this.id);
    }
    delete() {
        return this.manager.delete(this.id);
    }
    unpinAll() {
        return this.manager.unpinAll(this.id);
    }
    get id() {
        return this.message_thread_id;
    }
}
exports.ForumTopic = ForumTopic;
//# sourceMappingURL=Topic.js.map