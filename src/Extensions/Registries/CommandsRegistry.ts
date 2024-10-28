import { Command } from '../../Classes/Command'
import { CommandScopeType } from '../../Types/Command'
import { Registries } from '../Registries'
import { Registry } from './Registry'

export interface CommandsRegistryOptions {
    load?: boolean
    path?: string
}

export class CommandsRegistry extends Registry<string, Command> {

    public cached: any = [ ]

    public constructor(registry: Registries, options?: CommandsRegistryOptions){
        super(registry, Command, {
            name: 'commands'
        })

        if(options?.load) this.register(options?.path ?? `${registry.root}/commands`)
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
    }

}