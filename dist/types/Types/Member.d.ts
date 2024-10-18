import type { User } from '../Classes/User';
export type ChatMember = ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned;
export interface BaseChatMember {
    status?: string;
    user: User;
    is_anonymous?: boolean;
    custom_title?: string;
}
export interface ChatMemberOwner extends BaseChatMember {
    status: 'owner';
}
export interface ChatMemberAdministrator extends BaseChatMember {
    status: 'administrator';
    can_be_edited: boolean;
    is_anonymous: boolean;
    can_manage_chat: boolean;
    can_delete_messages: boolean;
    can_manage_video_chats: boolean;
    can_restrict_members: boolean;
    can_promote_members: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_post_stories: boolean;
    can_edit_stories: boolean;
    can_delete_stories: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
}
export interface ChatMemberMember extends BaseChatMember {
    status: 'member';
    until_date?: number;
}
export interface ChatMemberRestricted extends BaseChatMember {
    status: 'restricted';
    is_member: boolean;
    can_send_messages: boolean;
    can_send_audios: boolean;
    can_send_documents: boolean;
    can_send_photos: boolean;
    can_send_videos: boolean;
    can_send_video_notes: boolean;
    can_send_voice_notes: boolean;
    can_send_polls: boolean;
    can_send_other_messages: boolean;
    can_add_web_page_previews: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_pin_messages: boolean;
    can_manage_topics: boolean;
    until_date: number;
}
export interface ChatMemberLeft extends BaseChatMember {
    status: 'left';
}
export interface ChatMemberBanned extends BaseChatMember {
    status: 'banned';
    until_date?: number;
}
//# sourceMappingURL=Member.d.ts.map