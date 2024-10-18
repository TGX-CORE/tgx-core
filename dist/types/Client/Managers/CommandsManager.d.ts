import type { BotCommand, CommandScopeType, CommandScope } from '../../Types/Command';
import { BaseManager } from './BaseManager';
export interface CommandsPayload {
    commands: string;
    scope?: CommandScope;
    language_code?: string;
}
export declare class CommandsManager extends BaseManager {
    set(payload: CommandsPayload): Promise<boolean>;
    get(scope?: CommandScopeType, language_code?: string): Promise<BotCommand[] | boolean>;
    delete(scope?: CommandScopeType, language_code?: string): Promise<boolean>;
}
//# sourceMappingURL=CommandsManager.d.ts.map