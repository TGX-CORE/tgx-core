import type { MessagePacket, MessageEditPayload, MessagecaptionEditPayload, MessageMediaEditPayload, MessageReplyMarkupEditPayload, ForwardPayload } from '../Client/Managers/MessagesManager'
import type { CallbackCollector, CallbackCollectorOptions } from './CallbackCollector'
import type { MessagePayload, Chat, CopyMessagePayload } from '../Types/Message'
import type { MessagesManager } from '../Client/Managers/MessagesManager'
import type { MessageEntityPayload } from '../Types/MessageEntity'
import type { FormDataBuilder } from '../Builders/FormData'
import type { CallbackQuery } from './CallbackQuery'
import type { Invoice } from '../Builders/Invoice'
import type { Client } from '../Client/Client'
import type { ForumTopic } from './ForumTopic'


import { Animation, Audio, Document, PhotoSize, Sticker, Video, VideoNote, Voice } from './File'
import { MessageEntitiesStore } from './MessageEntities'
import { MessagePayloadMethod } from '../Types/Message'
import { MessageReactions } from './MessageReactions'
import { Reactions } from '../Builders/Reactions'
import { BaseClass } from './BaseClass'
import { User } from './User'

import { nest } from '../Internals/shared'

export class Message extends BaseClass<Message, MessagePacket> implements Omit<MessagePacket, 'entities'|'caption_entities'> {

    private readonly declare _chat: number
    private readonly _from?: number
    private readonly _sender_chat?: number

    public declare message_id: number
    public declare date: number

    public message_thread_id?: number 
    public text?: string
    
    public reactions: MessageReactions
    public audio?: Audio
    public animation?: Animation
    public document?: Document
    public new_chat_photo?: PhotoSize[]
    public photo?: PhotoSize[]
    public sticker?: Sticker
    public video?: Video
    public video_note?: VideoNote
    public voice?: Voice

    /**
     * @hidden
     */
    public _entities?: MessageEntityPayload[]

    /**
     * @hidden
     */
    public _caption_entities?: MessageEntityPayload[]

    public constructor(client: Client, packet: MessagePacket) {
        super(client)

        this.reactions = new MessageReactions(this.client)

        this._patch(packet)
    }

    public override _patch(packet: MessagePacket): this {
        if('entities' in packet){
            this._entities = packet.entities
            delete packet.entities
        }

        if('caption_entities' in packet){
            this._caption_entities = packet.caption_entities
            delete packet.caption_entities
        }

        nest(packet, { merge: true }, (key, value) => {
            let files: any = [ ]
            let { client: { rest } } = this
            let packet = { ...value, rest }
            switch(key){
                case 'new_chat_photo':
                case 'photo':
                    for(let photo of value){
                        files.push(new PhotoSize({ ...photo, client: this.client }))
                    }
                    return files
                case 'thumbnail':
                    return new PhotoSize(packet)
                case 'animation':
                    return new Animation(packet)
                case 'audio':
                    return new Audio(packet)
                case 'document':
                    return new Document(packet)
                case 'sticker':
                    return new Sticker(packet)
                case 'video':
                    return new Video(packet)
                case 'video_note':
                    return new VideoNote(packet)
                case 'voice':
                    return new Voice(packet)
            }
        })

        return super._patch(packet)
    }

    /**
     * Replies a text message to the current message.
     * 
     * @param text What the text will contain.
     */
    public async replyText(text: string): Promise<Message|boolean> {
        return this.reply(MessagePayloadMethod.Text, { text })
    }

    /**
     * Replies an invoice message that must be an invoice and not a link to the currenct message.
     * 
     * @param id The id of the invoice.
     */
    public async replyInvoice(id: string){
        return this.reply(MessagePayloadMethod.Invoice, this.client.invoices.generate(id) as Invoice)
    }

    /**
     * Replies a message to the current message.
     * 
     * @param pointer The type or method of the message.
     * @param payload What the message will contain.
     * @param form_data FormData for uploading a media with the message.
     */
    public async reply(pointer: MessagePayloadMethod, payload: Partial<MessagePayload>, form_data?: FormDataBuilder): Promise<Message|boolean> {
        return this.chat.send(pointer, { ...payload, message_thread_id: this.message_thread_id, reply_parameters: { message_id: this.message_id }}, form_data)
    }

    /**
     * Forwards the message to a chat.
     * 
     * @param chat_id The chat to forward the message to.
     * @param payload Additional data for forwarding.
     */
    public async forward(chat_id: string|number, payload: ForwardPayload): Promise<boolean> {
        const result = await this.manager.forward({ ...payload, chat_id }, this.message_id)
        return typeof result === 'boolean' ? result : Boolean(result[0])
    }

