import type { ChatInviteLink } from '../Classes/ChatInviteLink';
import type { ChatMember } from '../Types/Member';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { Member } from './Member';
import { Chat } from '../Types/Message';
export interface ChatMemberUpdatedPacket {
    date: number;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
    invite_link?: ChatInviteLink;
    via_join_request?: boolean;
    via_chat_folder_invite_link?: boolean;
}
export declare class ChatMemberUpdated extends BaseClass<ChatMemberUpdated, ChatMemberUpdatedPacket> implements ChatMemberUpdatedPacket {
    private _from;
    private _chat;
    date: number;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
    constructor(client: Client, packet: ChatMemberUpdatedPacket);
    get chat(): Chat;
    get member(): Member;
}
