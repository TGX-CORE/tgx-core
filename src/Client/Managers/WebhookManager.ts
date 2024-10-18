import type { Client } from '../Client'

import { BaseManager } from './BaseManager'
import { AllowedUpdates } from './PollManager'
import { File } from '../../Classes/File'

import express from 'express'
import parser from 'body-parser'

/**
 * @property url Must be set with your current host, e.g: https://example.com -> https://example.com/webhook
 * @property endpoint The endpoint of the path the client will listen in e.g: /webhook -> https://example.com/webhook
 * @property port Set the port, it is randomized if empty, min 1024, max 65535.
 * @property certificate Set the relative path to the file to set as your public key certificate.
 * 
 * @reference https://core.telegram.org/bots/api#setwebhook
 */
export interface WebhookManagerOptions {
    url?: string
    endpoint?: string
    port?: number
    update?: boolean
    secret_token?: string
    ip_address?: string
    drop_pending_updates?: boolean
    max_connections?: number
    certificate?: string|File
}

/**
 * The information about a webhook.
 * 
 * @reference https://core.telegram.org/bots/api#webhookinfo
 */
export interface WebhookInfo {
    url: string
    has_custom_certificate: boolean
    pending_update_count: number
    ip_address?: string
    last_error_date?: number
    last_error_message?: string
    last_synchronization_error_date?: number
    max_connections?: number
    allowed_updates?: AllowedUpdates[]
}  

export class WebhookManager extends BaseManager<WebhookManagerOptions> {

    public express: any

    public static min: number = 1024
    public static max: number = 65535

    public constructor(client: Client){
        super(client, 'webhook', {
            port: Math.floor(Math.random() * (WebhookManager.max - WebhookManager.min + 1)) + WebhookManager.min,
            endpoint: '/webhook',
            update: true
        })

        this.express = express()
        this.express.use(parser.json())

    }

    /**
     * Gets the webhook information from Telegram.
     */
    public async get(): Promise<WebhookInfo|boolean> {
        return this.client.api.getWebhookInfo(null, { lean: true, result: true })
    }

    /**
     * Deletes the webhook from Telegram.
     * 
     * @param drop_pending_updates Pass True to drop all pending updates
     */
    public async delete(drop_pending_updates?: boolean): Promise<boolean> {
        return this.client.api.deleteWebhook(null, { params: { drop_pending_updates }, returnOk: true })
    }

    /**
     * Updates the webhook on the Telegram api.
     * 
     * The following values are taken from options: drop_pending_updates, secret_token, max_connections, ip_address, certificate.
     */
    public async set(options: WebhookManagerOptions = this.options): Promise<boolean> {
        const { drop_pending_updates, secret_token, max_connections, ip_address, certificate } = options
        return this.client.api.setWebhook(null, {
            params: {
                url: this.endpoint, max_connections, ip_address,
                allowed_updates: this.client.options.poll?.allowed_updates,
                drop_pending_updates, secret_token, certificate
            },
            returnOk: true
        })
    }

    public async intialize(){
        this.client.logger.debug('Webhook manager is preparing to start.')

        this.express.get(this.options.endpoint, (req: any, res: any) => {
            res.sendStatus(200)
        })

        this.express.post(this.options.endpoint, (req: any, res: any) => {
            this.client.poll.handle(req.body)
            res.sendStatus(200)
        })

        this.express.listen(this.options.port, async () => {
            if(this.options.update){
                let success
                if(success = await this.set()){
                    this.client.logger.debug(`Webhook has been updated on the Telegram API.`)
                } else {
                    this.client.logger.error(`There was an error encountered when updating the webhook.`)
                }
            }

            this.client.logger.debug(`Webhook manager is ready, running on port ${this.options.port}`)
        })
    }

    /**
     * Gets the full endpoint.
     */
    public get endpoint(): string {
        return `${this.options.url}${this.options.endpoint}`
    }

}