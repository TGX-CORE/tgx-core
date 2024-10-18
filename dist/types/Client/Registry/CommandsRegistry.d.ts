import { CommandScopeType } from '../../Types/Command';
import { Command } from '../../Classes/Command';
import { Registry } from './Registry';
import { Client } from '../Client';
export declare class CommandsRegistry extends Registry<Command> {
    client: Client;
    cached: any;
    constructor(client: Client);
    loadAll(): Promise<void>;
    registerCommand(commands: string, language_code: string, scope: CommandScopeType, chat_id?: string | number, user_id?: string): Promise<boolean>;
}
//# sourceMappingURL=CommandsRegistry.d.ts.map