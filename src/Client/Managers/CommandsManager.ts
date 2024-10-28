import type { BotCommand, CommandScope } from '../../Types/Command'

import { CommandsScopeBuilder } from '../../Builders/CommandsScopeBuilder'
import { CommandsBuilder } from '../../Builders/CommandsBuilder'
import { CommandScopeType } from '../../Types/Command'
import { BaseManager } from './BaseManager'
import { Routes } from '../../Types/Routes'

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
        let cached = this.client.extensions.get('Registries').commands.cached
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
        return this.set(
            new CommandsBuilder(...commands
            .map((_command: string) => {
                let command = this.client.extensions.get('Registries').commands.get(_command.split('|')[0]).getCommand(_command.split('|')[0])
                return !command||command.ignore ? null : command
            })
            .filter((command) => command && !command.ignore||command !== null)
            .map((command) => [command.command, command.description]) as [string, string][]),
            language_code === 'undefined' ? undefined : language_code,
            new CommandsScopeBuilder(
                scope,
                chat_id ? (typeof chat_id == 'string' && chat_id?.startsWith('@') ? chat_id : Number(chat_id)) : undefined,
                user_id ? Number(user_id) : undefined
            )
        )
    }

    /**
     * Set the commands.
     * 
     * @param commands The list of commands that are relevant, must be a JSON-serialized object.
     * @param language_code The language code that are relevant to.
     * @param scope The scope of the commands that are releaven to, must be a JSON-serialized object.
     */
    public async set(commands: CommandsBuilder|string, language_code?: string, scope?: CommandsScopeBuilder|string): Promise<boolean> {
        return this.client.rest.post(Routes.SetMyCommands, { commands, language_code, scope }, { ok: true })
    }

    /**
     * Get the commands that are relevant w/o scope and language code.
     * 
     * @param scope The scope of the command.
     * @param language_code The language code of the command.
     */
    public async get(scope?: CommandScope, language_code?: string): Promise<BotCommand[]|boolean> {
        return this.client.rest.get(Routes.GetMyCommands, { scope, language_code }, { ok: true })
    }

    /**
     * Delete the commands that are relevant w/o scope and language code.
     * 
     * @param scope The scope of the command.
     * @param language_code The language code of the command.
     */
    public async delete(scope?: CommandScope, language_code?: string): Promise<boolean> {
        return this.client.rest.post(Routes.DeleteMyCommands, { scope, language_code }, { ok: true })
    }

}