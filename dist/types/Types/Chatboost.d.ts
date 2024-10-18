import type { BaseChat } from '../Classes/BaseChat';
import type { User } from '../Classes/User';
export interface ChatBoost {
    boost_id: number;
    add_date: number;
    expiration_date: number;
    source: ChatBoostSource;
}
export interface ChatBoostAdded {
    boost_count: number;
}
export interface ChatBoostPacket {
    chat?: BaseChat;
    boost: ChatBoost;
}
export type ChatBoostSource = ChatBoostSourceGiftCode | ChatBoostSourceGiveaway | ChatBoostSourcePremium;
export interface ChatBoostSourcePremium {
    source: 'premium';
    user: User;
}
export interface ChatBoostSourceGiftCode {
    source: 'gift_code';
    user: User;
}
export interface ChatBoostSourceGiveaway {
    source: 'giveaway';
    giveaway_message_id: number;
    user?: User;
    prize_star_count?: number;
    is_unclaimed?: boolean;
}
//# sourceMappingURL=Chatboost.d.ts.map