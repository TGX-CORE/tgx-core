import { Builder } from './Builder'

/**
 * Represents the rights of an administrator in a chat.
*/
export enum AdministratorRight {
    Anonymous = 'is_anonymous',
    ManageChat = 'can_manage_chat',
    DeleteMessages = 'can_delete_messages',
    ManageVideoChats = 'can_manage_video_chats',
    RestrictMembers = 'can_restrict_members',
    PromoteMembers = 'can_promote_members',
    ChangeInfo = 'can_change_info',
    InviteUsers = 'can_invite_users',
    PostStories = 'can_post_stories',
    EditStories = 'can_edit_stories',
    DeleteStories = 'can_delete_stories',
    PostMessages = 'can_post_messages',
    EditMessages = 'can_edit_messages',
    PinMessages = 'can_pin_messages',
    ManageTopics = 'can_manage_topics'
}

/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 */
export enum Permission {
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

export class ChatAdministratorRights extends Builder {

    public declare value: AdministratorRight[]

    /**
     * @param rights The required administrator rights of the user in the chat.
     */
    public constructor(...rights: AdministratorRight[]){
        super({ value: rights, parseVal: true })
    }

}

export class ChatPermissions extends Builder {

    public declare value: Permissions[]

    /**
     * @param permissions The permissions a non-adminstrator user is allowed.
     */
    public constructor(...permissions: Permissions[]){
        super({ value: permissions, parseVal: true })
    }
    
}