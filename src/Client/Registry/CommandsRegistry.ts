import { CommandScopeType } from '../../Types/Command'
import { ClientEvent } from '../../Types/ClientEvent'
import { Command } from '../../Classes/Command'
import { Registries } from '../../Types/Client'
import { Message } from '../../Classes/Message'
import { Registry } from './Registry'
import { Client } from '../Client'

export class CommandsRegistry extends Registry<Command> {

    public declare client: Client

    public id: Registries = Registries.Commands

    public cached: any = { }

    public constructor(client: Client){
        super(client, Command, { name: 'commands' })

        this.client.on(ClientEvent.Text, (message: Message) => {
            for(let command of message.entities.bot_commands()){
                let icommand = message.entities.parseText(command.offset, command.length).split('@')[0].replace('/', '')
                this.client.emit(ClientEvent.Command, icommand, message)
            }
        })

        this.client.on(ClientEvent.Command, (command: string, message: Message) => {
            if(!this.client.commands.listeners(command).length){
                return this.client.logger.warn(`A command '${command}' has been received; it has been ignored since there are no listeners.`)
            } else {
                this.client.commands.emit(command, message)
            }
        })
    }

    public override async loadAll(): Promise<void> {
        const cached = this.cached
        await super.loadAll()
 
        this.each((command: Command) => {
            if(command.ignore) return
            let current = cached[command.scope] ?? (cached[command.scope] = { })

            switch(command.scope){
                case CommandScopeType.AllChatAdministrators:
                case CommandScopeType.AllPrivateChats:
                case CommandScopeType.AllGroupChats:
                case CommandScopeType.Default:
                default:
                    current = current[command.language_code] ?? (current[command.language_code] = [ ])
                    current.push(command.getCommand())
                    break
                case CommandScopeType.ChatAdministrators:
                case CommandScopeType.Chat:
                    current = current[command.language_code] ?? (current[command.language_code] = { })
                    for(const id of command.chat_ids ?? [ ]){
                        current = current[id] ?? (current[id] = [ ])
                        current.push(command.getCommand())
                    }
                    break
                case CommandScopeType.ChatMember:
                    current = current[command.language_code] ?? (current[command.language_code] = { })
                    for(const id in command.chat_groups ?? { }){
                        current = current[id] ?? (current[id] = { })
                        current.ids = [ ...current.ids ?? [ ], ...command.chat_groups?.[id] ?? [ ] ]
                        current.commands = current.commands ?? (current.commands = [ ])
                        current.commands.push(command.getCommand())
                    }
            }
        })

        for(const scope in cached){
            let current = cached[scope]
            for(const language_code in cached[scope]){
                current = current[language_code]
                switch(scope){
                    case CommandScopeType.AllChatAdministrators: 
                    case CommandScopeType.AllPrivateChats:
                    case CommandScopeType.AllGroupChats:
                    case CommandScopeType.Default:
                        await this.registerCommand(
                            JSON.stringify(current),
                            language_code,
                            scope
                        )
                        break
                    case CommandScopeType.ChatAdministrators:
                    case CommandScopeType.Chat:
                        for(const chat_id in current){
                            await this.registerCommand(
                                JSON.stringify(current[chat_id]),
                                language_code,
                                scope,
                                chat_id
                            )
                        }
                        break
                    case CommandScopeType.ChatMember:
                        for(const chat_id in current){
                            for(const user_id of current[chat_id]['ids']){
                                await this.registerCommand(
                                    JSON.stringify(current[chat_id].commands),
                                    language_code,
                                    scope,
                                    chat_id,
                                    user_id
                                )
                            }
                        }
                        break
                }
            }
        }
    }

    public async registerCommand(commands: string, language_code: string, scope: CommandScopeType, chat_id?: string|number, user_id?: string): Promise<boolean> {
        return this.client.commands.set({
            commands,
            language_code: language_code == 'undefined' ? undefined : language_code,
            scope: JSON.stringify({
                type: scope, 
                user_id: user_id ? Number(user_id) : undefined, 
                chat_id: chat_id ? (typeof chat_id == 'string' && chat_id?.startsWith('@') ? chat_id : Number(chat_id)) : undefined
            })
        })
    }

}