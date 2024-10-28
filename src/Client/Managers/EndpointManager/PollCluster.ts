import { AllowedUpdates, Endpoint, UpdatePacket } from '../../../Types/EndpointManager'
import { AllowedUpdatesOptions } from '../../../Builders/AllowedOptions'

import { PollEndpointOptions } from '../../../Types/EndpointManager'
import { EndpointCluster } from './EndpointCluster'
import { Routes } from '../../../Types/Routes' 
import { EndpointManager } from '.'

export class PollCluster extends EndpointCluster<PollEndpointOptions> {

    public offset: number = 0

    public interluder?: NodeJS.Timeout

    public active: boolean = true

    public constructor(endpoint_manager: EndpointManager){
        super(endpoint_manager, {
            type: Endpoint.Poll,
            limit: 100,
            timeout: 0,
            delay: 5_000,
            allowed_updates: new AllowedUpdatesOptions(AllowedUpdates.Message),
            ignore_self: true,
            ignore_bots: true,
            ignore_sender_chats: false
        })

    }

    public override async initialize(): Promise<void> {
        this.client.logger.debug('PollCluster ready and will receive updates soon.')
        await this.interlude()
    }

    private async interlude(): Promise<void> {
        var message = await this.poll()
        if(message) this.endpoint_manager.handle(message)
        this.interluder = setTimeout(() => {
            this.active ?
                this.interlude()
            :   null
        }, this.options.delay)
    }

    private async poll(): Promise<UpdatePacket[]> {
        let{ offset, options: { limit, allowed_updates, timeout } } = this
        return this.client.rest.post(Routes.GetUpdates, { limit, allowed_updates, timeout, offset })
    }

}
