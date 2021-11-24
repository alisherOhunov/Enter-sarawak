export default class Logger {
    constructor(level: number);
    level: number;
    trace(log: string): void;
    debug(log: string): void;
    info(log: string): void;
    warn(log: string): void;
    error(log: string): void;
    fatal(log: string): void;
    obj(name: string, obj: any): void;
    log(level: number, log: string): void;
}
