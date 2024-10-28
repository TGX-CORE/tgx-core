import type { BusinessConnectionPacket, BusinessMessagesDeletedPacket } from './BusinessConnection'
import type { AllowedUpdatesOptions } from '../Builders/AllowedOptions'
import type { CallbackQueryPacket } from '../Classes/CallbackQuery'
import type { ChatJoinRequestPacket } from '../Classes/ChatJoinRequest'
import type { ChatMemberUpdatedPacket } from '../Classes/ChatMemberUpdated'
import type { InlineQueryPacket } from '../Classes/InlineQuery'
import type { ChosenInlineResultPacket } from '../Classes/InlineQueryChosenResult'
import type { MessageReactionPacket } from '../Classes/MessageReaction'
import type { MessageReactionCountPacket } from '../Classes/MessageReactionCount'
import type { PollPacket } from '../Classes/Poll'
import type { PollAnswerPacket } from '../Classes/PollAnswer'
import type { PreCheckoutQueryPacket } from '../Classes/PreCheckoutQuery'
import type { ShippingQueryPacket } from '../Classes/ShippingQuery'
import type { MessagePacket } from '../Client/Managers/MessagesManager'
import type { ChatBoostRemoved, ChatBoostUpdated } from './Chatboost'
import type { PaidMediaPurchasedPacket } from './Common'

/**
 * Available methods for parsing and receiving updates from Telegram.
 * 
 * @property Poll Default long polling method.
 * @property Webhook Instead of long polling, opens a webhook endpoint to receive updates.
 * @property UpdatePacket If you have your own method of receiving updates, you can manually send updates to the client instead.
 */
export enum Endpoint {
    Poll = 'poll',
    Webhook = 'webhook',
    UpdatePacket = 'update'
}

export type EndpointOptions = WebhookEndpointOptions|PollEndpointOptions|UpdateEndpointOptions
export interface WebhookEndpointOptions {
    type: Endpoint.Webhook
    url?: string
    endpoint?: string
    port?: number
    update?: boolean
    secret_token?: string
    ip_address?: string
    drop_pending_updates?: boolean
    max_connections?: number
    certificate?: string|File
    handle?: EndpointHandlingOptions
} 

export interface PollEndpointOptions {
    type: Endpoint.Poll
    limit?: number
    timeout?: number
    allowed_updates?: AllowedUpdatesOptions
    delay?: number
    ignore_self?: boolean
    ignore_bots?: boolean
    ignore_sender_chats?: boolean
    handle?: EndpointHandlingOptions
}

export interface UpdateEndpointOptions {
    type: Endpoint.UpdatePacket
    handle?: EndpointHandlingOptions
}

export interface EndpointHandlingOptions {
    ignore_sender_chats?: boolean
    ignore_self?: boolean
    ignore_bots?: boolean
}

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

/**
 * The information about a webhook.
 * 
 * @reference https://core.telegram.org/bots/api#webhookinfo
 */
export interface WebhookInfo {
    url: string
    has_custom_certificate: boolean
    pending_update_count: number
    ip_address?: string
    last_error_date?: number
    last_error_message?: string
    last_synchronization_error_date?: number
    max_connections?: number
    allowed_updates?: AllowedUpdates[]
} 