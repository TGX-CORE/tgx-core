import type { CreateInvoiceLinkPayload, StoredInvoice } from '../../Types/Invoice';
import type { Message } from '../../Classes/Message';
import type { Client } from '../Client';
import { CachedManager } from './CachedManager';
export declare class InvoicesManager extends CachedManager {
    provider_token?: string;
    constructor(client: Client);
    setToken(token: string): void;
    generate(id: string): any;
    create(id: string, invoice: StoredInvoice): void;
    createLink(id: string, payload: CreateInvoiceLinkPayload): Promise<string | boolean>;
    send(id: string, chat_id: number): Promise<Message | boolean>;
}
//# sourceMappingURL=InvoicesManager.d.ts.map