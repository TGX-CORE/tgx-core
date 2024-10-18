import type { MessageEntityPayload } from '../Types/MessageEntity'

import { EntityType } from '../Types/MessageEntity'

export class MessageEntitiesStore {

    public entities: MessageEntityPayload[]
    public text: string

    public constructor(text: string, entities: MessageEntityPayload[] = []){

        this.entities = entities

        this.text = text

    }

    public mentions() {
        return this.get(EntityType.Mention);
    }
    
    public hashtags() {
        return this.get(EntityType.Hashtag);
    }
    
    public cashtags() {
        return this.get(EntityType.Cashtag);
    }
    
    public bot_commands() {
        return this.get(EntityType.BotCommand);
    }
    
    public urls() {
        return this.get(EntityType.Url);
    }
    
    public emails() {
        return this.get(EntityType.Email);
    }
    
    public phone_numbers() {
        return this.get(EntityType.PhoneNumber);
    }
    
    public bolds() {
        return this.get(EntityType.Bold);
    }
    
    public italics() {
        return this.get(EntityType.Italic);
    }
    
    public underlines() {
        return this.get(EntityType.Underline);
    }
    
    public strikethroughs() {
        return this.get(EntityType.Strikethrough);
    }
    
    public spoilers() {
        return this.get(EntityType.Spoiler);
    }
    
    public blockquotes() {
        return this.get(EntityType.Blockquote);
    }
    
    public expandable_blockquotes() {
        return this.get(EntityType.ExpandableBlockquote);
    }
    
    public codes() {
        return this.get(EntityType.Code);
    }
    
    public pres() {
        return this.get(EntityType.Pre);
    }
    
    public text_links() {
        return this.get(EntityType.TextLink);
    }
    
    public text_mentions() {
        return this.get(EntityType.TextMention);
    }
    
    public custom_emojis() {
        return this.get(EntityType.CustomEmoji);
    }
      

    /**
     * Obtains all of the entites with the correct type.
     * 
     * @param type Obtains the message entities with type.
     */
    public get(type: EntityType): MessageEntityPayload[] {
        return this.entities.filter((entity) => entity.type === type)
    }

    /**
     * Obtains an entity by type and index by their appearance in a message.
     * 
     * @param type The type of the message entity.
     * @param index The index of the entity, starting from 0.
     */
    public parse(type: EntityType, index: number): string|boolean {
        const current = this.get(type)?.[index]
        return current && current.length === 0 ?
               this.text.slice(current.offset, current.offset + current.length)
            : false
    }

    /**
     * Gets a portion of the string or the message this manager belongs to.
     * 
     * @param offset The starting position of the string.
     * @param length The length of the portion.
     */
    public parseText(offset: number, length: number): string {
        return this.text.slice(offset, offset + length)
    }

}