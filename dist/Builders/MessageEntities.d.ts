import { MessageEntitiesType } from '../Types/MessageEntity';
import { Builder } from './Builder';
export declare class MessageEntities extends Builder {
    value: MessageEntitiesType[];
    /**
     * @param entites The entities to attach to the message.
     */
    constructor(...entites: MessageEntitiesType[]);
    /**
     * Add entities to the current builder.
     *
     * @param entity The entities to add to the message.
     */
    add(...entity: MessageEntitiesType[]): this;
}
