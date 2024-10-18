import type { MessagePacket } from '../Client/Managers/MessagesManager';
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
    message?: MessagePacket;
    inline_message_id?: string;
    chat_instance: string;
    data: string;
    game_short_name?: string;
}
export declare class CallbackQuery extends BaseClass<CallbackQuery, CallbackQueryPacket> {
    message_id: number | undefined;
    message_chat: number | undefined;
    from: User;
    constructor(client: Client, packet: CallbackQueryPacket);
    _patch(packet: CallbackQueryPacket): this;
    get message(): Message;
    get chat(): PrivateChat | ChannelChat | GroupChat | SuperGroupChat;
    get user(): User;
}
//# sourceMappingURL=CallbackQuery.d.ts.map