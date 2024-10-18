import type { CreateInvoiceLinkPayload, SendInvoicePayload, StoredInvoice } from '../../Types/Invoice'
import type { Message } from '../../Classes/Message'
import type { Invoice } from '../../Classes/Invoice' 
import type { Client } from '../Client'

import { CachedManager } from './CachedManager'

export class InvoicesManager extends CachedManager<string, Invoice> {

    /**
     * The token provided by your payment provider for payments.
     */
    public provider_token?: string

    public constructor(client: Client){
        super(client)
    }

    /**
     * Sets the token for the invoices generated.
     * 
     * @param token The token provided by your payment provider for payments. 
     */
    public setToken(token: string){
        this.provider_token = token
    }

    /**
     * Returns an invoice link or an invoice with complete details such as payment_provider, but excluding chat ids.
     * 
     * @param id The id of the invoice.
     */
    public generate(id: string): Boolean|String|Partial<SendInvoicePayload> {
        const stored = this.cache.get(id)
        return stored ?
            typeof stored === 'string' ?
                stored
            :   { ...stored, provider_token: this.provider_token }
        : false
    }

    /**
     * Creates an invoice and store it in the manger.
     * 
     * @param id The id of the invoices to store as.
     * @param invoice The payload of the invoice.
     */
    public create(id: string, invoice: StoredInvoice){
        const { prices: { value }, ...others } = invoice
        return this._add({ ...others, prices: value }, true, { id })
    }
    
    /**
     * Creates an invoice link and store it in the manager.
     * 
     * @param id The id of the invoices to store as.
     * @param payload The payload of the invoice link.
     */
    public async createLink(id: string, payload: CreateInvoiceLinkPayload): Promise<string|boolean> {
        const result = this.client.api.createInvoiceLink(null, {
            params: {
                ...payload,
                provider_token: this.provider_token
            },
            lean: true,
            result: true
        })

        if( result ) this.cache.set(id, result)
        return result
    }
    
    /**
     * This will only work with invoices and not link invoices!
     * 
     * @param id The id of the invoice.
     * @param chat_id The target chat to send the invoice to.
     */
    public async send(id: string, chat_id: number): Promise<Message|void> {
        const invoice = this.generate(id)
        if( typeof invoice === 'string' ) return this.client.logger.error('[InvoicesManager - send] You can only send an invoice and not an invoice link!')
        if( invoice ){
            const result = await this.client.api.sendInvoice(null, {
                params: { ...invoice, chat_id },
                lean: true,
                result: true
            })

            return result ? this.client.actions.message.handle(result, false) : null
        }

        return this.client.logger.error(`There is no invoice stored with the id: ${ id }.`)
    }

}