import type { WebhookEndpointOptions, WebhookInfo } from '../../Types/EndpointManager'
import { WebhookCluster } from './EndpointManager/WebhookCluster'

import { BaseManager } from './BaseManager'
import { Routes } from '../../Types/Routes'

export class WebhookManager extends BaseManager {

    public async get(): Promise<WebhookInfo|boolean> {
        return this.client.rest.get(Routes.GetWebhookInfo)
    }

    public async set(options: WebhookEndpointOptions|WebhookCluster): Promise<boolean> {
        const { url, endpoint, drop_pending_updates, secret_token, max_connections, ip_address, certificate } = options instanceof WebhookCluster ? options.options : options
        return this.client.rest.post(Routes.SetWebhook, {
                url: options instanceof WebhookCluster ? options.endpoint : `${url}${endpoint}`,
                max_connections, ip_address, allowed_updates: this.client.options.poll?.allowed_updates,
                drop_pending_updates, secret_token, certificate
        }, { ok: true })
    }

    public async delete(drop_pending_updates?: boolean): Promise<boolean> {
        return this.client.rest.post(Routes.DeleteWebhook, { drop_pending_updates }, { ok: true })
    }

}