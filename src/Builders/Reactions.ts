import { Emojis } from '../Types/Emoji'
import { Builder } from './Builder'

/**
 * Represents an array of reactions.
 */
export class Reactions extends Builder {
    
    public declare value: Emojis[]

    /**
     * @param emojis The emojis of what the payload should contain.
     */
    public constructor(...emojis: Emojis[]){
        super({ value: emojis, parseVal: true })
    }

    /**
     * Adds an emoji to the current payload.
     * 
     * @param emoji The emoji to add to the current payload.
     */
    public add(emoji: Emojis){
        this.value.push(emoji)
        return this
    }

}