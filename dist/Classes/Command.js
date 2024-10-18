"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const Command_1 = require("../Types/Command");
const Piece_1 = require("./Piece");
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
class Command extends Piece_1.Piece {
    constructor(context_piece, context_metadata) {
        super(context_piece, context_metadata);
        this.command = context_metadata.command ?? context_metadata.name;
        this.description = context_metadata.description;
        this.scope = context_metadata.scope ?? Command_1.CommandScopeType.Default;
        this.language_code = context_metadata.language_code ?? 'undefined';
        this.ignore = context_metadata.ignore ?? false;
        this.chat_ids = context_metadata.chat_ids;
        this.chat_groups = context_metadata.chat_groups;
        this.emitter = context_metadata.emitter ?? this.client?.commands;
        this.utilizer = this.emitter && this.command ? this._run.bind(this) : null;
        if (!this.emitter && !this.utilizer)
            this.enabled = false;
    }
    /**
     * Activates or resumes the listener, this is activated on load.
     */
    listen() {
        if (this.utilizer) {
            const maxListeners = this.emitter.getMaxListeners();
            if (maxListeners !== 0)
                this.emitter.setMaxListeners(maxListeners + 1);
            this.emitter.on(this.command, this._run.bind(this));
        }
    }
    /**
     * Stops the listener.
     */
    stop() {
        this.emitter.removeListener(this.command, this._run);
    }
    getCommand() {
        return { command: this.command, description: this.description };
    }
    /**
     * @hidden
     */
    onLoad() {
        this.listen();
        return super.onLoad();
    }
    /**
     * @hidden
    */
    _run(...args) {
        this.run(...args);
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map