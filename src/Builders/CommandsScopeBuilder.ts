import { CommandScopeType } from '../Types/Command';
import { Builder } from './Builder'

export class CommandsScopeBuilder extends Builder {

    /**
     * @param type The type of the scope.
     * @param chat_id The id of the chat that is relevant.
     * @param user_id The id of the user that is relevent.
     */
    public constructor(type: CommandScopeType, chat_id?: string|number, user_id?: number){
        super({ value: { type, chat_id, user_id }, parseVal: true })
    }

    /**
     * @param type The type of the command.
     */
    setType(type: CommandScopeType){
        this.value.type = type
        return this
    }

    /**
     * @param user_id The id of the user that is relevant.
     */
    setUser(user_id: number){
        this.value.user_id = user_id
        return this
    }

    /**
     * @param chat_id The id of the chat that is relevant.
     */
    setChat(chat_id: string|number){
        this.value.chat_id = chat_id
        return this
    }
    
}