import type { Client } from '../Client'

import { SuccessfulPayment } from '../../Classes/SuccessfulPayment'
import { CachedManager } from './CachedManager'
import { Routes } from '../../Types/Routes'

export class PaymentsManager extends CachedManager<number, SuccessfulPayment> {

    public constructor(client: Client){
        super(client, SuccessfulPayment)
    }

    public async refund(user_id: number, telegram_payment_charge_id: string): Promise<boolean> {
        return this.client.rest.post(Routes.RefundStarPayment, { user_id, telegram_payment_charge_id }, { ok: true })
    }

}