"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const CallbackCollector_1 = require("./CallbackCollector");
const File_1 = require("./File");
const MessageEntities_1 = require("./MessageEntities");
const Message_1 = require("../Types/Message");
const MessageReactions_1 = require("./MessageReactions");
const BaseClass_1 = require("./BaseClass");
class Message extends BaseClass_1.BaseClass {
    constructor(client, packet) {
        super(client);
        this.reactions = new MessageReactions_1.MessageReactions(this.client);
        this._patch(packet);
    }
    _patch(packet) {
        if ('entities' in packet) {
            this._entities = packet.entities;
            delete packet.entities;
        }
        if ('caption_entities' in packet) {
            this._caption_entities = packet.caption_entities;
            delete packet.caption_entities;
        }
        this.nest(packet, {}, (key, value) => {
            let files = [];
            let { client } = this;
            let packet = { ...value, client };
            switch (key) {
                case 'new_chat_photo':
                case 'photo':
                    for (let photo of value) {
                        files.push(new File_1.PhotoSize({ ...photo, client: this.client }));
                    }
                    return files;
                case 'thumbnail':
                    return new File_1.PhotoSize(packet);
                case 'animation':
                    return new File_1.Animation(packet);
                case 'audio':
                    return new File_1.Audio(packet);
                case 'document':
                    return new File_1.Document(packet);
                case 'sticker':
                    return new File_1.Sticker(packet);
                case 'video':
                    return new File_1.Video(packet);
                case 'video_note':
                    return new File_1.VideoNote(packet);
                case 'voice':
                    return new File_1.Voice(packet);
            }
        });
        return super._patch(packet);
    }
    /**
     * Replies a text message to the current message.
     *
     * @param text What the text will contain.
     */
    async replyText(text) {
        return this.reply(Message_1.MessagePayloadMethod.Text, { text });
    }
    /**
     * Replies an invoice message to the currenct message. Uses auxiliaries.
     *
     * @param id The id of the invoice.
     */
    async replyInvoice(id) {
        return this.reply(Message_1.MessagePayloadMethod.Invoice, { ...this.client.invoices.generate(id) });
    }
    /**
     * Replies a message to the current message.
     *
     * @param pointer The type or method of the message.
     * @param payload What the message will contain.
     * @param form_data FormData for uploading a media with the message.
     */
    async reply(pointer, payload, form_data) {
        return this.chat.send(pointer, { ...payload, message_thread_id: this.message_thread_id, reply_parameters: { message_id: this.message_id } }, form_data);
    }
    /**
     * Forwards the message to a chat.
     *
     * @param chat_id The chat to forward the message to.
     * @param payload Additional data for forwarding.
     */
    async forward(chat_id, payload) {
        const result = await this.manager.forward({ ...payload, chat_id }, this.message_id);
        return typeof result === 'boolean' ? result : Boolean(result[0]);
    }
    /**
     * Copies the message to a chat.
     *
     * @param chat_id The chat to copy the message to.
     * @param payload Additional data for copying.
     */
    async copy(chat_id, payload) {
        const result = await this.manager.copy({ ...payload, chat_id }, this.message_id);
        return typeof result === 'boolean' ? result : Boolean(result[0]);
    }
    /**
     * Pins the message.
     */
    async pin(disable_notification, business_connection_id) {
        return this.manager.pin(this.message_id, disable_notification, business_connection_id);
    }
    /**
     * Unpins the message.
     */
    async unpin(business_connection_id) {
        return this.manager.unpin(this.message_id, business_connection_id);
    }
    /**
     * Edits the message.
     *
     * @param payload The content of what the message will contain.
     */
    async edit(payload) {
        return this.manager.edit({ message_id: this.message_id, ...payload });
    }
    /**
     * Edits the caption of the message.
     *
     * @param payload The content of what the caption will contain.
     */
    async editCaption(payload) {
        return this.manager.editCaption({ message_id: this.message_id, ...payload });
    }
    /**
     * Edits the media of the message.
     *
     * @param payload The content of what the media will contain.
     */
    async editMedia(payload) {
        return this.manager.editMedia({ message_id: this.message_id, ...payload });
    }
    /**
     * Edits only the reply markup of the message.
     *
     * @param payload The content of what the reply markup will contain.
     * @returns
     */
    async editReplyMarkup(payload) {
        return this.manager.editReplyMarkup({ message_id: this.id, ...payload });
    }
    /**
     * Sets the reaction of the message.
     *
     * @param reaction The reactions.
     * @param is_big Pass *True* to set the reaction with a big animation
     */
    async setReaction(reaction, is_big) {
        return this.manager.setReaction({ message_id: this.id, reaction, is_big });
    }
    /**
     * Deletes the message.
     */
    async delete() {
        return this.chat.messages.delete(this.id);
    }
    createCallbackCollector(options) {
        return new CallbackCollector_1.CallbackCollector(this, options);
    }
    /**
     * Returns true if the message is a text and contains a command.
     */
    get command() {
        return Boolean(this.entities?.bot_commands().length);
    }
    get entities() {
        return new MessageEntities_1.MessageEntitiesStore(this.text ?? ' ', this._entities);
    }
    /**
     * The topic the message belongs to, only in supergroups.
     */
    get topic() {
        return this.message_thread_id ? this.chat?.topics.cache.get(this.message_thread_id) : undefined;
    }
    /**
     * The manager that holds the message.
     */
    get manager() {
        return this.chat.messages;
    }
    /**
     * The chat the messsage belongs to.
     */
    get chat() {
        return this.client.chats.cache.get(this._chat);
    }
    /**
     * The sender of the message on behalf of a chat.
     */
    get sender_chat() {
        return this._sender_chat ? this.client.chats.cache.get(this._sender_chat) : undefined;
    }
    /**
     * The user that sent the message as a member, not available in private chats.
     */
    get member() {
        return this.chat.members?.cache.get(this._from);
    }
    /**
     * The sender of the message.
     */
    get user() {
        return this._from ? this.client.users.cache.get(this._from) : undefined;
    }
    // public get epoch(){
    //     const date = new Date(this.date ?? 0 * 1000),
    //             options:  Intl.DateTimeFormatOptions = {
    //             year: 'numeric',
    //             month: 'short',
    //             day: 'numeric',
    //             hour: 'numeric',
    //             minute: 'numeric',
    //             second: 'numeric',
    //             timeZoneName: 'short',
    //             }
    //     return date.toLocaleString(undefined, options)
    // }
    /**
     * The id of the message.
     */
    get id() {
        return this.message_id;
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map