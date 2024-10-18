import type { RegistriesOptions } from '../Client/Managers/RegistryManager';
import type { APIManagerOptions } from '../Client/Managers/ApiManager';
import type { PollManagerOptions } from '../Client/Managers/PollManager';
import type { Parseables, PartialTypes } from '../Client/Client';
import type { LoggerOptions } from '../Client/Managers/Logger';
/**
 * All the members of the ClientEvent has a parameter of message.
 *
 * ```ts
 * Client.on(ClientEvent.Command, ( message ) => { })
 * ```
 */
export declare enum ClientEvent {
    Message = "message",
    EditedMessage = "edited_message",
    ChannelPost = "channel_post",
    EditedChannelPost = "edited_channel_post",
    MessageReaction = "message_reaction",
    MessageReactionCount = "message_reaction_count",
    InlineQuery = "inline_query",
    ChosenInlineResult = "chosen_inline_result",
    CallbackQuery = "callback_query",
    ShippingQuery = "shipping_query",
    PreCheckoutQuery = "pre_checkout_query",
    Poll = "poll",
    PollAnswer = "poll_answer",
    ChatMemberUpdated = "chat_member",
    ChatJoinRequest = "chat_join_request",
    ChatBoost = "chat_boost",
    RemovedChatboost = "removed_chat_boost",
    MessageAutoDeleteTimerChanged = "message_auto_delete_timer_changed",
    VideoNote = "video_note",
    PaidMedia = "paid_media",
    Animation = "animation",
    Document = "document",
    Location = "location",
    Command = "command",
    Contact = "contact",
    QuoteText = "quote",
    Venue = "venue",
    Audio = "audio",
    Photo = "photo",
    Story = "story",
    Video = "video",
    Voice = "voice",
    Text = "text",
    Dice = "dice",
    Game = "game",
    PassportData = "passport_data",
    BoostAdded = "boost_added",
    PinnedMessage = "pinned_message",
    WebAppData = "web_app_data",
    ProximityAlertTriggered = "proximity_alert_triggered",
    ChatBackgroundSet = "chat_background_set",
    ConnectedWebsite = "connected_website",
    WriteAccessAllowed = "write_access_allowed",
    Invoice = "invoice",
    SuccessfulPayment = "successful_payment",
    RefundedPayment = "refunded_payment",
    ForumTopicCreated = "forum_topic_created",
    ForumTopicEdited = "forum_topic_edited",
    ForumTopicClosed = "forum_topic_closed",
    ForumTopicReopened = "forum_topic_reopened",
    Giveaway = "giveaway",
    GiveawayCreated = "giveaway_created",
    GiveawayWinners = "giveaway_winners",
    GiveawayCompleted = "giveaway_completed",
    NewChatTitle = "new_chat_title",
    NewChatPhoto = "new_chat_photo",
    DeleteChatPhoto = "delete_chat_photo",
    NewChatMembers = "new_chat_members",
    LeftChatMember = "left_chat_member",
    VideoChatScheduled = "video_chat_scheduled",
    VideoChatStarted = "video_chat_started",
    VideoChatEnded = "video_chat_ended",
    VideoChatParticipantsInvited = "video_chat_participants_invited",
    GroupChatCreated = "group_chat_created",
    SupergroupChatCreated = "supergroup_chat_created",
    ChannelChatCreated = "channel_chat_created",
    GeneralForumTopicHidden = "general_forum_topic_hidden",
    GeneralForumTopicUnhidden = "general_forum_topic_unhidden",
    UsersShared = "users_shared",
    ChatShared = "chat_shared",
    MigrateToChatId = "migrate_to_chat_id",
    MigrateFromChatId = "migrate_from_chat_id"
}
export declare enum Auxiliaries {
    Invoices = "invoices"
}
export interface ClientOptions {
    [key: string]: any;
    poll?: PollManagerOptions;
    logger?: LoggerOptions;
    partials?: Array<PartialTypes>;
    api?: APIManagerOptions;
    parseables?: Array<Parseables>;
    registries?: RegistriesOptions;
    sweep?: boolean | string;
}
//# sourceMappingURL=Client.d.ts.map