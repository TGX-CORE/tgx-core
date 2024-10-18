import type { MessageEntity } from '../Types/Common';
export declare class MessageEntities {
    entities: MessageEntity[];
    text: string;
    constructor(text: string, entities?: MessageEntity[]);
    mentions(): MessageEntity[];
    hashtags(): MessageEntity[];
    cashtags(): MessageEntity[];
    bot_commands(): MessageEntity[];
    urls(): MessageEntity[];
    emails(): MessageEntity[];
    phone_numbers(): MessageEntity[];
    bolds(): MessageEntity[];
    italics(): MessageEntity[];
    underlines(): MessageEntity[];
    strikethroughs(): MessageEntity[];
    spoilers(): MessageEntity[];
    blockquotes(): MessageEntity[];
    expandable_blockquotes(): MessageEntity[];
    codes(): MessageEntity[];
    pres(): MessageEntity[];
    text_links(): MessageEntity[];
    text_mentions(): MessageEntity[];
    custom_emojis(): MessageEntity[];
    get(type: string): MessageEntity[];
    parse(type: string, index: number): string | boolean;
}
//# sourceMappingURL=MessageEntities.d.ts.map