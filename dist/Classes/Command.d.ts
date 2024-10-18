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
    emitter?: any;
}
/**
 * A command piece.
 *
 * @property command The command that is attach to this piece.
 * @property description The description of the command.
 * @property scope The scope of the command, see [ <TelegramAPI#BotCommandScope> ](https://core.telegram.org/bots/api#botcommandscope).
 * @property language_code A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 * @property ignore Wether to ignore the piece if it has been registered for faster intializing.
 * @property chat_ids The chat ids to attach to the scope.
 * @property chat_groups The chat ids along with their member ids to attach to the scope.
 */
export declare abstract class Command extends Piece<CommandMeta> {
    emitter: any;
    command: string;
    description: string;
    scope: CommandScopeType;
    language_code: string;
    ignore: boolean;
    chat_ids?: number[];
    chat_groups?: {
        [key: number]: number[];
    };
    registry: CommandsRegistry;
    private utilizer;
    constructor(context_piece: PieceContext, context_metadata: CommandMeta);
    /**
     * Activates or resumes the listener, this is activated on load.
     */
    listen(): void;
    /**
     * Stops the listener.
     */
    stop(): void;
    getCommand(): BotCommand;
    /**
     * @hidden
     */
    onLoad(): undefined;
    /**
     * @hidden
    */
    _run(...args: unknown[]): void;
    abstract run(...args: unknown[]): unknown;
}
