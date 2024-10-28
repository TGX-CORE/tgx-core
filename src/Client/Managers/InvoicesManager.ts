import type { CreateInvoiceLinkPayload, SendInvoicePayload } from '../../Types/Invoice'
import type { Invoice } from '../../Builders/Invoice' 
import type { Message } from '../../Classes/Message'
import type { Client } from '../Client'

import { CachedManager } from './CachedManager'
import { Routes } from '../../Types/Routes'

import { ErrorCodes } from '../../Error/Codes'
import { TGXError } from '../../Error'

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
     * Returns an invoice link, invoice or false if the invoice is not found. 
     * 
     * @param id The id of the invoice.
     */
    public generate(id: string): false|String|Partial<Invoice> {
        if(!this.provider_token) throw new TGXError(ErrorCodes.MissingPaymentProvider)

        const stored = this.cache.get(id)
        return stored ?
            typeof stored === 'string' ?
                stored
            :   stored.setProviderToken(this.provider_token)
        : false
    }

    /**
     * Creates an invoice and store it in the manger.
     * 
     * @param id The id of the invoices to store as.
     * @param invoice The payload of the invoice.
     */
    public create(id: string, invoice: Invoice){
        if(!this.provider_token) throw new TGXError(ErrorCodes.MissingPaymentProvider)
            
        return this._add(
            invoice
                .setPayload(invoice.payload ?? id)
        , true, { id })
    }
    
    /**
     * Creates an invoice link and store it in the manager.
     * 
     * @param id The id of the invoices to store as.
     * @param payload The payload of the invoice link.
     */
    public async createLink(id: string, payload: CreateInvoiceLinkPayload): Promise<string|boolean> {
        if(!this.provider_token) throw new TGXError(ErrorCodes.MissingPaymentProvider)

        let { provider_token } = this, response
        if(response = await this.client.rest.post(Routes.CreateInvoiceLink, { ...payload, provider_token })) this.cache.set(id, response)
        return response
    }
    
    /**
     * This will only work with invoices and not link invoices!
     * 
     * @param id The id of the invoice.
     * @param chat_id The target chat to send the invoice to.
     */
    public async send(id: string, chat_id: number): Promise<Message|null> {
        let invoice

        if(!this.provider_token) throw new TGXError(ErrorCodes.MissingPaymentProvider)
        if(!(invoice = this.generate(id))) throw new TGXError(ErrorCodes.InvalidInvoice, id)
        if(typeof invoice === 'string') throw new TGXError(ErrorCodes.AnInvoiceLink, id) 

        let response = await this.client.rest.post(Routes.SendInvoice, { ...invoice, chat_id })
        return response ? this.client.actions.message.handle(response, false) : null
    }

}