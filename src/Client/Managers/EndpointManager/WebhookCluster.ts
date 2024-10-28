import { Endpoint, type WebhookEndpointOptions } from '../../../Types/EndpointManager'
import type { EndpointManager } from '.'

import { EndpointCluster } from './EndpointCluster'
import express, { type Express } from 'express'
import parser from 'body-parser'

export class WebhookCluster extends EndpointCluster<WebhookEndpointOptions> {

    public express: Express

    public static min: number = 1024
    public static max: number = 65535

    public constructor(endpoint_manager: EndpointManager){
        super(endpoint_manager, {
            port: Math.floor(Math.random() * (WebhookCluster.max - WebhookCluster.min + 1)) + WebhookCluster.min,
            endpoint: '/webhook',
            type: Endpoint.Webhook,
            update: true
        })

        this.express = express()
        this.express.use(parser.json())

        this.express.post(this.options.endpoint!, this.post.bind(this))
        this.express.get(this.options.endpoint!, this.get.bind(this))
        this.express.get(`*`, this.redirectEndpoint.bind(this))

    }

    private redirectEndpoint(req: any, res:any){
        res.redirect(this.options.endpoint)
    }

    private get(req: any, res: any) {
        res.sendStatus(200)
    }

    private post(req: any, res: any) {
        this.endpoint_manager.handle(req.body)
        res.sendStatus(200)
    }

    public get endpoint(){
        return `${this.options.url}${this.options.endpoint}`
    }

    public override async initialize(): Promise<void> {
        this.client.logger.debug('WebhookCluster is preparing to start.')

        return new Promise(async (resolve) => {
            this.client.logger.debug('WebhookCluster is updating the webhook info.')
            await this.client.webhook.set(this)

            this.express.listen(this.options.port, () => {
                this.client.logger.debug(
                    `WebhookCluster is ready.`, `\n`,
                    `ENDPOINT: ${this.endpoint}`, `\n`,
                    `PORT: ${this.options.port}`,)
                resolve()
            })
        })
    }

}