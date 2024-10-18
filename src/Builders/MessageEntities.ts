import { MessageEntitiesType } from '../Types/MessageEntity';
import { Builder } from './Builder'

export class MessageEntities extends Builder {

    public declare value: MessageEntitiesType[]
    
    /**
     * @param entites The entities to attach to the message.
     */
    public constructor(...entites: MessageEntitiesType[]){
        super({ value: entites = [ ] })
    }

    /**
     * Add entities to the current builder.
     * 
     * @param entity The entities to add to the message.
     */
    public add(...entity: MessageEntitiesType[]){
        this.value.push(...entity)
        return this
    }

}