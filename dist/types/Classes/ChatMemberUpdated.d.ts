import type { ChatMemberUpdatedPacket } from '../Client/Actions/ChatMemberUpdated';
import type { BaseGroupChat } from './BaseGroupChat';
import type { Client } from '../Client/Client';
import type { User } from './User';
import { BaseClass } from './BaseClass';
import { Member } from './Member';
export declare class ChatMemberUpdated extends BaseClass<ChatMemberUpdated, ChatMemberUpdatedPacket> implements Partial<ChatMemberUpdatedPacket> {
    chat_id: number;
    new_member_id: Number;
    from: User;
    constructor(client: Client, packet: Partial<ChatMemberUpdatedPacket>);
    _patch(packet: Partial<ChatMemberUpdatedPacket>): any;
    get chat(): InstanceType<typeof BaseGroupChat>;
    get member(): Member;
}
//# sourceMappingURL=ChatMemberUpdated.d.ts.map