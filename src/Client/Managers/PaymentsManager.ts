import type { Client } from '../Client'

import { SuccessfulPayment } from '../../Classes/SuccessfulPayment'
import { CachedManager } from './CachedManager'

export class PaymentsManager extends CachedManager<number, SuccessfulPayment> {

    public constructor(client: Client){
        super(client, SuccessfulPayment)
    }

    public async refund(user_id: number, telegram_payment_charge_id: string): Promise<boolean> {
        return this.client.api.refundStarPayment(null, {
            params: { user_id, telegram_payment_charge_id },
            returnOk: true
        })
    }

}