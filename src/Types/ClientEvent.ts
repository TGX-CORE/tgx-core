export enum MessageService {
    MyChatMemberUpdated = 'my_chat_member',
    ChatMemberUpdated = 'chat_member',

    ChatBoost = 'chat_boost',
    RemovedChatBoost = 'removed_chat_boost',

    PassportData = 'passport_data',

    BoostAdded = 'boost_added',

    WebAppData = 'web_app_data',

    ProximityAlertTriggered = 'proximity_alert_triggered',
    
    ChatBackgroundSet = 'chat_background_set',

    ConnectedWebsite = 'connected_website',
    
    WriteAccessAllowed = 'write_access_allowed',
    
    Invoice = 'invoice',
    SuccessfulPayment = 'successful_payment',
    RefundedPayment = 'refunded_payment',

    ForumTopicCreated = 'forum_topic_created',
    ForumTopicEdited = 'forum_topic_edited',
    ForumTopicClosed = 'forum_topic_closed',
    ForumTopicReopened = 'forum_topic_reopened',
    
    Giveaway = 'giveaway',
    GiveawayCreated = 'giveaway_created',
    GiveawayWinners = 'giveaway_winners',
    GiveawayCompleted = 'giveaway_completed',

    NewChatTitle = 'new_chat_title',
    NewChatPhoto = 'new_chat_photo',
    DeleteChatPhoto = 'delete_chat_photo',
    
    NewChatMembers = 'new_chat_members',
    LeftChatMember = 'left_chat_member',

    GroupChatCreated = 'group_chat_created',
    SupergroupChatCreated = 'supergroup_chat_created',
    ChannelChatCreated = 'channel_chat_created',
    
    VideoChatScheduled = 'video_chat_scheduled',
    VideoChatStarted = 'video_chat_started',
    VideoChatEnded = 'video_chat_ended',
    VideoChatParticipantsInvited = 'video_chat_participants_invited',

    GeneralForumTopicHidden = 'general_forum_topic_hidden',
    GeneralForumTopicUnhidden = 'general_forum_topic_unhidden',

    MigrateToChatId = 'migrate_to_chat_id',
    MigrateFromChatId = 'migrate_from_chat_id',

    MessageAutoDeleteTimerChanged = 'message_auto_delete_timer_changed',
}

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
export enum ClientEvent {

    // [ Client Core ]
    
    Raw = 'raw',
    Unhandled = 'unhandled',
    Ready = 'ready',

    // [ Message ]

    Message = 'message',
    EditedMessage = 'edited_message',
    ChannelPost = 'channel_post',
    EditedChannelPost = 'edited_channel_post',

    BusinessConnection = 'business_connection',
    BusinessMessage = 'business_message',
    EditedBusinessMessage = 'edited_business_message',
    DeletedBusinessMessage = 'deleted_business_messages',
    
    PinnedMessage = 'pinned_message',

    UsersShared = 'users_shared',
    ChatShared = 'chat_shared',

    Poll = 'poll',
    PollAnswer = 'poll_answer',

    VideoNote = 'video_note',
    PaidMedia = 'paid_media',
    Animation = 'animation',
    Document = 'document',
    Location = 'location',
    Command = 'command',
    Contact = 'contact',
    QuoteText = 'quote',
    Venue = 'venue',
    Audio = 'audio',
    Photo = 'photo',
    Story = 'story',
    Video = 'video',
    Voice = 'voice',
    Text = 'text',
    Dice = 'dice',
    Game = 'game',

    // [ Misc Updates ]

    InlineQuery = 'inline_query',
    ChosenInlineResult = 'chosen_inline_result',
    
    CallbackQuery = 'callback_query',
    ShippingQuery = 'shipping_query',
    PreCheckoutQuery = 'pre_checkout_query',
    PurchasedPaidMedia = 'purchased_paid_media',

    MessageReaction = 'message_reaction',
    MessageReactionCount = 'message_reaction_count',

    ChatJoinRequest = 'chat_join_request',

    // [ Message Services ]

    MyChatMemberUpdated = MessageService.MyChatMemberUpdated,
    ChatMemberUpdated = MessageService.ChatMemberUpdated,

    GroupChatCreated = MessageService.GroupChatCreated,
    SupergroupChatCreated = MessageService.SupergroupChatCreated,
    ChannelChatCreated = MessageService.ChannelChatCreated,

    Invoice = MessageService.Invoice,

    SuccessfulPayment = MessageService.SuccessfulPayment,
    RefundedPayment = MessageService.RefundedPayment,

    ForumTopicCreated = MessageService.ForumTopicCreated,
    
    // [Undocumented]
    
    ChatBoost = MessageService.ChatBoost,
    RemovedChatBoost = MessageService.RemovedChatBoost,
    PassportData = MessageService.PassportData,
    BoostAdded = MessageService.BoostAdded,
    WebAppData = MessageService.WebAppData,
    ProximityAlertTriggered = MessageService.ProximityAlertTriggered,
    ChatBackgroundSet = MessageService.ChatBackgroundSet,
    ConnectedWebsite = MessageService.ConnectedWebsite,
    WriteAccessAllowed = MessageService.WriteAccessAllowed,
    
    ForumTopicEdited = MessageService.ForumTopicEdited,
    ForumTopicClosed = MessageService.ForumTopicClosed,
    ForumTopicReopened = MessageService.ForumTopicReopened,

    Giveaway = MessageService.Giveaway,
    GiveawayCreated = MessageService.GiveawayCreated,
    GiveawayWinners = MessageService.GiveawayWinners,
    GiveawayCompleted = MessageService.GiveawayCompleted,
    NewChatTitle = MessageService.NewChatTitle,
    NewChatPhoto = MessageService.NewChatPhoto,
    DeleteChatPhoto = MessageService.DeleteChatPhoto,
    NewChatMembers = MessageService.NewChatMembers,
    LeftChatMember = MessageService.LeftChatMember,
    VideoChatScheduled = MessageService.VideoChatScheduled,
    VideoChatStarted = MessageService.VideoChatStarted,
    VideoChatEnded = MessageService.VideoChatEnded,
    VideoChatParticipantsInvited = MessageService.VideoChatParticipantsInvited,
    
    GeneralForumTopicHidden = MessageService.GeneralForumTopicHidden,
    GeneralForumTopicUnhidden = MessageService.GeneralForumTopicUnhidden,
    MigrateToChatId = MessageService.MigrateToChatId,
    MigrateFromChatId = MessageService.MigrateFromChatId,
    MessageAutoDeleteTimerChanged = MessageService.MessageAutoDeleteTimerChanged

}
