import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard'
import type { MessageEntities } from '../Builders/MessageEntities'
import type { MessageEntityPayload } from '../Types/MessageEntity'
import type { PollOption } from '../Builders/PollOptions'
import type { Client } from '../Client/Client'

import { Routes } from '../Types/Routes'
import { BaseClass } from './BaseClass'
import { BaseChat } from './BaseChat'

import { has } from '../Internals/shared'

export interface PollPacket {
    id: string
    question: string
    chat_id?: number
    message_id?: number
    business_connection_id?: string
    question_entities: MessageEntities|MessageEntityPayload[]
    options: PollOption[]
    total_voter_count: number
    is_closed: boolean
    is_anonymous: boolean
    type: 'regular'|'quiz'
    allows_multiple_answers: boolean
    correct_option_id?: number
    explanation?: string
    explanation_entities?: MessageEntities|MessageEntityPayload[]
    open_period?: number
    close_date?: number
}

export class PollAnswers { 

    public records: { [key: number]: number[] } = { }

    public constructor(options: PollOption[]){
        for(let i = 0; i < options.length; i++){
            this.records[i] = [ ]
        }
    }

    /**
     * Updates the answers of a user.
     * 
     * @param user_id The id of the user.
     * @param ids The ids of the answers of the users.
     */
    public update(user_id: number, ids: number[]){
        for(let id in this.records){
            const int = Number(id)
            if(this.answered(int, user_id) && !has(ids, int)){
                const index = this.records[int]!.indexOf(user_id)
                this.records[int]!.splice(index, 1)
            }

            if(!this.answered(int, user_id) && has(ids, int)){
                this.records[int]!.push(user_id)
            }
        }
    }

    /**
     * Checks if the user has answered an answer with the id.
     * 
     * @param id The id of the answer.
     * @param user_id The id of the user to check.
     */
    public answered(id: number, user_id: number): boolean {
        return has(this.records[id]!, user_id)
    }

}

export class Poll extends BaseClass<Poll, PollPacket> implements Partial<PollPacket> {

    public declare id: string
    public declare is_anonymous: boolean

    private declare _message: number
    private declare _chat: number

    public answers?: PollAnswers
    public business_connection_id?: string
    
    public constructor(client: Client, packet: PollPacket){
        super(client, packet)

        if('options' in packet && !this.is_anonymous){
            this.answers = new PollAnswers(packet.options)
        }

        this._patch(packet)
    }

    public async stop(reply_markup?: InlineKeyboardMarkup): Promise<boolean> {
        const { _message: message_id, _chat: chat_id, business_connection_id } = this
        return this.client.rest.post(Routes.StopPoll, { message_id, chat_id, business_connection_id, reply_markup }, { ok: true })
    }

    public get chat(): InstanceType<typeof BaseChat>|undefined {
        return this._chat ? this.client.chats.cache.get(this._chat) : undefined
    }

}