    /**
     * Copies the message to a chat.
     * 
     * @param chat_id The chat to copy the message to.
     * @param payload Additional data for copying.
     */
    public async copy(chat_id: string|number, payload: CopyMessagePayload): Promise<boolean> {
        const result = await this.manager.copy({ ...payload, chat_id }, this.message_id)
        return typeof result === 'boolean' ? result : Boolean(result[0])
    }

    /**
     * Pins the message.
     */
    public async pin(disable_notification?: boolean, business_connection_id?: string): Promise<boolean> {
        return this.manager.pin(this.message_id, disable_notification, business_connection_id)
    }

    /**
     * Unpins the message.
     */
    public async unpin(business_connection_id: string): Promise<boolean> {
        return this.manager.unpin(this.message_id, business_connection_id)
    }

    /**
     * Edits the message.
     * 
     * @param payload The content of what the message will contain.
     */
    public async edit(payload: MessageEditPayload): Promise<Message|boolean> {
        return this.manager.edit({ message_id: this.message_id, ...payload })
    }

    /**
     * Edits the caption of the message.
     * 
     * @param payload The content of what the caption will contain.
     */
    public async editCaption(payload: MessagecaptionEditPayload): Promise<Message|boolean> {
        return this.manager.editCaption({ message_id: this.message_id, ...payload })
    }

    /**
     * Edits the media of the message.
     * 
     * @param payload The content of what the media will contain.
     */
    public async editMedia(payload: MessageMediaEditPayload): Promise<Message|boolean> {
        return this.manager.editMedia({ message_id: this.message_id, ...payload })
    }

    /**
     * Edits only the reply markup of the message.
     * 
     * @param payload The content of what the reply markup will contain.
     * @returns 
     */
    public async editReplyMarkup(payload: MessageReplyMarkupEditPayload): Promise<Message|boolean> {
        return this.manager.editReplyMarkup({ message_id: this.id, ...payload})
    }

    /**
     * Sets the reaction of the message.
     * 
     * @param reaction The reactions.
     * @param is_big Pass *True* to set the reaction with a big animation
     */
    public async setReaction(reaction: Reactions, is_big?: boolean): Promise<boolean> {
        return this.manager.setReaction({ message_id: this.id, reaction, is_big })
    }

    /**
     * Deletes the message.
     */
    public async delete(): Promise<boolean> {
        return this.chat.messages.delete(this.id)
    }

    /**
     * Creates a callback query collector to the chat of the message while filtering only relevant to the message.
     * 
     * @param options The options for the collector, the filter is unoverridable.
     * @param filter Additional conditions to the filter.
     */
    public createCallbackCollector(options: CallbackCollectorOptions, filter?: (query: CallbackQuery) => any): CallbackCollector {
        return this.chat.createCallbackCollector({
            ...options,
            filter: (query: CallbackQuery) => query.message.message_id === this.id && (filter ?? (() => true))(query)
        })
    }

    /**
     * Returns true if the message is a text and contains a command.
     */
    public get command(): boolean {
        return Boolean(this.entities?.bot_commands().length)
    }

    public get entities(): MessageEntitiesStore {
        return new MessageEntitiesStore(this.text ?? ' ', this._entities)
    }

    /**
     * The topic the message belongs to, only in supergroups.
     */
    public get topic(): ForumTopic|undefined {
        return this.message_thread_id ? this.chat?.topics.cache.get(this.message_thread_id) : undefined
    }

    /**
     * The manager that holds the message.
     */
    public get manager(): MessagesManager {
        return this.chat.messages
    }

    /**
     * The chat the messsage belongs to.
     */
    public get chat(): Chat {
        return this.client.chats.cache.get(this._chat)!
    }

    /**
     * The sender of the message on behalf of a chat.
     */
    public get sender_chat(): Chat|undefined {
        return this._sender_chat ? this.client.chats.cache.get(this._sender_chat) : undefined
    }

    /**
     * The user that sent the message as a member, not available in private chats.
     */
    public get member(): Message|undefined {
        return this.chat.members?.cache.get(this._from)
    }

    /**
     * The sender of the message as a user as a user.
     */
    public get user(): User|undefined { 
        return this._from ? this.client.users.cache.get(this._from) : undefined
    }

    /**
     * Gets the sender of the message, it can be a user or a chat.
     */
    public get from(): User|Chat {
        return this.sender_chat ?? this.user!
    }

    /**
     * Gets the language code of the sender.
     */
    public get language_code(): string|undefined {
        return this.from?.language_code
    }

    /**
     * The id of the message.
     */
    public get id(): number {
        return this.message_id
    }

}