import type { InlineKeyboardMarkup } from '../Builders/InlineKeyboard'
import type { LabeledPrices } from '../Builders/LabeledPrices'
import type { ReplyParameters } from './Message'

export interface CreateInvoiceLinkPayload {
    title: string
    description: string
    payload: string
    provider_token?: string
    currency: string
    prices: LabeledPrices
    max_tip_amount?: number
    suggested_tip_amounts?: number[]
    provider_data?: string
    photo_url?: string
    photo_size?: number
    photo_width?: number
    photo_height?: number
    need_name?: boolean
    need_phone_number?: boolean
    need_email?: boolean
    need_shipping_address?: boolean
    send_phone_number_to_provider?: boolean
    send_email_to_provider?: boolean
    is_flexible?: boolean
}  

export interface SendInvoicePayload {
    chat_id: number | string
    message_thread_id?: number
    title: string
    description: string
    payload: string
    provider_token?: string
    currency: string
    prices: LabeledPrices
    max_tip_amount?: number
    suggested_tip_amounts?: number[]
    start_parameter?: string
    provider_data?: string
    photo_url?: string
    photo_size?: number
    photo_width?: number
    photo_height?: number
    need_name?: boolean
    need_phone_number?: boolean
    need_email?: boolean
    need_shipping_address?: boolean
    send_phone_number_to_provider?: boolean
    send_email_to_provider?: boolean
    is_flexible?: boolean
    disable_notification?: boolean
    protect_content?: boolean
    message_effect_id?: string
    reply_parameters?: ReplyParameters
    reply_markup?: InlineKeyboardMarkup
}

export interface StoredInvoice {
    title: string
    description: string
    payload: string
    currency: string
    prices: LabeledPrices
    max_tip_amount?: number
    suggested_tip_amounts?: number[]
    start_parameter?: string
    provider_data?: string
    photo_url?: string
    photo_size?: number
    photo_width?: number
    photo_height?: number
    need_name?: boolean
    need_phone_number?: boolean
    need_email?: boolean
    need_shipping_address?: boolean
    send_phone_number_to_provider?: boolean
    send_email_to_provider?: boolean
    is_flexible?: boolean
    disable_notification?: boolean
    protect_content?: boolean
    message_effect_id?: string
    reply_parameters?: ReplyParameters
    reply_markup?: InlineKeyboardMarkup
}

export interface InvoicePacket {
    chat_id: number | string
    message_thread_id?: number
    title: string
    description: string
    payload: string
    provider_token?: string
    currency: string
    prices: LabeledPrices
    max_tip_amount?: number
    suggested_tip_amounts?: number[]
    start_parameter?: string
    provider_data?: string
    photo_url?: string
    photo_size?: number
    photo_width?: number
    photo_height?: number
    need_name?: boolean
    need_phone_number?: boolean
    need_email?: boolean
    need_shipping_address?: boolean
    send_phone_number_to_provider?: boolean
    send_email_to_provider?: boolean
    is_flexible?: boolean
    disable_notification?: boolean
    protect_content?: boolean
    message_effect_id?: string
    reply_parameters?: ReplyParameters
    reply_markup?: InlineKeyboardMarkup
}

export interface ShippingAddress {
    country_code: string
    state?: string
    city: string
    street_line1: string
    street_line2?: string
    post_code: string
}  

export interface OrderInfo {
    name?: string
    phone_number?: string
    email?: string
    shipping_address?: ShippingAddress
}