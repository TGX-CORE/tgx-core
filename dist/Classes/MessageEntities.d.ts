import type { MessageEntityPayload } from '../Types/MessageEntity';
import { EntityType } from '../Types/MessageEntity';
export declare class MessageEntitiesStore {
    entities: MessageEntityPayload[];
    text: string;
    constructor(text: string, entities?: MessageEntityPayload[]);
    mentions(): MessageEntityPayload[];
    hashtags(): MessageEntityPayload[];
    cashtags(): MessageEntityPayload[];
    bot_commands(): MessageEntityPayload[];
    urls(): MessageEntityPayload[];
    emails(): MessageEntityPayload[];
    phone_numbers(): MessageEntityPayload[];
    bolds(): MessageEntityPayload[];
    italics(): MessageEntityPayload[];
    underlines(): MessageEntityPayload[];
    strikethroughs(): MessageEntityPayload[];
    spoilers(): MessageEntityPayload[];
    blockquotes(): MessageEntityPayload[];
    expandable_blockquotes(): MessageEntityPayload[];
    codes(): MessageEntityPayload[];
    pres(): MessageEntityPayload[];
    text_links(): MessageEntityPayload[];
    text_mentions(): MessageEntityPayload[];
    custom_emojis(): MessageEntityPayload[];
    /**
     * Obtains all of the entites with the correct type.
     *
     * @param type Obtains the message entities with type.
     */
    get(type: EntityType): MessageEntityPayload[];
    /**
     * Obtains an entity by type and index by their appearance in a message.
     *
     * @param type The type of the message entity.
     * @param index The index of the entity, starting from 0.
     */
    parse(type: EntityType, index: number): string | boolean;
    /**
     * Gets a portion of the string or the message this manager belongs to.
     *
     * @param offset The starting position of the string.
     * @param length The length of the portion.
     */
    parseText(offset: number, length: number): string;
}
