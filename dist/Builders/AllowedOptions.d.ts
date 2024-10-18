import { AllowedUpdates } from '../Client/Managers/PollManager';
import { Builder } from './Builder';
export declare class AllowedUpdatesOptions extends Builder {
    value: AllowedUpdates[];
    /**
     * @param allowed_updates The updates the client will receive. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.
     */
    constructor(...allowed_updates: AllowedUpdates[]);
}
