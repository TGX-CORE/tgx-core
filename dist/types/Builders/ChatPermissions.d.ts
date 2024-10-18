import { Builder } from './Builder';
export declare enum Permission {
    SendMessages = "can_send_messages",
    SendAudios = "can_send_audios",
    SendDocuments = "can_send_documents",
    SendPhotos = "can_send_photos",
    SendVideos = "can_send_videos",
    SendVideoNotes = "can_send_video_notes",
    SendVoiceNotes = "can_send_voice_notes",
    SendPolls = "can_send_polls",
    SendOtherMessages = "can_send_other_messages",
    AddWebPagePreviews = "can_add_web_page_previews",
    ChangeInfo = "can_change_info",
    InviteUsers = "can_invite_users",
    PinMessages = "can_pin_messages",
    ManageTopics = "can_manage_topics"
}
export declare enum AdministratorRight {
    Anonymous = "is_anonymous",
    ManageChat = "can_manage_chat",
    DeleteMessages = "can_delete_messages",
    ManageVideoChats = "can_manage_video_chats",
    RestrictMembers = "can_restrict_members",
    PromoteMembers = "can_promote_members",
    ChangeInfo = "can_change_info",
    InviteUsers = "can_invite_users",
    PostStories = "can_post_stories",
    EditStories = "can_edit_stories",
    DeleteStories = "can_delete_stories",
    PostMessages = "can_post_messages",
    EditMessages = "can_edit_messages",
    PinMessages = "can_pin_messages",
    ManageTopics = "can_manage_topics"
}
export declare class ChatAdministratorRights extends Builder {
    value: AdministratorRight[];
    constructor(...rights: AdministratorRight[]);
}
export declare class ChatPermissions extends Builder {
    value: Permissions[];
    constructor(...permissions: Permissions[]);
}
//# sourceMappingURL=ChatPermissions.d.ts.map