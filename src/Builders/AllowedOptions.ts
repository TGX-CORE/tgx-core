import { AllowedUpdates } from '../Types/EndpointManager'
import { Builder } from './Builder'

export class AllowedUpdatesOptions extends Builder {

    public declare value: AllowedUpdates[]

    /**
     * @param allowed_updates The updates the client will receive. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.
     */
    public constructor(...allowed_updates: AllowedUpdates[]){
        if(allowed_updates.includes(AllowedUpdates.All)){
            allowed_updates = Object.values(AllowedUpdates)
                .filter((value) => value !== AllowedUpdates.All)
                .map((value) => value)
        }

        super({ value: allowed_updates, parseVal: true })
    }
    
}