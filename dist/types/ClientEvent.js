"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEvent = exports.MessageService = void 0;
var MessageService;
(function (MessageService) {
    MessageService["MyChatMemberUpdated"] = "my_chat_member";
    MessageService["ChatMemberUpdated"] = "chat_member";
    MessageService["ChatBoost"] = "chat_boost";
    MessageService["RemovedChatBoost"] = "removed_chat_boost";
    MessageService["PassportData"] = "passport_data";
    MessageService["BoostAdded"] = "boost_added";
    MessageService["WebAppData"] = "web_app_data";
    MessageService["ProximityAlertTriggered"] = "proximity_alert_triggered";
    MessageService["ChatBackgroundSet"] = "chat_background_set";
    MessageService["ConnectedWebsite"] = "connected_website";
    MessageService["WriteAccessAllowed"] = "write_access_allowed";
    MessageService["Invoice"] = "invoice";
    MessageService["SuccessfulPayment"] = "successful_payment";
    MessageService["RefundedPayment"] = "refunded_payment";
    MessageService["ForumTopicCreated"] = "forum_topic_created";
    MessageService["ForumTopicEdited"] = "forum_topic_edited";
    MessageService["ForumTopicClosed"] = "forum_topic_closed";
    MessageService["ForumTopicReopened"] = "forum_topic_reopened";
    MessageService["Giveaway"] = "giveaway";
    MessageService["GiveawayCreated"] = "giveaway_created";
    MessageService["GiveawayWinners"] = "giveaway_winners";
    MessageService["GiveawayCompleted"] = "giveaway_completed";
    MessageService["NewChatTitle"] = "new_chat_title";
    MessageService["NewChatPhoto"] = "new_chat_photo";
    MessageService["DeleteChatPhoto"] = "delete_chat_photo";
    MessageService["NewChatMembers"] = "new_chat_members";
    MessageService["LeftChatMember"] = "left_chat_member";
    MessageService["GroupChatCreated"] = "group_chat_created";
    MessageService["SupergroupChatCreated"] = "supergroup_chat_created";
    MessageService["ChannelChatCreated"] = "channel_chat_created";
    MessageService["VideoChatScheduled"] = "video_chat_scheduled";
    MessageService["VideoChatStarted"] = "video_chat_started";
    MessageService["VideoChatEnded"] = "video_chat_ended";
    MessageService["VideoChatParticipantsInvited"] = "video_chat_participants_invited";
    MessageService["GeneralForumTopicHidden"] = "general_forum_topic_hidden";
    MessageService["GeneralForumTopicUnhidden"] = "general_forum_topic_unhidden";
    MessageService["MigrateToChatId"] = "migrate_to_chat_id";
    MessageService["MigrateFromChatId"] = "migrate_from_chat_id";
    MessageService["MessageAutoDeleteTimerChanged"] = "message_auto_delete_timer_changed";
})(MessageService || (exports.MessageService = MessageService = {}));
/**
 * All the possible events the client may emit.
 *
 * @property Raw (object: Object)
 * @property Ready (client: {@link !Client})
 * @property Unhandled (packet: {@link !UpdatePacket})
 *
 * @property Message (message: {@link !Message})
 *
 * @property ChatJoinRequest (request: {@link !ChatJoinRequest})
 *
 * @property InlineQuery (inline_query: {@link !InlineQuery})
 * @property ChosenInlineResult (chosen_result: {@link !ChosenInlineResult})
 *
 * @property ChatMemberUpdated (update: {@link !ChatMemberUpdated})
 *
 * @property ChatBoost (chat_boost: {@link !ChatBoost})
 * @property ChatBoostRemoved (chat_boost: {@link !ChatBoost})
 *
 * @property MessageReaction (message: {@link !Message}, old_reactions: {@link !MessageReaction}[], new_reactions: {@link !MessageReaction}[])
 * @property MessageReactionCount (message: {@link !Message}, decreased: Object, increased: Object)
 *
 * @property PreCheckoutQuery (query: {@link !PreCheckoutQuery})
 * @property ShippingQuery (shipping: {@link !ShippingQuery})
 *
 * @property Poll {poll: {@link !Poll}}
 * @property PollAnswer (poll_answer: {@link !PollAnswer})
 *
 * @property EditedMessage (message: {@link !Message})
 * @property ChannelPost (message: {@link !Message})
 * @property EditedChannelPost (message: {@link !Message})
 * @property BusinessConnection (message: {@link !Message})
 * @property BusinessMessage (message: {@link !Message})
 * @property EditedBusinessMessage (message: {@link !Message})
 * @property DeletedBusinessMessage (message: {@link !Message})
 * @property UsersShared (message: {@link !Message})
 * @property ChatShared (message: {@link !Message})
 *
 * @property Poll (message: {@link !Message})
 * @property PinnedMessage (message: {@link !Message})
 * @property PollAnswer (message: {@link !Message})
 * @property VideoNote (message: {@link !Message})
 * @property PaidMedia (message: {@link !Message})
 * @property Animation (message: {@link !Message})
 * @property Document (message: {@link !Message})
 * @property Location (message: {@link !Message})
 * @property Command (message: {@link !Message})
 * @property Contact (message: {@link !Message})
 * @property QuoteText (message: {@link !Message})
 * @property Venue (message: {@link !Message})
 * @property Audio (message: {@link !Message})
 * @property Photo (message: {@link !Message})
 * @property Story (message: {@link !Message})
 * @property Video (message: {@link !Message})
 * @property Voice (message: {@link !Message})
 * @property Text (message: {@link !Message})
 * @property Dice (message: {@link !Message})
 * @property Game (message: {@link !Message})
 * @property GroupChatCreated (message: {@link !Message})
 * @property SupergroupChatCreated (message: {@link !Message})
 * @property ChannelChatCreated (message: {@link !Message})
 *
 * @property SuccessfulPayment (message: {@link !SuccessfulPayment})
 * @property NewChatMembers (member: {@link !Member})
 *
 * @property ForumTopicCreated (topic: {@link !ForumTopic})
 * @property ForumTopicEdited (topic: {@link !ForumTopic})
 * @property ForumTopicReopened (topic: {@link !ForumTopic})
 * @property ForumTopicClosed (topic: {@link ForumTopic})
 */
