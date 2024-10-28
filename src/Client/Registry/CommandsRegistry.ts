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

            let { scope, language_code, chat_ids, chat_groups } = command
            let language_codes = [ ], current = cached[scope] ??= { }

            if(typeof language_code === 'object'){
                for(let [key, value] of Object.entries(language_code)){
                    if(value.ignore) continue
                    language_codes.push([key, value.command])
                }
            } else {
                language_codes.push([language_code, command.command])
            }

            switch(command.scope){
                case CommandScopeType.AllChatAdministrators:
                case CommandScopeType.AllPrivateChats:
                case CommandScopeType.AllGroupChats:
                case CommandScopeType.Default:
                default:
                    for(let [code, command_name] of language_codes){
                        (current[code!] ??= [ ]).push(`${command.name}|${command_name}`)
                    }
                    break
                case CommandScopeType.ChatAdministrators:
                case CommandScopeType.Chat:
                    for(let [code, command_name] of language_codes){
                        for(const id of chat_ids ?? [ ]){
                            ((current[code!] ??= { })[id] ??= [ ]).push(`${command.name}|${command_name}`)
                        }
                    }
                    break
                case CommandScopeType.ChatMember:
                    for(let [code, command_name] of language_codes){
                        for(const id in chat_groups ?? { }){
                            let group = ((current[code!] ??= { })[id] ??= { ids: [ ], commands: [ ]})
                            group.ids.push(...chat_groups?.[id] ?? [ ])
                            group.commands.push(`${command.name}|${command_name}`)
                        }
                    }
                    break
            }
        })

        await this.client.commands.update()
    }

}