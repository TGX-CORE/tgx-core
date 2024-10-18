import type { BaseChat } from '../../Classes/BaseChat';
import type { ReactionType } from '../../Types/Message';
import type { User } from '../../Classes/User';
import { MessageReaction } from '../../Classes/MessageReaction';
import { GenericAction } from './Generic';
export interface MessageReactionPayload {
    chat: BaseChat;
    message_id: number;
    user?: User;
    date: number;
    actor_chat?: BaseChat;
    old_reaction: ReactionType[];
    new_reaction: ReactionType[];
}
export declare class MessageReactionAction extends GenericAction {
    static pointer: string;
    handle(packet: MessageReactionPayload): MessageReaction | void;
    resolve(reaction: any): any;
}
//# sourceMappingURL=MessageReaction.d.ts.map