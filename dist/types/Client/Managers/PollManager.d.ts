import type { Client } from '../Client';
import { AllowedUpdatesOptions } from '../../Builders/AllowedOptions';
import { BaseManager } from './BaseManager';
export interface PollManagerOptions {
    limit?: number;
    timeout?: number;
    allowed_updates?: AllowedUpdatesOptions;
    independent_updates?: IndependentUpdates;
    delay?: number;
    ignore_self?: boolean;
    ignore_bots?: boolean;
    ignore_sender_chats?: boolean;
}
export interface IndependentUpdates {
    business_message?: boolean;
    edited_message?: boolean;
}
export declare enum AllowedUpdates {
    Poll = "poll",
    UncachedPoll = "uncached_poll",
    PollAnswer = "poll_answer",
    UncachedPollAnswer = "uncached_poll_answer",
    Message = "message",
    EditedMessage = "edited_message",
    ChatMember = "chat_member",
    ChatJoinRequest = "chat_join_request",
    InlineQuery = "inline_query",
    CallbackQuery = "callback_query",
    ChosenInlineResult = "chosen_inline_result",
    ChannelPost = "channel_post",
    MessageReaction = "message_reaction",
    MessageReactionCount = "message_reaction_count"
}
export declare class PollManager extends BaseManager<PollManagerOptions> {
    active: boolean;
    offset?: number;
    interluder?: NodeJS.Timeout;
    constructor(client: Client);
    switch(): void;
    initialize(): Promise<void>;
    private interlude;
    private poll;
}
//# sourceMappingURL=PollManager.d.ts.map