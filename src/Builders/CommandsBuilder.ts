import { Builder } from './Builder'

export class CommandsBuilder extends Builder {

    /**
     * @param commands An array of commands as [command, description].
     */
    public constructor(...commands: [string, string][]){
        super({ value: commands.map(([command, description]) => ({ command, description })), parseVal: true })
    }

    /**
     * Add a command to the current builder.
     * 
     * @param command The command, must be lower cased.
     * @param description The description of the command.
     */
    public add(command: string, description: string){
        this.value.push({ command, description })
    }

}