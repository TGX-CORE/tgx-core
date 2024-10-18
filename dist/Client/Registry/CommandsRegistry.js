"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsRegistry = void 0;
const Command_1 = require("../../Types/Command");
const ClientEvent_1 = require("../../Types/ClientEvent");
const Command_2 = require("../../Classes/Command");
const Client_1 = require("../../Types/Client");
const Registry_1 = require("./Registry");
class CommandsRegistry extends Registry_1.Registry {
    constructor(client) {
        super(client, Command_2.Command, { name: 'commands' });
        this.id = Client_1.Registries.Commands;
        this.cached = {};
        this.client.on(ClientEvent_1.ClientEvent.Text, (message) => {
            for (let command of message.entities.bot_commands()) {
                let icommand = message.entities.parseText(command.offset, command.length).split('@')[0].replace('/', '');
                this.client.emit(ClientEvent_1.ClientEvent.Command, icommand, message);
            }
        });
        this.client.on(ClientEvent_1.ClientEvent.Command, (command, message) => {
            if (!this.client.commands.listeners(command).length) {
                return this.client.logger.warn(`A command '${command}' has been received; it has been ignored since there are no listeners.`);
            }
            else {
                this.client.commands.emit(command, message);
            }
        });
    }
    async loadAll() {
        const cached = this.cached;
        await super.loadAll();
        this.each((command) => {
            if (command.ignore)
                return;
            let current = cached[command.scope] ?? (cached[command.scope] = {});
            switch (command.scope) {
                case Command_1.CommandScopeType.AllChatAdministrators:
                case Command_1.CommandScopeType.AllPrivateChats:
                case Command_1.CommandScopeType.AllGroupChats:
                case Command_1.CommandScopeType.Default:
                default:
                    current = current[command.language_code] ?? (current[command.language_code] = []);
                    current.push(command.getCommand());
                    break;
                case Command_1.CommandScopeType.ChatAdministrators:
                case Command_1.CommandScopeType.Chat:
                    current = current[command.language_code] ?? (current[command.language_code] = {});
                    for (const id of command.chat_ids ?? []) {
                        current = current[id] ?? (current[id] = []);
                        current.push(command.getCommand());
                    }
                    break;
                case Command_1.CommandScopeType.ChatMember:
                    current = current[command.language_code] ?? (current[command.language_code] = {});
                    for (const id in command.chat_groups ?? {}) {
                        current = current[id] ?? (current[id] = {});
                        current.ids = [...current.ids ?? [], ...command.chat_groups?.[id] ?? []];
                        current.commands = current.commands ?? (current.commands = []);
                        current.commands.push(command.getCommand());
                    }
            }
        });
        for (const scope in cached) {
            let current = cached[scope];
            for (const language_code in cached[scope]) {
                current = current[language_code];
                switch (scope) {
                    case Command_1.CommandScopeType.AllChatAdministrators:
                    case Command_1.CommandScopeType.AllPrivateChats:
                    case Command_1.CommandScopeType.AllGroupChats:
                    case Command_1.CommandScopeType.Default:
                        await this.registerCommand(JSON.stringify(current), language_code, scope);
                        break;
                    case Command_1.CommandScopeType.ChatAdministrators:
                    case Command_1.CommandScopeType.Chat:
                        for (const chat_id in current) {
                            await this.registerCommand(JSON.stringify(current[chat_id]), language_code, scope, chat_id);
                        }
                        break;
                    case Command_1.CommandScopeType.ChatMember:
                        for (const chat_id in current) {
                            for (const user_id of current[chat_id]['ids']) {
                                await this.registerCommand(JSON.stringify(current[chat_id].commands), language_code, scope, chat_id, user_id);
                            }
                        }
                        break;
                }
            }
        }
    }
    async registerCommand(commands, language_code, scope, chat_id, user_id) {
        return this.client.commands.set({
            commands,
            language_code: language_code == 'undefined' ? undefined : language_code,
            scope: JSON.stringify({
                type: scope,
                user_id: user_id ? Number(user_id) : undefined,
                chat_id: chat_id ? (typeof chat_id == 'string' && chat_id?.startsWith('@') ? chat_id : Number(chat_id)) : undefined
            })
        });
    }
}
exports.CommandsRegistry = CommandsRegistry;
//# sourceMappingURL=CommandsRegistry.js.map