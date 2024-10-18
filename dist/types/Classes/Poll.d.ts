import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard';
import type { PollOption } from '../Builders/PollOptions';
import type { MessageEntity } from '../Types/Common';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { BaseChat } from './BaseChat';
export interface PollPacket {
    id: string;
    question: string;
    chat_id?: number;
    message_id?: number;
    business_connection_id?: string;
    question_entities: MessageEntity[];
    options: PollOption[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: 'regular' | 'quiz';
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
}
export declare class PollAnswers {
    records: {
        [key: number]: number[];
    };
    constructor(options: PollOption[]);
    update(user_id: number, ids: number[]): void;
    answered(id: number, user_id: number): boolean;
    private has;
}
export declare class Poll extends BaseClass<Poll, PollPacket> implements Partial<PollPacket> {
    id: string;
    is_anonymous: boolean;
    chat_id?: number;
    message_id?: number;
    answers?: PollAnswers;
    business_connection_id?: string;
    constructor(client: Client, packet: PollPacket);
    _patch(packet: PollPacket): this;
    stop(reply_markup?: InlineKeyboardMarkup): Promise<boolean>;
    get chat(): InstanceType<typeof BaseChat> | undefined;
}
//# sourceMappingURL=Poll.d.ts.map