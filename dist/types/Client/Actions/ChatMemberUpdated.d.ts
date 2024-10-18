import type { ChatInviteLink } from '../../Classes/ChatInviteLink';
import type { BaseChat } from '../../Classes/BaseChat';
import type { ChatMember } from '../../Types/Member';
import type { User } from '../../Classes/User';
import { ChatMemberUpdated } from '../../Classes/ChatMemberUpdated';
import { GenericAction } from './Generic';
export interface ChatMemberUpdatedPacket {
    chat: BaseChat;
    from: User;
    date: number;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
    invite_link?: ChatInviteLink;
    via_join_request?: boolean;
    via_chat_folder_invite_link?: boolean;
}
export declare class ChatMemeberUpdateAction extends GenericAction {
    static pointer: string;
    handle(packet: ChatMemberUpdatedPacket, parse?: boolean): ChatMemberUpdated | void;
}
//# sourceMappingURL=ChatMemberUpdated.d.ts.map