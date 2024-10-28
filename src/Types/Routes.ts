export interface RouteParameters {
    params: any,
    ok?: boolean
    lean?: boolean
    result?: boolean
    form?: boolean
}

export enum Routes {
    SetWebhook = '/setWebhook',
    DeleteWebhook = '/deleteWebhook',
    GetWebhookInfo = '/getWebhookInfo', 

    GetFile = '/getFile',
    GetChat = '/getChat',
    GetChatMember = '/getChatMember',
    GetChatMemberCount = '/getChatMemberCount',
    GetUpdates = '/getUpdates',
    GetUserChatBoosts = '/getUserChatBoosts',

    GetMe = '/getMe',
    GetMyName = '/getMyName',
    GetMyDescription = '/getMyDescription',
    GetMyShortDescription = '/getMyShortDescription',
    GetBusinessConnection = '/getBusinessConnection',

    SetMyName = '/setMyName',
    SetMyDescription = '/setMyDescription',
    SetMyShortDescription = '/setMyShortDescription',

    SendAction = '/sendAction',
    SendAnimation = '/sendAnimation',
    SendAudio = '/sendAudio',
    SendChatAction = '/sendChatAction',
    SendContact = '/sendContact',
    SendDocument = '/sendDocument',
    SendDice = '/sendDice',
    SendInvoice = '/sendInvoice',
    SendLocation = '/sendLocation',
    SendMediaGroup = '/sendMediaGroup',
    SendMessage = '/sendMessage',
    SendMessageReaction = '/sendMessageReaction',
    SendPaidMedia = '/sendPaidMedia',
    SendPhoto = '/sendPhoto',
    SendPoll = '/sendPoll',
    SendVideo = '/sendVideo',
    SendVideoNote = '/sendVideoNote',
    SendVoice = '/sendVoice',
    SendVenue = '/sendVenue',
    StopPoll = '/stopPoll',

    GetUserProfilePhotos = '/getUserProfilePhotos',

    AnswerInlineQuery = '/answerInlineQuery',
    AnswerPreCheckoutQuery = '/answerPreCheckoutQuery',
    AnswerShippingQuery = '/answerShippingQuery',

    SetChatMenuButton = '/setChatMenuButton',
    GetChatMenuButton = '/getChatMenuButton',

    BanChatMember = '/banChatMember',
    PromoteChatMember = '/promoteChatMember',
    UnbanChatMember = '/unbanChatMember',
    RestrictChatMember = '/restrictChatMember',

    CopyMessages = '/copyMessages',
    PinChatMessage = '/pinChatMessage',
    ForwardMessages = '/forwardMessages',
    UnpinChatMessage = '/unpinChatMessage',
    UnpinAllChatMessages = '/unpinAllChatMessages',

    DeleteMessage = '/deleteMessage',
    DeleteMessages = '/deleteMessages',
    EditMessageText = '/editMessageText',
    EditMessageCaption = '/editMessageCaption',
    EditMessageMedia = '/editMessageMedia',
    EditMessageLiveLocation = '/editMessageLiveLocation',
    StopMessageLiveLocation = '/stopMessageLiveLocation',
    EditMessageReplyMarkup = '/editMessageReplyMarkup',
    SetMessageReaction = '/setMessageReaction',

    LeaveChat = '/leaveChat',
    SetChatTitle = '/setChatTitle',
    SetChatPhoto = '/setChatPhoto',
    DeleteChatPhoto = '/deleteChatPhoto',
    SetChatDescription = '/setChatDescription',
    GetChatAdministrators = '/getChatAdministrators',
    SetChatAdministratorCustomTitle = '/setChatAdministratorCustomTitle',
    SetMyDefaultAdministratorRights = '/setMyDefaultAdministratorRights',
    GetMyDefaultAdministratorRights = '/getMyDefaultAdministratorRights',

    ApproveChatJoinRequest = '/approveChatJoinRequest',
    DeclineChatJoinRequest = '/declineChatJoinRequest',

    DeleteMyCommands = '/deleteMyCommands',
    GetMyCommands = '/getMyCommands',
    SetMyCommands = '/setMyCommands',

    CreateForumTopic = '/createForumTopic',
    CloseForumTopic = '/closeForumTopic',
    DeleteForumTopic = '/deleteForumTopic',
    EditForumTopic = '/editForumTopic',
    ReopenForumTopic = '/reopenForumTopic',
    UnpinAllForumTopicMessages = '/unpinAllForumTopicMessages',

    EditGeneralForumTopic = '/editGeneralForumTopic',
    CloseGeneralForumTopic = '/closeGeneralForumTopic',
    ReopenGeneralForumTopic = '/reopenGeneralForumTopic',
    HideGeneralForumTopic = '/hideGeneralForumTopic',
    UnhideGeneralForumTopic = '/unhideGeneralForumTopic',
    UnpinAllGeneralForumTopicMessages = '/unpinAllGeneralForumTopicMessages',

    RefundStarPayment = '/refundStarPayment',

    CreateInvoiceLink = '/createInvoiceLink',
    ExportChatInviteLink = '/exportChatInviteLink',
    CreateChatInviteLink = '/createChatInviteLink',
    EditChatInviteLink = '/editChatInviteLink',
    CreateChatSubscriptionInviteLink = '/createChatSubscriptionInviteLink',
    EditChatSubscriptionInviteLink = '/editChatSubscriptionInviteLink',
    RevokeChatInviteLink = '/revokeChatInviteLink',
    SetChatStickerSet = '/setChatStickerSet',
    DeleteChatStickerSet = '/deleteChatStickerSet'
}