import type { BotCommand, CommandScope } from '../../Types/Command'

import { CommandScopeType } from '../../Types/Command'
import { isJson } from '../../Internals/shared'
import { BaseManager } from './BaseManager'

export interface CommandsPayload {
    commands: string
    scope?: string
    language_code?: string
}

export class CommandsManager extends BaseManager {

    /**
     * Updates all of the commands but filters ignored from the commands registry.
     */
    public async update(): Promise<boolean> {
        let cached = this.client.registries.get('commands').cached
        for(const scope in cached){
            for(const language_code in cached[scope]){
                let current = cached[scope][language_code]
                switch(scope){
                    case CommandScopeType.AllChatAdministrators: 
                    case CommandScopeType.AllPrivateChats:
                    case CommandScopeType.AllGroupChats:
                    case CommandScopeType.Default:
                    default: 
                        this.register(
                            current,
                            language_code,
                            scope as CommandScopeType
                        )
                        break
                    case CommandScopeType.ChatAdministrators:
                    case CommandScopeType.Chat:
                        for(const chat_id in current){
                            await this.register(
                                current[chat_id],
                                language_code,
                                scope as CommandScopeType,
                                chat_id
                            )
                        }
                        break
                    case CommandScopeType.ChatMember:
                        for(const chat_id in current){
                            for(const user_id of current[chat_id].ids){
                                await this.register(
                                    current[chat_id].commands,
                                    language_code,
                                    scope as CommandScopeType,
                                    chat_id,
                                    user_id
                                )
                            }
                        }
                        break
                }
            }
        }
        return true
    }

    /**
     * Register the commands.
     * 
     * @param commands An array of the commands command as an id, they must be registered to the registry.
     * @param language_code The language code scope of the current commands.
     * @param scope The scope of the current commands.
     * @param chat_id The attached chat_id of the scope.
     * @param user_id The attached user_id of the scope.
     */
    public async register(commands: string[], language_code: string, scope: CommandScopeType, chat_id?: string|number, user_id?: string): Promise<boolean> {
        return this.set({
           commands: JSON.stringify(
                commands
                    .map((_command: string) => {
                        let command = this.client.registries.get('commands').get(_command.split('|')[0]).getCommand(_command.split('|')[0])
                        return command.ignore ? null : command
                    })
                    .filter((command) => command && !command.ignore||command !== null)
            ),
           language_code: language_code === 'undefined' ? undefined : language_code,
           scope: JSON.stringify({
            type: scope,
            user_id: user_id ? Number(user_id) : undefined,
            chat_id: chat_id ? (typeof chat_id == 'string' && chat_id?.startsWith('@') ? chat_id : Number(chat_id)) : undefined
           })
        })
    }

    /**
     * Set the commands.
     * 
     * @param payload The payload to update the commands.
     */
    public async set(payload: CommandsPayload): Promise<boolean> {
        return this.client.api.setMyCommands(null, {
            params: payload,
            returnOk: true
        })

    }

    /**
     * Get the commands that are relevant w/o scope and language code.
     * 
     * @param scope The scope of the command.
     * @param language_code The language code of the command.
     */
    public async get(scope?: CommandScope, language_code?: string): Promise<BotCommand[]|boolean> {
        return this.client.api.getMyCommands(null, {
            params: { scope, language_code },
            lean: true,
            result: true
        })
    }

    /**
     * Delete the commands that are relevant w/o scope and language code.
     * 
     * @param scope The scope of the command.
     * @param language_code The language code of the command.
     */
    public async delete(scope?: CommandScope, language_code?: string): Promise<boolean> {
        return this.client.api.deleteMyCommands(null, {
            params: { scope, language_code },
            lean: true,
            result: true
        })
    }

}