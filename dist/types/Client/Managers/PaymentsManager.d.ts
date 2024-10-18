import type { Client } from '../Client';
import { SuccessfulPayment } from '../../Classes/SuccessfulPayment';
import { CachedManager } from './CachedManager';
export declare class PaymentsManager extends CachedManager<typeof SuccessfulPayment> {
    constructor(client: Client);
    refund(user_id: number, telegram_payment_charge_id: string): Promise<boolean>;
}
//# sourceMappingURL=PaymentsManager.d.ts.map