import type { PrivateChat } from './PrivateChat';
import type { SuperGroupChat } from './SuperGroupChat';
import type { ChannelChat } from './ChannelChat';
import type { GroupChat } from './GroupChat';
import { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { Message } from './Message';
import { User } from './User';
export interface CallbackQueryPacket {
    id: string;
    from: User;
    message?: Message;
    inline_message_id?: string;
    chat_instance: string;
    data: string;
    game_short_name?: string;
}
export declare class CallbackQuery extends BaseClass<CallbackQuery, CallbackQueryPacket> implements Partial<CallbackQueryPacket> {
    id: string;
    _message: number;
    _message_chat: number;
    from: User;
    constructor(client: Client, packet: CallbackQueryPacket);
    get message(): Message | undefined;
    get chat(): PrivateChat | ChannelChat | GroupChat | SuperGroupChat;
    get user(): User;
}
