export declare enum LogLevel {
    Debug = 20,
    Info = 30,
    Warn = 40,
    Error = 50,
    Fatal = 60,
    None = 100
}
export interface LoggerOptions {
    level?: LogLevel;
}
export type LogMethods = 'debug' | 'info' | 'warn' | 'error';
export declare class Logger {
    level: LogLevel;
    constructor(level?: LogLevel | undefined);
    debug(...argumants: any[]): void;
    info(...argumants: any[]): void;
    warn(...argumants: any[]): void;
    error(...argumants: any[]): void;
    has(level: LogLevel): boolean;
    private write;
    static readonly levels: Map<LogLevel, LogMethods>;
}
//# sourceMappingURL=Logger.d.ts.map