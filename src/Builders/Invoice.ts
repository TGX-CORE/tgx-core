import type { InlineKeyboardMarkup } from './InlineKeyboard'
import type { ReplyParameters } from '../Types/Message'
import type { StoredInvoice } from '../Types/Invoice'

import { Builder } from './Builder'
import { defaults } from '../Internals/shared'
import { LabeledPrices } from './LabeledPrices'

export class Invoice extends Builder implements StoredInvoice {

    public title!: string
    public description!: string
    public currency!: string
    public payload!: string
    public prices!: LabeledPrices

    /**
     * @param title The title of the invoice.
     * @param description The description of the invoice.
     * @param currency The currency you will accept.
     * @param payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. If left empty it will be set as id in invoices.create, but otherwise it is required.
     */
    public constructor(title: string, description: string, currency: string, payload?: string) {
        super({
            value: {
                title, description, currency, payload,
                prices: new LabeledPrices()
            }
        })

        return new Proxy(this, {
            get: (target: any, property) => {
                if (property in target.value) {
                    return target.value[property]
                }
                return target[property]
            }
        })
    }

    /**
     * @hidden
     */
    public _patch(data: StoredInvoice): this {
        return defaults(data, this.value, true)
    }

    /**
     * @hidden
     */
    public _clone(): Invoice {
        return Object.assign(Object.create(this), this)
    }

    public setTitle(title: string) {
        this.value.title = title
        return this
    }

    public setDescription(description: string) {
        this.value.description = description
        return this
    }

    public setCurrency(currency: string) {
        this.value.currency = currency
        return this
    }

    public setPayload(payload: string) {
        this.value.payload = payload
        return this
    }

    public addPrice(label: string, amount: number) {
        this.value.prices.add(label, amount)
        return this
    }

    public setProviderToken(providerToken: string) {
        this.value.provider_token = providerToken
        return this
    }

    public setMaxTipAmount(maxTipAmount: number) {
        this.value.max_tip_amount = maxTipAmount
        return this
    }

    public setSuggestedTipAmounts(suggestedTipAmounts: number[]) {
        this.value.suggested_tip_amounts = suggestedTipAmounts
        return this
    }

    public setStartParameter(startParameter: string) {
        this.value.start_parameter = startParameter
        return this
    }

    public setProviderData(providerData: string) {
        this.value.provider_data = providerData
        return this
    }

    public setPhotoUrl(photoUrl: string) {
        this.value.photo_url = photoUrl
        return this
    }

    public setPhotoSize(photoSize: number) {
        this.value.photo_size = photoSize
        return this
    }

    public setPhotoWidth(photoWidth: number) {
        this.value.photo_width = photoWidth
        return this
    }

    public setPhotoHeight(photoHeight: number) {
        this.value.photo_height = photoHeight
        return this
    }

    public setNeedName(needName: boolean) {
        this.value.need_name = needName
        return this
    }

    public setNeedPhoneNumber(needPhoneNumber: boolean) {
        this.value.need_phone_number = needPhoneNumber
        return this
    }

    public setNeedEmail(needEmail: boolean) {
        this.value.need_email = needEmail
        return this
    }

    public setNeedShippingAddress(needShippingAddress: boolean) {
        this.value.need_shipping_address = needShippingAddress
        return this
    }

    public setSendPhoneNumberToProvider(sendPhoneNumberToProvider: boolean) {
        this.value.send_phone_number_to_provider = sendPhoneNumberToProvider
        return this
    }

    public setSendEmailToProvider(sendEmailToProvider: boolean) {
        this.value.send_email_to_provider = sendEmailToProvider
        return this
    }

    public setIsFlexible(isFlexible: boolean) {
        this.value.is_flexible = isFlexible
        return this
    }

    public setDisableNotification(disableNotification: boolean) {
        this.value.disable_notification = disableNotification
        return this
    }

    public setProtectContent(protectContent: boolean) {
        this.value.protect_content = protectContent
        return this
    }

    public setMessageEffectId(messageEffectId: string) {
        this.value.message_effect_id = messageEffectId
        return this
    }

    public setReplyParameters(replyParameters: ReplyParameters) {
        this.value.reply_parameters = replyParameters
        return this
    }

    public setReplyMarkup(replyMarkup: InlineKeyboardMarkup) { 
        this.value.reply_markup = replyMarkup
        return this
    }

}
