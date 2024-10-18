"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactions = void 0;
class MessageReactions {
    constructor(client) {
        this.records = {};
        this.count_records = {};
        this.client = client;
    }
    add(reaction) {
        const resolved = this.client.actions.message_reaction.resolve(reaction);
        this.records[resolved] ??= [];
        this.records[resolved].push(reaction);
    }
    remove(reaction, sender_id) {
        const index = this.records[reaction]?.findIndex((reaction) => reaction.id === sender_id) ?? -1;
        if (index !== -1)
            this.records[reaction]?.splice(index, 1);
    }
    count(reaction) {
        return this.count_records[reaction] ?? 0;
    }
    has(reaction, sender_id) {
        return this.records[reaction]?.find((reaction) => reaction.id === sender_id) ?? false;
    }
}
exports.MessageReactions = MessageReactions;
//# sourceMappingURL=MessageReactions.js.map