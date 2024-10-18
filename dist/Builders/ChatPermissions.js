"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatPermissions = exports.ChatAdministratorRights = exports.Permission = exports.AdministratorRight = void 0;
const Builder_1 = require("./Builder");
/**
 * Represents the rights of an administrator in a chat.
*/
var AdministratorRight;
(function (AdministratorRight) {
    AdministratorRight["Anonymous"] = "is_anonymous";
    AdministratorRight["ManageChat"] = "can_manage_chat";
    AdministratorRight["DeleteMessages"] = "can_delete_messages";
    AdministratorRight["ManageVideoChats"] = "can_manage_video_chats";
    AdministratorRight["RestrictMembers"] = "can_restrict_members";
    AdministratorRight["PromoteMembers"] = "can_promote_members";
    AdministratorRight["ChangeInfo"] = "can_change_info";
    AdministratorRight["InviteUsers"] = "can_invite_users";
    AdministratorRight["PostStories"] = "can_post_stories";
    AdministratorRight["EditStories"] = "can_edit_stories";
    AdministratorRight["DeleteStories"] = "can_delete_stories";
    AdministratorRight["PostMessages"] = "can_post_messages";
    AdministratorRight["EditMessages"] = "can_edit_messages";
    AdministratorRight["PinMessages"] = "can_pin_messages";
    AdministratorRight["ManageTopics"] = "can_manage_topics";
})(AdministratorRight || (exports.AdministratorRight = AdministratorRight = {}));
/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 */
var Permission;
(function (Permission) {
    Permission["SendMessages"] = "can_send_messages";
    Permission["SendAudios"] = "can_send_audios";
    Permission["SendDocuments"] = "can_send_documents";
    Permission["SendPhotos"] = "can_send_photos";
    Permission["SendVideos"] = "can_send_videos";
    Permission["SendVideoNotes"] = "can_send_video_notes";
    Permission["SendVoiceNotes"] = "can_send_voice_notes";
    Permission["SendPolls"] = "can_send_polls";
    Permission["SendOtherMessages"] = "can_send_other_messages";
    Permission["AddWebPagePreviews"] = "can_add_web_page_previews";
    Permission["ChangeInfo"] = "can_change_info";
    Permission["InviteUsers"] = "can_invite_users";
    Permission["PinMessages"] = "can_pin_messages";
    Permission["ManageTopics"] = "can_manage_topics";
})(Permission || (exports.Permission = Permission = {}));
class ChatAdministratorRights extends Builder_1.Builder {
    /**
     * @param rights The required administrator rights of the user in the chat.
     */
    constructor(...rights) {
        super({ value: rights, parseVal: true });
    }
}
exports.ChatAdministratorRights = ChatAdministratorRights;
class ChatPermissions extends Builder_1.Builder {
    /**
     * @param permissions The permissions a non-adminstrator user is allowed.
     */
    constructor(...permissions) {
        super({ value: permissions, parseVal: true });
    }
}
exports.ChatPermissions = ChatPermissions;
//# sourceMappingURL=ChatPermissions.js.map