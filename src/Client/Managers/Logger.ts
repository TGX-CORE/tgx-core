export enum LogLevel {
    Debug = 20,
    Info = 30,
    Warn = 40,
    Error = 50,
    Fatal = 60,
    None = 100
}

export interface LoggerOptions {
    level?: LogLevel
}

export type LogMethods = 'debug'|'info'|'warn'|'error';
export class Logger {

    public level: LogLevel
    constructor(level: LogLevel|undefined = LogLevel.Debug){
        this.level = level
    }

    public debug(...argumants: any[]): void {
        this.write(LogLevel.Debug, ...argumants)
    }

    public info(...argumants: any[]): void {
        this.write(LogLevel.Info, ...argumants)
    }

    public warn(...argumants: any[]): void {
        this.write(LogLevel.Warn, ...argumants)
    }

    public error(...argumants: any[]): void {
        this.write(LogLevel.Error, ...argumants)
    }

    public has(level: LogLevel): boolean {
        return level >= this.level
    }

    private write(level: LogLevel, ...argumants: any[]): void {
        if(!this.has(level)) return
        const method = Logger.levels.get(level)
        if(typeof method === 'string' ) console[method](`[${method.toUpperCase()}]`, ...argumants)
    }

    public static readonly levels = new Map<LogLevel, LogMethods>([
        [LogLevel.Debug, 'debug'],
        [LogLevel.Info, 'info'],
        [LogLevel.Warn, 'warn'],
        [LogLevel.Error, 'error'],
        [LogLevel.Fatal, 'error']
    ])

}