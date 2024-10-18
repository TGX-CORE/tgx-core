import { Builder } from '../Builders/Builder'
import { AcceptedEmoji } from './Message'

export type Emojis = typeof Emoji.Emoji|typeof Emoji.Custom|typeof Emoji.Paid|Emoji|CustomEmoji|PaidEmoji

export interface Emoji {
    type: 'emoji'
    emoji: AcceptedEmoji
}

export interface CustomEmoji {
    type: 'custom_emoji',
    custom_emoji_id: string
}

export interface PaidEmoji {
    type: 'paid'
}

export namespace Emoji {

    export function Emoji(emoji: AcceptedEmoji): Emoji {
        return { type: 'emoji', emoji }
    }

    export function Custom(custom_emoji_id: string): CustomEmoji {
        return { type: 'custom_emoji', custom_emoji_id }
    }

    export function Paid(): PaidEmoji {
        return { type: 'paid' }
    }
    
}