"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEntitiesStore = void 0;
const MessageEntity_1 = require("../Types/MessageEntity");
class MessageEntitiesStore {
    constructor(text, entities = []) {
        this.entities = entities;
        this.text = text;
    }
    mentions() {
        return this.get(MessageEntity_1.EntityType.Mention);
    }
    hashtags() {
        return this.get(MessageEntity_1.EntityType.Hashtag);
    }
    cashtags() {
        return this.get(MessageEntity_1.EntityType.Cashtag);
    }
    bot_commands() {
        return this.get(MessageEntity_1.EntityType.BotCommand);
    }
    urls() {
        return this.get(MessageEntity_1.EntityType.Url);
    }
    emails() {
        return this.get(MessageEntity_1.EntityType.Email);
    }
    phone_numbers() {
        return this.get(MessageEntity_1.EntityType.PhoneNumber);
    }
    bolds() {
        return this.get(MessageEntity_1.EntityType.Bold);
    }
    italics() {
        return this.get(MessageEntity_1.EntityType.Italic);
    }
    underlines() {
        return this.get(MessageEntity_1.EntityType.Underline);
    }
    strikethroughs() {
        return this.get(MessageEntity_1.EntityType.Strikethrough);
    }
    spoilers() {
        return this.get(MessageEntity_1.EntityType.Spoiler);
    }
    blockquotes() {
        return this.get(MessageEntity_1.EntityType.Blockquote);
    }
    expandable_blockquotes() {
        return this.get(MessageEntity_1.EntityType.ExpandableBlockquote);
    }
    codes() {
        return this.get(MessageEntity_1.EntityType.Code);
    }
    pres() {
        return this.get(MessageEntity_1.EntityType.Pre);
    }
    text_links() {
        return this.get(MessageEntity_1.EntityType.TextLink);
    }
    text_mentions() {
        return this.get(MessageEntity_1.EntityType.TextMention);
    }
    custom_emojis() {
        return this.get(MessageEntity_1.EntityType.CustomEmoji);
    }
    /**
     * Obtains all of the entites with the correct type.
     *
     * @param type Obtains the message entities with type.
     */
    get(type) {
        return this.entities.filter((entity) => entity.type === type);
    }
    /**
     * Obtains an entity by type and index by their appearance in a message.
     *
     * @param type The type of the message entity.
     * @param index The index of the entity, starting from 0.
     */
    parse(type, index) {
        const current = this.get(type)?.[index];
        return current && current.length === 0 ?
            this.text.slice(current.offset, current.offset + current.length)
            : false;
    }
    /**
     * Gets a portion of the string or the message this manager belongs to.
     *
     * @param offset The starting position of the string.
     * @param length The length of the portion.
     */
    parseText(offset, length) {
        return this.text.slice(offset, offset + length);
    }
}
exports.MessageEntitiesStore = MessageEntitiesStore;
//# sourceMappingURL=MessageEntities.js.map