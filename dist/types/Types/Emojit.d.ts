import { AcceptedEmoji } from './Message';
export interface Emoji {
    type: 'emoji';
    emoji: string;
}
export declare function Emoji(emoji: AcceptedEmoji): {
    type: string;
    emoji: AcceptedEmoji;
};
export interface CustomEmoji {
    type: 'custom_emoji';
    custom_emoji_id: string;
}
export declare function CustomEmoji(custom_emoji_id: string): {
    type: string;
    custom_emoji_id: string;
};
export interface PaidEmoji {
    type: 'paid';
}
export declare function PaidEmoji(): {
    type: string;
};
//# sourceMappingURL=Emojit.d.ts.map