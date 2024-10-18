import type { User, UserPacket } from '../Classes/User';
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
    type: EntityType | string;
    offset: number;
    length: number;
    url?: string;
    user?: UserPacket;
    language?: string;
    custom_emoji_id?: string;
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
export declare enum EntityType {
    Mention = "mention",
    Hashtag = "hashtag",
    Cashtag = "cashtag",
    BotCommand = "bot_command",
    Url = "url",
    Email = "email",
    PhoneNumber = "phone_number",
    Bold = "bold",
    Italic = "italic",
    Underline = "underline",
    Strikethrough = "strikethrough",
    Spoiler = "spoiler",
    Blockquote = "blockquote",
    ExpandableBlockquote = "expandable_blockquote",
    Code = "code",
    Pre = "pre",
    TextLink = "text_link",
    TextMention = "text_mention",
    CustomEmoji = "custom_emoji"
}
/**
 * A message entity can be any of the message entites below.
 */
export type MessageEntitiesType = MessageEntityPayload | typeof MessageEntity.Mention | typeof MessageEntity.Hashtag | typeof MessageEntity.Cashtag | typeof MessageEntity.BotCommand | typeof MessageEntity.Url | typeof MessageEntity.Email | typeof MessageEntity.PhoneNumber | typeof MessageEntity.Bold | typeof MessageEntity.Italic | typeof MessageEntity.Underline | typeof MessageEntity.Strikethrough | typeof MessageEntity.Spoiler | typeof MessageEntity.Blockquote | typeof MessageEntity.ExpandableBlockquote | typeof MessageEntity.Code | typeof MessageEntity.Pre | typeof MessageEntity.TextLink | typeof MessageEntity.TextMention | typeof MessageEntity.CustomEmoji;
export declare namespace MessageEntity {
    /**
     * @param offset Offset in UTF-16 code units to the start of the entity
     * @param length Length of the entity in UTF-16 code units
     */
    function Mention(offset: number, length: number): MessageEntityPayload;
    function Hashtag(offset: number, length: number): MessageEntityPayload;
    function Cashtag(offset: number, length: number): MessageEntityPayload;
    function BotCommand(offset: number, length: number): MessageEntityPayload;
    function Url(offset: number, length: number): MessageEntityPayload;
    function Email(offset: number, length: number): MessageEntityPayload;
    function PhoneNumber(offset: number, length: number): MessageEntityPayload;
    function Bold(offset: number, length: number): MessageEntityPayload;
    function Italic(offset: number, length: number): MessageEntityPayload;
    function Underline(offset: number, length: number): MessageEntityPayload;
    function Strikethrough(offset: number, length: number): MessageEntityPayload;
    function Spoiler(offset: number, length: number): MessageEntityPayload;
    function Blockquote(offset: number, length: number): MessageEntityPayload;
    function ExpandableBlockquote(offset: number, length: number): MessageEntityPayload;
    function Code(offset: number, length: number): MessageEntityPayload;
    function Pre(offset: number, length: number, language?: string): MessageEntityPayload;
    function TextLink(offset: number, length: number, url: string): MessageEntityPayload;
    function TextMention(offset: number, length: number, user: UserPacket | User): MessageEntityPayload;
    function CustomEmoji(offset: number, length: number, custom_emoji_id: string): MessageEntityPayload;
}
