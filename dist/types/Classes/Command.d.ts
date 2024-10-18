import type { CommandsRegistry } from '../Client/Registry/CommandsRegistry';
import type { PieceContext } from './Piece';
import { CommandScopeType, type BotCommand } from '../Types/Command';
import { Piece } from './Piece';
export interface CommandMeta {
    name: string;
    command: string;
    description: string;
    scope?: CommandScopeType;
    language_code?: string;
    ignore?: boolean;
    chat_ids?: number[];
    chat_groups?: {
        [key: number]: number[];
    };
}
/**
 * A command piece.
 */
export declare abstract class Command extends Piece<CommandMeta> {
    /**
     * The command that is attach to this piece.
     */
    command: string;
    /**
     * The description of the command.
     */
    description: string;
    /**
     * The scope of the command, see [ <TelegramAPI#BotCommandScope> ](https://core.telegram.org/bots/api#botcommandscope).
     */
    scope: CommandScopeType;
    /**
     * A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
     */
    language_code: string;
    /**
     * Wether to ignore the piece if it has been registered for faster intializing.
     */
    ignore: boolean;
    /**
     * The chat ids to attach to the scope.
     */
    chat_ids?: number[];
    /**
     * The chat ids along with their member ids to attach to the scope.
     */
    chat_groups?: {
        [key: number]: number[];
    };
    registry: CommandsRegistry;
    constructor(context_piece: PieceContext, context_metadata: CommandMeta);
    getCommand(): BotCommand;
    abstract run(...args: unknown[]): unknown;
    /**
     * @hidden
     */
    _run(...args: unknown[]): void;
}
//# sourceMappingURL=Command.d.ts.map