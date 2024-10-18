import { Builder } from '../Builders/Builder';
import { AcceptedEmoji } from './Message';
export type Emojis = Emoji.Emoji | Emoji.Custom | Emoji.Paid | Emoji | CustomEmoji | PaidEmoji;
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
    class Emoji extends Builder {
        constructor(emoji: AcceptedEmoji);
    }
    class Paid extends Builder {
        constructor(custom_emoji_id: string);
    }
    class Custom extends Builder {
        constructor();
    }
}
//# sourceMappingURL=Emoji.d.ts.map