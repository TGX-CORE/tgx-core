"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEntity = exports.EntityType = void 0;
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
var EntityType;
(function (EntityType) {
    EntityType["Mention"] = "mention";
    EntityType["Hashtag"] = "hashtag";
    EntityType["Cashtag"] = "cashtag";
    EntityType["BotCommand"] = "bot_command";
    EntityType["Url"] = "url";
    EntityType["Email"] = "email";
    EntityType["PhoneNumber"] = "phone_number";
    EntityType["Bold"] = "bold";
    EntityType["Italic"] = "italic";
    EntityType["Underline"] = "underline";
    EntityType["Strikethrough"] = "strikethrough";
    EntityType["Spoiler"] = "spoiler";
    EntityType["Blockquote"] = "blockquote";
    EntityType["ExpandableBlockquote"] = "expandable_blockquote";
    EntityType["Code"] = "code";
    EntityType["Pre"] = "pre";
    EntityType["TextLink"] = "text_link";
    EntityType["TextMention"] = "text_mention";
    EntityType["CustomEmoji"] = "custom_emoji";
})(EntityType || (exports.EntityType = EntityType = {}));
var MessageEntity;
(function (MessageEntity) {
    /**
     * @param offset Offset in UTF-16 code units to the start of the entity
     * @param length Length of the entity in UTF-16 code units
     */
    function Mention(offset, length) {
        return { type: 'mention', offset, length };
    }
    MessageEntity.Mention = Mention;
    function Hashtag(offset, length) {
        return { type: 'hashtag', offset, length };
    }
    MessageEntity.Hashtag = Hashtag;
    function Cashtag(offset, length) {
        return { type: 'cashtag', offset, length };
    }
    MessageEntity.Cashtag = Cashtag;
    function BotCommand(offset, length) {
        return { type: 'bot_command', offset, length };
    }
    MessageEntity.BotCommand = BotCommand;
    function Url(offset, length) {
        return { type: 'url', offset, length };
    }
    MessageEntity.Url = Url;
    function Email(offset, length) {
        return { type: 'email', offset, length };
    }
    MessageEntity.Email = Email;
    function PhoneNumber(offset, length) {
        return { type: 'phone_number', offset, length };
    }
    MessageEntity.PhoneNumber = PhoneNumber;
    function Bold(offset, length) {
        return { type: 'bold', offset, length };
    }
    MessageEntity.Bold = Bold;
    function Italic(offset, length) {
        return { type: 'italic', offset, length };
    }
    MessageEntity.Italic = Italic;
    function Underline(offset, length) {
        return { type: 'underline', offset, length };
    }
    MessageEntity.Underline = Underline;
    function Strikethrough(offset, length) {
        return { type: 'strikethrough', offset, length };
    }
    MessageEntity.Strikethrough = Strikethrough;
    function Spoiler(offset, length) {
        return { type: 'spoiler', offset, length };
    }
    MessageEntity.Spoiler = Spoiler;
    function Blockquote(offset, length) {
        return { type: 'blockquote', offset, length };
    }
    MessageEntity.Blockquote = Blockquote;
    function ExpandableBlockquote(offset, length) {
        return { type: 'expandable_blockquote', offset, length };
    }
    MessageEntity.ExpandableBlockquote = ExpandableBlockquote;
    function Code(offset, length) {
        return { type: 'code', offset, length };
    }
    MessageEntity.Code = Code;
    function Pre(offset, length, language) {
        return { type: 'pre', offset, length, language };
    }
    MessageEntity.Pre = Pre;
    function TextLink(offset, length, url) {
        return { type: 'text_link', offset, length, url };
    }
    MessageEntity.TextLink = TextLink;
    function TextMention(offset, length, user) {
        return { type: 'text_mention', offset, length, user };
    }
    MessageEntity.TextMention = TextMention;
    function CustomEmoji(offset, length, custom_emoji_id) {
        return { type: 'custom_emoji', offset, length, custom_emoji_id };
    }
    MessageEntity.CustomEmoji = CustomEmoji;
})(MessageEntity || (exports.MessageEntity = MessageEntity = {}));
//# sourceMappingURL=MessageEntity.js.map