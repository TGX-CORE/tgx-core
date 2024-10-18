import type { AnimationFilePacket, AudioFilePacket, DocumentFilePacket, PhotoSizeFilePacket, StickerFilePacket, VideoFilePacket, VideoNoteFilePacket, VoiceFilePacket } from '../../Types/File'
import type { ChatBackground, ForumTopicClosed, ForumTopicCreated, ForumTopicEdited, ForumTopicReopened, GeneralForumTopicHidden, GeneralForumTopicUnhidden, Giveaway, GiveawayCompleted, GiveawayCreated, GiveawayWinners, VideoChatEnded, VideoChatParticipantsInvited, VideoChatScheduled, VideoChatStarted } from '../../Types/Chat'
import type { ContactPayload, CopyMessagePayload, DicePayload, ExternalReplyInfo, InaccessibleMessage, MessageAutoDeleteTimerChanged, MessageOrigin, MessageReactionPayload, PaidMediaInfo, VenuePayload } from '../../Types/Message'
import type { ChatShared, GamePacket, ProximityAlertTriggered, RefundedPaymentPacket, StoryPacket, TextQuote, UsersShared,  WebAppData, WriteAccessAllowed } from '../../Types/Common'
import type { Animation, Audio, PhotoSize, Sticker, VideoNote, Video, Voice } from '../../Classes/File'
import type { InlineKeyboardMarkup } from '../../Builders/InlineKeyboard'
import type { LinkPreviewOptions } from '../../Types/InputMessageContent'
import type { SuccessfulPayment } from '../../Classes/SuccessfulPayment'
import type { MessageEntities } from '../../Builders/MessageEntities'
import type { MessageEntityPayload } from '../../Types/MessageEntity'
import type { InputMediaBuilder } from '../../Builders/InputMedia'
import type { BaseChat, ChatPacket } from '../../Classes/BaseChat'
import type { PassportData } from '../../Types/Passport'
import type { PollPacket } from '../../Classes/Poll'
import type { UserPacket } from '../../Classes/User'

import { CachedManager } from './CachedManager'
import { Message } from '../../Classes/Message'
import { SendInvoicePayload } from '../../Types/Invoice'
import { ChatBoostAdded } from '../../Types/Chatboost'
import { MessageEntitiesStore } from '../../Classes/MessageEntities'

export interface ForwardPayload {
    chat_id: string|number
    message_thread_id?: number
    from_chat_id: string|number
    message_ids: Array<number>
    disable_notification?: boolean
    protect_content?: boolean
}

export interface MessageEditPayload {
    business_connection_id: string
    chat_id?: number|string
    message_id?: number
    inline_message_id?: number
    parse_mode?: string
    text: string
    entities: MessageEntities|MessageEntityPayload[]
    link_preview_options?: LinkPreviewOptions
    reply_markup?: InlineKeyboardMarkup
}

export interface MessagePacket {
    edited?: boolean
    message_id: number
    message_thread_id?: number
    from?: UserPacket
    sender_chat?: ChatPacket
    sender_boost_count?: number
    sender_business_bot?: UserPacket
    date: number
    business_connection_id?: string
    chat?: ChatPacket
    forward_origin?: MessageOrigin
    is_topic_message?: true
    is_automatic_forward?: true
    reply_to_message?: Message
    external_reply?: ExternalReplyInfo
    quote?: TextQuote
    reply_to_story?: StoryPacket
    via_bot?: UserPacket
    edit_date?: number
    has_protected_content?: true
    is_from_offline?: true
    media_group_id?: string
    author_signature?: string
    text?: string
    entities?: MessageEntityPayload[]
    link_preview_options?: LinkPreviewOptions
    effect_id?: string
    animation?: AnimationFilePacket
    audio?: AudioFilePacket
    document?: DocumentFilePacket
    paid_media?: PaidMediaInfo
    photo?: PhotoSizeFilePacket[]
    sticker?: StickerFilePacket
    story?: StoryPacket
    video?: VideoFilePacket
    video_note?: VideoNoteFilePacket
    voice?: VoiceFilePacket
    caption?: string
    caption_entities?: MessageEntityPayload[]
    show_caption_above_media?: true
    has_media_spoiler?: true
    contact?: ContactPayload
    dice?: DicePayload
    game?: GamePacket
    poll?: PollPacket
    venue?: VenuePayload
    location?: Location
    new_chat_members?: UserPacket[]
    left_chat_member?: UserPacket
    new_chat_title?: string
    new_chat_photo?: PhotoSizeFilePacket[]
    delete_chat_photo?: true
    group_chat_created?: true
    supergroup_chat_created?: true
    channel_chat_created?: true
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged
    migrate_to_chat_id?: number
    migrate_from_chat_id?: number
    pinned_message?: InaccessibleMessage
    invoice?: SendInvoicePayload
    successful_payment?: SuccessfulPayment
    refunded_payment?: RefundedPaymentPacket
    users_shared?: UsersShared
    chat_shared?: ChatShared
    connected_website?: string
    write_access_allowed?: WriteAccessAllowed
    passport_data?: PassportData
    proximity_alert_triggered?: ProximityAlertTriggered
    boost_added?: ChatBoostAdded
    chat_background_set?: ChatBackground
    forum_topic_created?: ForumTopicCreated
    forum_topic_edited?: ForumTopicEdited
    forum_topic_closed?: ForumTopicClosed
    forum_topic_reopened?: ForumTopicReopened
    general_forum_topic_hidden?: GeneralForumTopicHidden
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden
    giveaway?: Giveaway
    giveaway_created?: GiveawayCreated
    giveaway_winners?: GiveawayWinners
    giveaway_completed?: GiveawayCompleted
    video_chat_scheduled?: VideoChatScheduled
    video_chat_started?: VideoChatStarted
    video_chat_ended?: VideoChatEnded
    video_chat_participants_invited?: VideoChatParticipantsInvited
    web_app_data?: WebAppData
    reply_markup?: InlineKeyboardMarkup
}

