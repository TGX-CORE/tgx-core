import type { BaseChat } from '../../Classes/BaseChat';
import type { ReactionType } from '../../Types/Message';
import type { User } from '../../Classes/User';
import { ClientEvent } from '../../Types/ClientEvent';
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
    static pointer: ClientEvent;
    handle(packet: MessageReactionPayload): any;
    resolve(reaction: any): any;
}
