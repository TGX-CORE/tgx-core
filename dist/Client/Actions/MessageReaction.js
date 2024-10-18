"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactionAction = void 0;
const MessageReaction_1 = require("../../Classes/MessageReaction");
const ClientEvent_1 = require("../../Types/ClientEvent");
const Generic_1 = require("./Generic");
class MessageReactionAction extends Generic_1.GenericAction {
    handle(packet) {
        const partial_chat = this.partials.chat(packet.chat);
        if (partial_chat) {
            const message = partial_chat.messages.cache.get(packet.message_id);
            if (message) {
                const { message_id, user, actor_chat, date } = packet;
                const old_reactions = [];
                const new_reactions = [];
                for (let reaction of packet.old_reaction) {
                    const cached = message.reactions.has(this.resolve(reaction), (user ?? actor_chat)?.id);
                    message.reactions.remove(this.resolve(reaction), (user ?? actor_chat)?.id);
                    old_reactions.push(cached);
                }
                for (let reaction of packet.new_reaction) {
                    const { type } = reaction;
                    const created = new MessageReaction_1.MessageReaction(this.client, {
                        ...(type === 'custom_emoji' && { custom_emoji: reaction.custom_emoji_id }),
                        ...(type === 'emoji' && { emoji: reaction.emoji }),
                        type, message_id, date,
                        from: user,
                        chat_id: partial_chat.id,
                        actor_chat_id: actor_chat?.id
                    });
                    message.reactions.add(created);
                    new_reactions.push(created);
                }
                return this.emit(MessageReactionAction.pointer, message, old_reactions, new_reactions);
            }
            return this.client.logger.warn('A message reaction update has been rejected; the message has not been cached yet.');
        }
        return this.client.logger.warn('A message reaction update has been rejected; the chat has not been cached yet..');
    }
    resolve(reaction) {
        switch (reaction.type) {
            case 'custom_emoji':
                return reaction.custom_emoji_id;
            case 'emoji':
                return reaction.emoji;
            case 'paid':
                return 'paid';
        }
    }
}
exports.MessageReactionAction = MessageReactionAction;
MessageReactionAction.pointer = ClientEvent_1.ClientEvent.MessageReaction;
//# sourceMappingURL=MessageReaction.js.map