var ClientEvent;
(function (ClientEvent) {
    // [ Client Core ]
    ClientEvent["Raw"] = "raw";
    ClientEvent["Unhandled"] = "unhandled";
    ClientEvent["Ready"] = "ready";
    // [ Message ]
    ClientEvent["Message"] = "message";
    ClientEvent["EditedMessage"] = "edited_message";
    ClientEvent["ChannelPost"] = "channel_post";
    ClientEvent["EditedChannelPost"] = "edited_channel_post";
    ClientEvent["BusinessConnection"] = "business_connection";
    ClientEvent["BusinessMessage"] = "business_message";
    ClientEvent["EditedBusinessMessage"] = "edited_business_message";
    ClientEvent["DeletedBusinessMessage"] = "deleted_business_messages";
    ClientEvent["PinnedMessage"] = "pinned_message";
    ClientEvent["UsersShared"] = "users_shared";
    ClientEvent["ChatShared"] = "chat_shared";
    ClientEvent["Poll"] = "poll";
    ClientEvent["PollAnswer"] = "poll_answer";
    ClientEvent["VideoNote"] = "video_note";
    ClientEvent["PaidMedia"] = "paid_media";
    ClientEvent["Animation"] = "animation";
    ClientEvent["Document"] = "document";
    ClientEvent["Location"] = "location";
    ClientEvent["Command"] = "command";
    ClientEvent["Contact"] = "contact";
    ClientEvent["QuoteText"] = "quote";
    ClientEvent["Venue"] = "venue";
    ClientEvent["Audio"] = "audio";
    ClientEvent["Photo"] = "photo";
    ClientEvent["Story"] = "story";
    ClientEvent["Video"] = "video";
    ClientEvent["Voice"] = "voice";
    ClientEvent["Text"] = "text";
    ClientEvent["Dice"] = "dice";
    ClientEvent["Game"] = "game";
    // [ Misc Updates ]
    ClientEvent["InlineQuery"] = "inline_query";
    ClientEvent["ChosenInlineResult"] = "chosen_inline_result";
    ClientEvent["CallbackQuery"] = "callback_query";
    ClientEvent["ShippingQuery"] = "shipping_query";
    ClientEvent["PreCheckoutQuery"] = "pre_checkout_query";
    ClientEvent["PurchasedPaidMedia"] = "purchased_paid_media";
    ClientEvent["MessageReaction"] = "message_reaction";
    ClientEvent["MessageReactionCount"] = "message_reaction_count";
    ClientEvent["ChatJoinRequest"] = "chat_join_request";
    // [ Message Services ]
    ClientEvent["MyChatMemberUpdated"] = "my_chat_member";
    ClientEvent["ChatMemberUpdated"] = "chat_member";
    ClientEvent["GroupChatCreated"] = "group_chat_created";
    ClientEvent["SupergroupChatCreated"] = "supergroup_chat_created";
    ClientEvent["ChannelChatCreated"] = "channel_chat_created";
    ClientEvent["Invoice"] = "invoice";
    ClientEvent["SuccessfulPayment"] = "successful_payment";
    ClientEvent["RefundedPayment"] = "refunded_payment";
    ClientEvent["ForumTopicCreated"] = "forum_topic_created";
    // [Undocumented]
    ClientEvent["ChatBoost"] = "chat_boost";
    ClientEvent["RemovedChatBoost"] = "removed_chat_boost";
    ClientEvent["PassportData"] = "passport_data";
    ClientEvent["BoostAdded"] = "boost_added";
    ClientEvent["WebAppData"] = "web_app_data";
    ClientEvent["ProximityAlertTriggered"] = "proximity_alert_triggered";
    ClientEvent["ChatBackgroundSet"] = "chat_background_set";
    ClientEvent["ConnectedWebsite"] = "connected_website";
    ClientEvent["WriteAccessAllowed"] = "write_access_allowed";
    ClientEvent["ForumTopicEdited"] = "forum_topic_edited";
    ClientEvent["ForumTopicClosed"] = "forum_topic_closed";
    ClientEvent["ForumTopicReopened"] = "forum_topic_reopened";
    ClientEvent["Giveaway"] = "giveaway";
    ClientEvent["GiveawayCreated"] = "giveaway_created";
    ClientEvent["GiveawayWinners"] = "giveaway_winners";
    ClientEvent["GiveawayCompleted"] = "giveaway_completed";
    ClientEvent["NewChatTitle"] = "new_chat_title";
    ClientEvent["NewChatPhoto"] = "new_chat_photo";
    ClientEvent["DeleteChatPhoto"] = "delete_chat_photo";
    ClientEvent["NewChatMembers"] = "new_chat_members";
    ClientEvent["LeftChatMember"] = "left_chat_member";
    ClientEvent["VideoChatScheduled"] = "video_chat_scheduled";
    ClientEvent["VideoChatStarted"] = "video_chat_started";
    ClientEvent["VideoChatEnded"] = "video_chat_ended";
    ClientEvent["VideoChatParticipantsInvited"] = "video_chat_participants_invited";
    ClientEvent["GeneralForumTopicHidden"] = "general_forum_topic_hidden";
    ClientEvent["GeneralForumTopicUnhidden"] = "general_forum_topic_unhidden";
    ClientEvent["MigrateToChatId"] = "migrate_to_chat_id";
    ClientEvent["MigrateFromChatId"] = "migrate_from_chat_id";
    ClientEvent["MessageAutoDeleteTimerChanged"] = "message_auto_delete_timer_changed";
})(ClientEvent || (exports.ClientEvent = ClientEvent = {}));
//# sourceMappingURL=ClientEvent.js.map