export interface MessagecaptionEditPayload {
    business_connection_id?: string
    chat_id?: number|string  
    message_id?: number
    inline_message_id?: number
    caption?: string
    parse_mode?: string
    caption_entities: MessageEntities|MessageEntityPayload[]
    show_caption_above_media?: boolean
    reply_markup?: InlineKeyboardMarkup
}

export interface MessageMediaEditPayload {
    business_connection_id?: string
    chat_id?: string|number
    message_id?: number
    inline_message_id?: number
    media: InputMediaBuilder
    reply_markup?: InlineKeyboardMarkup
}

export interface MessageReplyMarkupEditPayload {
    business_connection_id?: string
    chat_id?: string|number
    message_id?: number
    inline_message_id?: number
    reply_markup?: InlineKeyboardMarkup
}

export class MessagesManager extends CachedManager<number, Message> {

    public chat: InstanceType<typeof BaseChat>

    constructor(chat: InstanceType<typeof BaseChat>){
        super(chat.client, Message)
        this.chat = chat
    }

    /**
     * Pins a message.
     */
    public async pin(message_id: number, disable_notification?: boolean, business_connection_id?: string): Promise<boolean> {
        return this.client.api.pinChatMessage(null, {
            params: { chat_id: this.chat.id, message_id, disable_notification, business_connection_id },
            returnOk: true
        })
    }

    /**
     * Unpins a message.
     */
    public async unpin(message_id: number, business_connection_id: string): Promise<boolean> {
        return this.client.api.unpinChatMessage(null, {
            params: { chat_id: this.chat.id, message_id, business_connection_id },
            returnOk: true
        })
    }

    /**
     * Unpin all pinned messages.
     */
    public async unpinAll(): Promise<boolean> {
        return this.client.api.unpinAllChatMessages(null, {
            params: { chat_id: this.chat.id },
            returnOk: true
        })
    }

    /**
     * Delete or bulk delete messages.
     */
    public async delete(...message_ids: number[]): Promise<boolean> {
        return this.client.api.deleteMessages(null, {
            params: { chat_id: this.chat.id, message_ids: JSON.stringify(message_ids)},
            returnOk: true
        })
    }

    /**
     * Edits a message that belongs to this manager.
     * 
     * @param payload The payload data of the edit.
     */
    public async edit(payload: MessageEditPayload): Promise<Message|boolean> {
        const result = await this.client.api.editMessageText(null, {
            params: { chat_id: this.chat.id, ...payload, },
            lean: true,
            result: true
        })
        return typeof result ===  'boolean' ? result : this.client.actions.message.handle(result)
    }

    /**
     * Forward messages that belongs to this manager.
     * 
     * @param payload The payload data of the forward.
     * @param message_ids The ids of the messages to forward.
     */
    public async forward(payload: ForwardPayload, ...message_ids: Array<string|number>): Promise<number[]|boolean> {
        const result =  this.client.api.forwardMessages(null, {
            params: { ...payload, from_chat_id: this.chat.id, message_ids: JSON.stringify(message_ids) },
            lean: true,
            result: true
        })
        return typeof result ===  'boolean' ? result : this.client.actions.message.handle(result)
    }

    /**
     * Copy messages of that belongs to this manager.
     * 
     * @param payload The payload data of the copy.
     * @param message_ids The ids of the messages to forward.
     */
    public async copy(payload: CopyMessagePayload, ...message_ids: number[]): Promise<boolean> {
        const result = this.client.api.copyMessages(null, {
            params: { ...payload, from_chat_id: this.chat.id, message_ids: JSON.stringify(message_ids)},
            lean: true,
            result: true
        })
        return typeof result ===  'boolean' ? result : this.client.actions.message.handle(result)
    }

    /**
     * Edits the caoption of a message that belongs to this manager.
     * 
     * @param payload the payload data of the caption.
     */
    public async editCaption(payload: MessagecaptionEditPayload): Promise<Message|boolean> {
        const result = await this.client.api.editMessageCaption(null, {
            params: { chat_id: this.chat.id, ...payload },
            lean: true,
            result: true
        })
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result)
    }

    /**
     * Edits the media of a message that belongs to this manager.
     * 
     * @param payload The payload data of the media.
     */
    public async editMedia(payload: MessageMediaEditPayload): Promise<Message|boolean> {
        const result = await this.client.api.editMessageMedia(null, {
            params: { chat_id: this.chat.id, ...payload },
            lean: true,
            result: true
        })
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result)
    }

    /**
     * Edits the reply markup of a message that belongs to this manager.
     * 
     * @param payload The payload data of the reply markup.
     */
    public async editReplyMarkup(payload: MessageReplyMarkupEditPayload): Promise<Message|boolean> {
        const result = await this.client.api.editMessageReplyMarkup(null, {
            params: { chat_id: this.chat.id, ...payload },
            lean: true,
            result: true
        })
        return typeof result === 'boolean' ? result : this.client.actions.message.handle(result)
    }

    /**
     * Sets the reaction of a message that belongs to this manager.
     * 
     * @param payload The payload data of the reaction.
     */
    public async setReaction(payload: MessageReactionPayload): Promise<boolean> {
        return this.client.api.setMessageReaction(null, {
            params: { ...payload, chat_id: this.chat.id, },
            returnOk: true
        })
    }

}