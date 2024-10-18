import type { ChatPacket } from '../Classes/BaseChat'
import type { UserPacket } from '../Classes/User'

export interface ChatBoostPacket {
    boost_id: number
    add_date: number
    expiration_date: number
    source: ChatBoostSource
}

export interface ChatBoostAdded {
    boost_count: number
}

export interface ChatBoostUpdated { 
    chat?: ChatPacket
    boost: ChatBoostPacket
}  

export interface ChatBoostRemoved {
    chat: ChatPacket
    boost_id: string
    remove_date: number
    source: ChatBoostSource
}

export type ChatBoostSource = ChatBoostSourceGiftCode|ChatBoostSourceGiveaway|ChatBoostSourcePremium
export interface ChatBoostSourcePremium {
    source: 'premium',
    user: UserPacket
}

export interface ChatBoostSourceGiftCode {
    source: 'gift_code',
    user: UserPacket
}

export interface ChatBoostSourceGiveaway {
    source: 'giveaway',
    giveaway_message_id: number
    user?: UserPacket
    prize_star_count?: number
    is_unclaimed?: boolean
}