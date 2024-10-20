import type { CreateInvoiceLinkPayload, SendInvoicePayload } from '../../Types/Invoice';
import type { Invoice } from '../../Builders/Invoice';
import type { Message } from '../../Classes/Message';
import type { Client } from '../Client';
import { CachedManager } from './CachedManager';
export declare class InvoicesManager extends CachedManager<string, Invoice> {
    /**
     * The token provided by your payment provider for payments.
     */
    provider_token?: string;
    constructor(client: Client);
    /**
     * Sets the token for the invoices generated.
     *
     * @param token The token provided by your payment provider for payments.
     */
    setToken(token: string): void;
    /**
     * Returns an invoice link or an invoice with complete details such as payment_provider, but excluding chat ids.
     *
     * @param id The id of the invoice.
     */
    generate(id: string): Boolean | String | Partial<SendInvoicePayload>;
    /**
     * Creates an invoice and store it in the manger.
     *
     * @param id The id of the invoices to store as.
     * @param invoice The payload of the invoice.
     */
    create(id: string, invoice: Invoice): any;
    /**
     * Creates an invoice link and store it in the manager.
     *
     * @param id The id of the invoices to store as.
     * @param payload The payload of the invoice link.
     */
    createLink(id: string, payload: CreateInvoiceLinkPayload): Promise<string | boolean>;
    /**
     * This will only work with invoices and not link invoices!
     *
     * @param id The id of the invoice.
     * @param chat_id The target chat to send the invoice to.
     */
    send(id: string, chat_id: number): Promise<Message | void>;
}
