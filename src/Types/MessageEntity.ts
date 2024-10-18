import type { User, UserPacket } from '../Classes/User'

/**
 *  Represents a special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * 
 * @property type The type of the entity.
 * @property offsest Offset in UTF-16 code units to the start of the entity.
 * @property length Length of the entity in UTF-16 code units
 * @property url For “text_link” only, URL that will be opened after user taps on the text
 * @property user For “text_mention” only, the mentioned user
 * @property language For “pre” only, the programming language of the entity text
 * @property custom_emoji_id For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
 */
export interface MessageEntityPayload {
    type: EntityType|string
    offset: number
    length: number
    url?: string
    user?: UserPacket
    language?: string
    custom_emoji_id?: string
}

/**
 * @property Mention \@username
 * @property Hashtag #hashtag
 * @property Cashtag $USD
 * @property BotCommand /start\@jobs_bot
 * @property Url https://telegram.org
 * @property Email do-not-reply\@telegram.org
 * @property PhoneNumber +1-212-555-0123
 * @property Bold **bold text**
 * @property Italic *italic text*
 * @property Underline <u>underlined text</u>
 * @property Strikethrough ~~strikethrough text~~
 * @property Spoiler spoiler message
 * @property Blockquote block quotation
 * @property ExpandableBlockquote collapsed-by-default block quotation
 * @property Code `monowidth string`
 * @property Pre `monowidth block`
 * @property TextLink clickable text URLs
 * @property TextMention users without usernames
 * @property CustomEmoji inline custom emoji stickers
 */
export enum EntityType {
    Mention = 'mention',
    Hashtag = 'hashtag',
    Cashtag = 'cashtag',
    BotCommand = 'bot_command',
    Url = 'url',
    Email = 'email',
    PhoneNumber = 'phone_number',
    Bold = 'bold',
    Italic = 'italic',
    Underline = 'underline',
    Strikethrough = 'strikethrough',
    Spoiler = 'spoiler',
    Blockquote = 'blockquote',
    ExpandableBlockquote = 'expandable_blockquote',
    Code = 'code',
    Pre = 'pre',
    TextLink = 'text_link',
    TextMention = 'text_mention',
    CustomEmoji = 'custom_emoji'
}

/**
 * A message entity can be any of the message entites below.
 */
export type MessageEntitiesType = MessageEntityPayload |
                                  typeof MessageEntity.Mention |
                                  typeof MessageEntity.Hashtag |
                                  typeof MessageEntity.Cashtag |
                                  typeof MessageEntity.BotCommand |
                                  typeof MessageEntity.Url |
                                  typeof MessageEntity.Email |
                                  typeof MessageEntity.PhoneNumber |
                                  typeof MessageEntity.Bold |
                                  typeof MessageEntity.Italic |
                                  typeof MessageEntity.Underline |
                                  typeof MessageEntity.Strikethrough |
                                  typeof MessageEntity.Spoiler |
                                  typeof MessageEntity.Blockquote |
                                  typeof MessageEntity.ExpandableBlockquote |
                                  typeof MessageEntity.Code |
                                  typeof MessageEntity.Pre |
                                  typeof MessageEntity.TextLink |
                                  typeof MessageEntity.TextMention |
                                  typeof MessageEntity.CustomEmoji
  
export namespace MessageEntity {

    /**
     * @param offset Offset in UTF-16 code units to the start of the entity
     * @param length Length of the entity in UTF-16 code units
     */
    export function Mention(offset: number, length: number): MessageEntityPayload {
        return { type: 'mention', offset, length }
    }

    export function Hashtag(offset: number, length: number): MessageEntityPayload {
        return { type: 'hashtag', offset, length }
    }

    export function Cashtag(offset: number, length: number): MessageEntityPayload {
        return { type: 'cashtag', offset, length }
    }

    export function BotCommand(offset: number, length: number): MessageEntityPayload {
        return { type: 'bot_command', offset, length }
    }

    export function Url(offset: number, length: number): MessageEntityPayload {
        return { type: 'url', offset, length }
    }

    export function Email(offset: number, length: number): MessageEntityPayload {
        return { type: 'email', offset, length }
    }

    export function PhoneNumber(offset: number, length: number): MessageEntityPayload {
        return { type: 'phone_number', offset, length }
    }

    export function Bold(offset: number, length: number): MessageEntityPayload {
        return { type: 'bold', offset, length }
    }

    export function Italic(offset: number, length: number): MessageEntityPayload {
        return { type: 'italic', offset, length }
    }

    export function Underline(offset: number, length: number): MessageEntityPayload {
        return { type: 'underline', offset, length }
    }

    export function Strikethrough(offset: number, length: number): MessageEntityPayload {
        return { type: 'strikethrough', offset, length }
    }

    export function Spoiler(offset: number, length: number): MessageEntityPayload {
        return { type: 'spoiler', offset, length }
    }

    export function Blockquote(offset: number, length: number): MessageEntityPayload {
        return { type: 'blockquote', offset, length }
    }

    export function ExpandableBlockquote(offset: number, length: number): MessageEntityPayload {
        return { type: 'expandable_blockquote', offset, length }
    }

    export function Code(offset: number, length: number): MessageEntityPayload {
        return { type: 'code', offset, length }
    }

    export function Pre(offset: number, length: number, language?: string): MessageEntityPayload {
        return { type: 'pre', offset, length, language }
    }

    export function TextLink(offset: number, length: number, url: string): MessageEntityPayload {
        return { type: 'text_link', offset, length, url }
    }

    export function TextMention(offset: number, length: number, user: UserPacket|User): MessageEntityPayload{
        return { type: 'text_mention', offset, length, user }
    }

    export function CustomEmoji(offset: number, length: number, custom_emoji_id: string): MessageEntityPayload {
        return { type: 'custom_emoji', offset, length, custom_emoji_id }
    }
}