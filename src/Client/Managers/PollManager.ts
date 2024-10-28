import type { BusinessConnectionPacket, BusinessMessagesDeletedPacket } from '../../Types/BusinessConnection'
import type { ChosenInlineResultPacket } from '../../Classes/InlineQueryChosenResult'
import type { MessageReactionCountPacket } from '../../Classes/MessageReactionCount'
import type { ChatBoostUpdated, ChatBoostRemoved } from '../../Types/Chatboost'
import type { ChatMemberUpdatedPacket } from '../../Classes/ChatMemberUpdated'
import type { PreCheckoutQueryPacket } from '../../Classes/PreCheckoutQuery'
import type { ChatJoinRequestPacket } from '../../Classes/ChatJoinRequest'
import type { MessageReactionPacket } from '../../Classes/MessageReaction'
import type { ShippingQueryPacket } from '../../Classes/ShippingQuery'
import type { CallbackQueryPacket } from '../../Classes/CallbackQuery'
import type { PaidMediaPurchasedPacket } from '../../Types/Common'
import type { InlineQueryPacket } from '../../Classes/InlineQuery'
import type { PollAnswerPacket } from '../../Classes/PollAnswer'
import type { MessagePacket } from './MessagesManager'
import type { PollPacket } from '../../Classes/Poll'
import type { Client } from '../Client'

import { AllowedUpdatesOptions } from '../../Builders/AllowedOptions'
import { BaseManager } from './BaseManager'
import { ClientEvent } from '../../Types/ClientEvent'

export interface UpdatePacket {
    update_id: number
    message?: MessagePacket
    edited_message?: MessagePacket
    channel_post?: MessagePacket
    edited_channel_post?: MessagePacket
    business_connection?: BusinessConnectionPacket
    business_message?: MessagePacket
    edited_business_message?: MessagePacket
    deleted_business_messages?: BusinessMessagesDeletedPacket
    message_reaction?: MessageReactionPacket
    message_reaction_count?: MessageReactionCountPacket
    inline_query?: InlineQueryPacket
    chosen_inline_result?: ChosenInlineResultPacket
    callback_query?: CallbackQueryPacket
    shipping_query?: ShippingQueryPacket
    pre_checkout_query?: PreCheckoutQueryPacket
    purchased_paid_media?: PaidMediaPurchasedPacket
    poll?: PollPacket
    poll_answer?: PollAnswerPacket
    my_chat_member?: ChatMemberUpdatedPacket
    chat_member?: ChatMemberUpdatedPacket
    chat_join_request?: ChatJoinRequestPacket
    chat_boost?: ChatBoostUpdated
    removed_chat_boost?: ChatBoostRemoved
}  

export enum AllowedUpdates {

    All = 'all',

    Poll = 'poll',
    PollAnswer = 'poll_answer',

    Message = 'message',
    EditedMessage = 'edited_message',

    ChatMember = 'chat_member',
    ChatJoinRequest = 'chat_join_request',

    InlineQuery = 'inline_query',
    CallbackQuery = 'callback_query',
    ChosenInlineResult = 'chosen_inline_result',

    ChannelPost = 'channel_post',
    EditedChannelPost = 'edited_channel_post',

    MessageReaction = 'message_reaction',
    MessageReactionCount = 'message_reaction_count'
    
}

export interface PollManagerOptions {

    /**
     * Limits the number of updates to be retrieved. Values between 1-100 are accepted.
     */
    limit?: number

    /**
     * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
     * @default 0
     */
    timeout?: number

    /**
     * The allowed updates to receive by the client.
     * @default [AllowedUpdates.Message]
     */
    allowed_updates?: AllowedUpdatesOptions

    /**
     * The delay before sending another request in milliseconds for long polling.
     * @default 5_000
     */
    delay?: number

    /**
     * Whether to not emit updates from self.
     * @default true
     */
    ignore_self?: boolean

    /**
     * Whether to not emit updates from other bots.
     * @default true
     */
    ignore_bots?: boolean

    /**
     * Wheter to not emit updates from sender chats.
     * @default false
     */
    ignore_sender_chats?: boolean
    
}

export class PollManager extends BaseManager<PollManagerOptions> {

    public active: boolean = false
    public offset?: number
    public interluder?: NodeJS.Timeout

    public constructor(client: Client){
        super(client, 'poll', {
            limit: 100,
            timeout: 0,
            delay: 5_000,
            allowed_updates: new AllowedUpdatesOptions(AllowedUpdates.Message),
            ignore_self: true,
            ignore_bots: true,
            ignore_sender_chats: false
        })

    }

    /**
     * Enable or disable the poll manager.
     */
    public switch(): void {
        this.active = !this.active
        clearTimeout(this.interluder)
    }

    /**
     * Handles an incoming update packet from Telegram.
     * 
     * @param update The packet response from Telegram.
     */
    public handle(update: UpdatePacket|UpdatePacket[]){
        if(Array.isArray(update)){
            for(let data of update){
                this.handle(data)
            }
        } else {
            for(let pointer in update){
                this.offset = update.update_id
                if(!Object.values(ClientEvent).includes(pointer as ClientEvent)) continue
                this.client.emit(ClientEvent.Raw, pointer, (update as any)[pointer])
                if(this.client.actions[pointer]) this.client.actions[pointer].handle((update as any)[pointer])
                else this.client.emit(ClientEvent.Unhandled, update)
            }
        }
    }

    public async initialize(): Promise<void> {
        this.client.logger.debug('Client is ready, PollManager is preparing to start.')
        this.active = true
        this.interlude()
    }

    private async interlude(): Promise<void> {
        var message = await this.poll()
        if(message) this.handle(message)
        this.interluder = setTimeout(() => {
            this.active ?
                this.interlude()
            :   null
        }, this.options.delay)
    }

    private async poll(): Promise<any> {
        var { limit, allowed_updates, timeout } = this.options,
            { offset } = this
        return this.client.api.getUpdates(null, {
            params: {
                limit, allowed_updates, timeout, offset
            },
            lean: true,
            result: true
        })
    }
    
}