"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 20] = "Debug";
    LogLevel[LogLevel["Info"] = 30] = "Info";
    LogLevel[LogLevel["Warn"] = 40] = "Warn";
    LogLevel[LogLevel["Error"] = 50] = "Error";
    LogLevel[LogLevel["Fatal"] = 60] = "Fatal";
    LogLevel[LogLevel["None"] = 100] = "None";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor(level = LogLevel.Debug) {
        this.level = level;
    }
    debug(...argumants) {
        this.write(LogLevel.Debug, ...argumants);
    }
    info(...argumants) {
        this.write(LogLevel.Info, ...argumants);
    }
    warn(...argumants) {
        this.write(LogLevel.Warn, ...argumants);
    }
    error(...argumants) {
        this.write(LogLevel.Error, ...argumants);
    }
    has(level) {
        return level >= this.level;
    }
    write(level, ...argumants) {
        if (!this.has(level))
            return;
        const method = Logger.levels.get(level);
        if (typeof method === 'string')
            console[method](`[${method.toUpperCase()}]`, ...argumants);
    }
}
exports.Logger = Logger;
Logger.levels = new Map([
    [LogLevel.Debug, 'debug'],
    [LogLevel.Info, 'info'],
    [LogLevel.Warn, 'warn'],
    [LogLevel.Error, 'error'],
    [LogLevel.Fatal, 'error']
]);
//# sourceMappingURL=Logger.js.map