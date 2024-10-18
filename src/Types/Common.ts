import type { PhotoSizeFilePacket } from './File'
import type { MessageEntities } from '../Builders/MessageEntities'
import type { UserPacket } from '../Classes/User'
import type { Chat } from './Message'

import type { MessageEntityPayload } from './MessageEntity'

export interface LocationPacket {
    latitude: number
    longitude: number
    horizontal_accuracy?: number
    live_period?: number
    heading?: number
    proximity_alert_radius?: number
}

export interface StoryPacket {
    chat: Chat
    id: number
}

export interface GamePacket {
    title: string
    description: string
    photo: PhotoSizeFilePacket[]
    text?: string
    text_entities?: MessageEntities|MessageEntityPayload[]
    animation?: Animation
}

export interface TextQuote {
    text: string
    entities?: MessageEntities|MessageEntityPayload[]
    position: number
    is_manual?: true
}

export interface WebAppData {
    data: string
    button_text: string
}


export interface RefundedPaymentPacket {
    currency: string
    total_amount: number
    invoice_payload: string
    telegram_payment_charge_id: string
    provider_payment_charge_id?: string
}

export interface SharedUserPacket {
    user_id: number
    first_name?: string
    last_name?: string
    username?: string
    photo?: PhotoSizeFilePacket[]
}

export interface WriteAccessAllowed {
    from_request?: boolean
    web_app_name?: string
    from_attachment_menu?: boolean
}

export interface UsersShared {
    request_id: number
    users: SharedUserPacket[]
}

export interface ChatShared {
    request_id: number
    chat_id: number
    title?: string
    username?: string
    photo?: PhotoSizeFilePacket[]
}

export interface ProximityAlertTriggered {
    traveler: UserPacket
    watcher: UserPacket
    distance: number
}

export interface PaidMediaPurchasedPacket {
    from: UserPacket
    paid_media_payload: string
}

export interface UserProfilePhotos {
    total_count: number
    photos: PhotoSizeFilePacket[][]
}