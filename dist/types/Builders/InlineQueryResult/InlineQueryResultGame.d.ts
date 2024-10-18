import type { InlineKeyboardMarkup } from '../InlineKeyboardMarkup';
import { BaseBuilder } from '../BaseBuilder';
export interface InlineQueryResultGamePayload {
    type: string;
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
}
export declare class InlineQueryResultGame extends BaseBuilder<InlineQueryResultGamePayload> implements InlineQueryResultGamePayload {
    type: string;
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
    setId(id: string): this;
    setGameShortName(gameShortName: string): this;
    setReplyMarkup(replyMarkup?: InlineKeyboardMarkup): this;
}
//# sourceMappingURL=InlineQueryResultGame.d.ts.map