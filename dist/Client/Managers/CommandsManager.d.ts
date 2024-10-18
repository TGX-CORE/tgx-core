import type { BotCommand, CommandScopeType } from '../../Types/Command';
import { BaseManager } from './BaseManager';
export interface CommandsPayload {
    commands: string;
    scope?: string;
    language_code?: string;
}
export declare class CommandsManager extends BaseManager {
    set(payload: CommandsPayload): Promise<boolean>;
    get(scope?: CommandScopeType, language_code?: string): Promise<BotCommand[] | boolean>;
    delete(scope?: CommandScopeType, language_code?: string): Promise<boolean>;
}
