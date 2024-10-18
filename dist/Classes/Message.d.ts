import type { MessagePacket, MessageEditPayload, MessagecaptionEditPayload, MessageMediaEditPayload, MessageReplyMarkupEditPayload, ForwardPayload } from '../Client/Managers/MessagesManager';
import { CallbackCollector, type CallbackCollectorOptions } from './CallbackCollector';
import type { MessagePayload, Chat, CopyMessagePayload } from '../Types/Message';
import type { MessagesManager } from '../Client/Managers/MessagesManager';
import type { MessageEntityPayload } from '../Types/MessageEntity';
import type { FormDataBuilder } from '../Builders/FormData';
import type { Client } from '../Client/Client';
import type { ForumTopic } from './ForumTopic';
import { Animation, Audio, Document, PhotoSize, Sticker, Video, VideoNote, Voice } from './File';
import { MessageEntitiesStore } from './MessageEntities';
import { MessagePayloadMethod } from '../Types/Message';
import { MessageReactions } from './MessageReactions';
import { Reactions } from '../Builders/Reactions';
import { BaseClass } from './BaseClass';
import { User } from './User';
export declare class Message extends BaseClass<Message, MessagePacket> implements Omit<MessagePacket, 'entities' | 'caption_entities'> {
    private readonly _chat;
    private readonly _from?;
    private readonly _sender_chat?;
    message_id: number;
    date: number;
    message_thread_id?: number;
    text?: string;
    reactions: MessageReactions;
    audio?: Audio;
    animation?: Animation;
    document?: Document;
    new_chat_photo?: PhotoSize[];
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    video_note?: VideoNote;
    voice?: Voice;
    /**
     * @hidden
     */
    _entities?: MessageEntityPayload[];
    /**
     * @hidden
     */
    _caption_entities?: MessageEntityPayload[];
    constructor(client: Client, packet: MessagePacket);
    _patch(packet: MessagePacket): this;
    /**
     * Replies a text message to the current message.
     *
     * @param text What the text will contain.
     */
    replyText(text: string): Promise<Message | boolean>;
    /**
     * Replies a message to the current message.
     *
     * @param pointer The type or method of the message.
     * @param payload What the message will contain.
     * @param form_data FormData for uploading a media with the message.
     */
    reply(pointer: MessagePayloadMethod, payload: Partial<MessagePayload>, form_data?: FormDataBuilder): Promise<Message | boolean>;
    /**
     * Forwards the message to a chat.
     *
     * @param chat_id The chat to forward the message to.
     * @param payload Additional data for forwarding.
     */
    forward(chat_id: string | number, payload: ForwardPayload): Promise<boolean>;
    /**
     * Copies the message to a chat.
     *
     * @param chat_id The chat to copy the message to.
     * @param payload Additional data for copying.
     */
    copy(chat_id: string | number, payload: CopyMessagePayload): Promise<boolean>;
    /**
     * Pins the message.
     */
    pin(disable_notification?: boolean, business_connection_id?: string): Promise<boolean>;
    /**
     * Unpins the message.
     */
    unpin(business_connection_id: string): Promise<boolean>;
    /**
     * Edits the message.
     *
     * @param payload The content of what the message will contain.
     */
    edit(payload: MessageEditPayload): Promise<Message | boolean>;
    /**
     * Edits the caption of the message.
     *
     * @param payload The content of what the caption will contain.
     */
    editCaption(payload: MessagecaptionEditPayload): Promise<Message | boolean>;
    /**
     * Edits the media of the message.
     *
     * @param payload The content of what the media will contain.
     */
    editMedia(payload: MessageMediaEditPayload): Promise<Message | boolean>;
    /**
     * Edits only the reply markup of the message.
     *
     * @param payload The content of what the reply markup will contain.
     * @returns
     */
    editReplyMarkup(payload: MessageReplyMarkupEditPayload): Promise<Message | boolean>;
    /**
     * Sets the reaction of the message.
     *
     * @param reaction The reactions.
     * @param is_big Pass *True* to set the reaction with a big animation
     */
    setReaction(reaction: Reactions, is_big?: boolean): Promise<boolean>;
    /**
     * Deletes the message.
     */
    delete(): Promise<boolean>;
    createCallbackCollector(options: CallbackCollectorOptions): CallbackCollector;
    /**
     * Returns true if the message is a text and contains a command.
     */
    get command(): boolean;
    get entities(): MessageEntitiesStore;
    /**
     * The topic the message belongs to, only in supergroups.
     */
    get topic(): ForumTopic | undefined;
    /**
     * The manager that holds the message.
     */
    get manager(): MessagesManager;
    /**
     * The chat the messsage belongs to.
     */
    get chat(): Chat;
    /**
     * The sender of the message on behalf of a chat.
     */
    get sender_chat(): Chat | undefined;
    /**
     * The user that sent the message as a member, not available in private chats.
     */
    get member(): Message | undefined;
    /**
     * The sender of the message.
     */
    get user(): User | undefined;
    /**
     * The id of the message.
     */
    get id(): number;
}
