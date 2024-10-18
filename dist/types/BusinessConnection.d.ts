import type { ChatPacket } from '../Classes/BaseChat';
import type { User } from '../Classes/User';
export interface BusinessConnectionPacket {
    id: string;
    user: User;
    user_chat_id: number;
    date: number;
    can_reply: boolean;
    is_enabled: boolean;
}
export interface BusinessMessagesDeletedPacket {
    business_connection_id: string;
    message_ids: number[];
    chat: ChatPacket;
}
