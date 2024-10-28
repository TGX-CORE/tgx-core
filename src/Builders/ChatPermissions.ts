import { ErrorCodes, TGXError } from '../Error'
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

const rights = [
    'is_anonymous',
    'can_manage_chat',
    'can_delete_messages',
    'can_manage_video_chats',
    'can_restrict_members',
    'can_promote_members',
    'can_change_info',
    'can_invite_users',
    'can_post_stories',
    'can_edit_stories',
    'can_delete_stories',
    'can_post_messages',
    'can_edit_messages',
    'can_pin_messages',
    'can_manage_topics'
]

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

const permissions = [
    'can_send_messages',
    'can_send_audios',
    'can_send_documents',
    'can_send_photos',
    'can_send_videos',
    'can_send_video_notes',
    'can_send_voice_notes',
    'can_send_polls',
    'can_send_other_messages',
    'can_add_web_page_previews',
    'can_change_info',
    'can_invite_users',
    'can_pin_messages',
    'can_manage_topics'
]

export class ChatAdministratorRights extends Builder {

    public declare value: {
        [key in AdministratorRight]: boolean
    }

    /**
     * @param rights The required administrator rights of the user in the chat.
     */
    public constructor(...rights: AdministratorRight[]){
        super({ value: { }, parseVal: true })

        for(let value of rights){
            this.set(value)
        }
    }

    /**
     * Set a right.
     * 
     * @param right The right to set.
     * @param allowed Wether to set to true to allow permission or not.
     */
    public set(right: AdministratorRight, allowed: boolean = true){
        if(!rights.includes(right)) throw new TGXError(ErrorCodes.InvalidAdminstratorRight, right)
        this.value[right] = allowed
        return this
    }

}

export class ChatPermissions extends Builder {

    public declare value: {
        [key in Permission]: boolean
    }

    /**
     * @param permissions The permissions a non-adminstrator user is allowed.
     */
    public constructor(...permissions: Permission[]){
        super({ value: { }, parseVal: true })

        for(let value of permissions){
            this.set(value)
        }
    }

    /**
     * Set a permission.
     * 
     * @param permission The permission to set.
     * @param allowed Wether to set to true to allow permission or not.
     */
    public set(permission: Permission, allowed: boolean = true){
        if(!permission.includes(permission)) throw new TGXError(ErrorCodes.InvalidChatPermission, permission)
        this.value[permission] = allowed
        return this
    }
    
}