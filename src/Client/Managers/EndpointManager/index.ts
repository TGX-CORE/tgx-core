import { Endpoint, type EndpointOptions } from '../../../Types/EndpointManager'
import type { UpdatePacket } from '../../../Types/EndpointManager'
import type { Client } from '../../Client'

import { ClientEvent } from '../../../Types/ClientEvent'
import { WebhookCluster } from './WebhookCluster'
import { BaseManager } from '../BaseManager'
import { PollCluster } from './PollCluster'

export class EndpointManager extends BaseManager<EndpointOptions> {

    public cluster?: PollCluster|WebhookCluster

    public offset: number = 0;

    public constructor(client: Client){
        super(client, 'endpoint', {
            type: Endpoint.Poll,
            handle: {
                ignore_sender_chats: false,
                ignore_bots: true,
                ignore_self: true
            }
        })

        switch(this.options.type){
            case Endpoint.Poll:
                this.cluster = new PollCluster(this)
                break
            case Endpoint.Webhook:
                this.cluster = new WebhookCluster(this)
                break
            case Endpoint.UpdatePacket:
            default:
                break
        }
    }

    public handle(updates: UpdatePacket|UpdatePacket[]){
        if(Array.isArray(updates)){
            for(let update of updates){
                this.handle(update)
            } return
        }

        if(!updates) return
        for(let pointer in updates){
            if(!Object.values(ClientEvent).includes(pointer as ClientEvent)) continue

            this.client.emit(ClientEvent.Raw, pointer, (updates as any)[pointer])
            if(this.client.actions[pointer]) this.client.actions[pointer].handle((updates as any)[pointer])
            else this.client.emit(ClientEvent.Unhandled, updates)
        }

        this.offset = updates.update_id
    }

    public async initialize(): Promise<void> {
        await this.cluster?.initialize()
    }

}