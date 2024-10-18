import { Emojis } from '../Types/Emoji';
import { Builder } from './Builder';
/**
 * Represents an array of reactions.
 */
export declare class Reactions extends Builder {
    value: Emojis[];
    /**
     * @param emojis The emojis of what the payload should contain.
     */
    constructor(...emojis: Emojis[]);
    /**
     * Adds an emoji to the current payload.
     *
     * @param emoji The emoji to add to the current payload.
     */
    add(emoji: Emojis): this;
}
