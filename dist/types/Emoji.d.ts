import { AcceptedEmoji } from './Message';
export type Emojis = typeof Emoji.Emoji | typeof Emoji.Custom | typeof Emoji.Paid | Emoji | CustomEmoji | PaidEmoji;
export interface Emoji {
    type: 'emoji';
    emoji: AcceptedEmoji;
}
export interface CustomEmoji {
    type: 'custom_emoji';
    custom_emoji_id: string;
}
export interface PaidEmoji {
    type: 'paid';
}
export declare namespace Emoji {
    function Emoji(emoji: AcceptedEmoji): Emoji;
    function Custom(custom_emoji_id: string): CustomEmoji;
    function Paid(): PaidEmoji;
}
