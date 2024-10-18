import type { Client } from '../Client';
import { BaseManager } from './BaseManager';
export declare enum ClientAction {
    All = "all",
    EditedBusinessMessage,
    ForumTopicEdited,
    ForumTopicCreated,
    ForumTopicReopened,
    ForumTopicClosed,
    SuccessfulPayment,
    MessageReactionCount,
    ChosenInlineResult,
    ChatMemberUpdate,
    PreCheckoutQuery,
    ChatBoostRemoved,
    BusinessMessage,
    MessageReaction,
    ChatJoinRequest,
    ShippingQuery,
    EditedMessage,
    CallbackQuery,
    InlineQuery,
    PollAnswer,
    ChatBoost,
    Message,
    Poll
}
export interface ActionsOptions {
    load: ClientAction.All | ClientAction[];
}
export declare class ActionsManager extends BaseManager<ActionsOptions> {
    [key: string]: any;
    constructor(client: Client);
    register(context_piece: any): void;
}
