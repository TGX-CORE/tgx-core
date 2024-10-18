import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard';
import type { MessageEntities } from '../Builders/MessageEntities';
import type { MessageEntityPayload } from '../Types/MessageEntity';
import type { PollOption } from '../Builders/PollOptions';
import type { Client } from '../Client/Client';
import { BaseClass } from './BaseClass';
import { BaseChat } from './BaseChat';
export interface PollPacket {
    id: string;
    question: string;
    chat_id?: number;
    message_id?: number;
    business_connection_id?: string;
    question_entities: MessageEntities | MessageEntityPayload[];
    options: PollOption[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: 'regular' | 'quiz';
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: MessageEntities | MessageEntityPayload[];
    open_period?: number;
    close_date?: number;
}
export declare class PollAnswers {
    records: {
        [key: number]: number[];
    };
    constructor(options: PollOption[]);
    /**
     * Updates the answers of a user.
     *
     * @param user_id The id of the user.
     * @param ids The ids of the answers of the users.
     */
    update(user_id: number, ids: number[]): void;
    /**
     * Checks if the user has answered an answer with the id.
     *
     * @param id The id of the answer.
     * @param user_id The id of the user to check.
     */
    answered(id: number, user_id: number): boolean;
}
export declare class Poll extends BaseClass<Poll, PollPacket> implements Partial<PollPacket> {
    id: string;
    is_anonymous: boolean;
    private _message;
    private _chat;
    answers?: PollAnswers;
    business_connection_id?: string;
    constructor(client: Client, packet: PollPacket);
    stop(reply_markup?: InlineKeyboardMarkup): Promise<boolean>;
    get chat(): InstanceType<typeof BaseChat> | undefined;
}
