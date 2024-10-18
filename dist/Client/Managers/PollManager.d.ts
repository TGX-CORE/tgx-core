import type { BusinessConnectionPacket, BusinessMessagesDeletedPacket } from '../../Types/BusinessConnection';
import type { ChosenInlineResultPacket } from '../../Classes/InlineQueryChosenResult';
import type { MessageReactionCountPacket } from '../../Classes/MessageReactionCount';
import type { ChatBoostUpdated, ChatBoostRemoved } from '../../Types/Chatboost';
import type { ChatMemberUpdatedPacket } from '../../Classes/ChatMemberUpdated';
import type { PreCheckoutQueryPacket } from '../../Classes/PreCheckoutQuery';
import type { ChatJoinRequestPacket } from '../../Classes/ChatJoinRequest';
import type { MessageReactionPacket } from '../../Classes/MessageReaction';
import type { ShippingQueryPacket } from '../../Classes/ShippingQuery';
import type { CallbackQueryPacket } from '../../Classes/CallbackQuery';
import type { PaidMediaPurchasedPacket } from '../../Types/Common';
import type { InlineQueryPacket } from '../../Classes/InlineQuery';
import type { PollAnswerPacket } from '../../Classes/PollAnswer';
import type { MessagePacket } from './MessagesManager';
import type { PollPacket } from '../../Classes/Poll';
import type { Client } from '../Client';
import { AllowedUpdatesOptions } from '../../Builders/AllowedOptions';
import { BaseManager } from './BaseManager';
export interface UpdatePacket {
    update_id: number;
    message?: MessagePacket;
    edited_message?: MessagePacket;
    channel_post?: MessagePacket;
    edited_channel_post?: MessagePacket;
    business_connection?: BusinessConnectionPacket;
    business_message?: MessagePacket;
    edited_business_message?: MessagePacket;
    deleted_business_messages?: BusinessMessagesDeletedPacket;
    message_reaction?: MessageReactionPacket;
    message_reaction_count?: MessageReactionCountPacket;
    inline_query?: InlineQueryPacket;
    chosen_inline_result?: ChosenInlineResultPacket;
    callback_query?: CallbackQueryPacket;
    shipping_query?: ShippingQueryPacket;
    pre_checkout_query?: PreCheckoutQueryPacket;
    purchased_paid_media?: PaidMediaPurchasedPacket;
    poll?: PollPacket;
    poll_answer?: PollAnswerPacket;
    my_chat_member?: ChatMemberUpdatedPacket;
    chat_member?: ChatMemberUpdatedPacket;
    chat_join_request?: ChatJoinRequestPacket;
    chat_boost?: ChatBoostUpdated;
    removed_chat_boost?: ChatBoostRemoved;
}
export interface PollManagerOptions {
    limit?: number;
    timeout?: number;
    allowed_updates?: AllowedUpdatesOptions;
    delay?: number;
    ignore_self?: boolean;
    ignore_bots?: boolean;
    ignore_sender_chats?: boolean;
}
export declare enum AllowedUpdates {
    All = "all",
    Poll = "poll",
    PollAnswer = "poll_answer",
    Message = "message",
    EditedMessage = "edited_message",
    ChatMember = "chat_member",
    ChatJoinRequest = "chat_join_request",
    InlineQuery = "inline_query",
    CallbackQuery = "callback_query",
    ChosenInlineResult = "chosen_inline_result",
    ChannelPost = "channel_post",
    EditedChannelPost = "edited_channel_post",
    MessageReaction = "message_reaction",
    MessageReactionCount = "message_reaction_count"
}
export declare class PollManager extends BaseManager<PollManagerOptions> {
    active: boolean;
    offset?: number;
    interluder?: NodeJS.Timeout;
    constructor(client: Client);
    /**
     * Enable or disable the poll manager.
     */
    switch(): void;
    /**
     * Handles an incoming update packet from Telegram.
     *
     * @param update The packet response from Telegram.
     */
    handle(update: UpdatePacket | UpdatePacket[]): void;
    initialize(): Promise<void>;
    private interlude;
    private poll;
}
