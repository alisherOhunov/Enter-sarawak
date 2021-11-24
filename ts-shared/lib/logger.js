"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
/**
 * @param date {Date}
 * @returns {string}
 */
function getLogTimeString(date) {
    return luxon_1.DateTime.fromJSDate(date).toFormat('TT');
}
/**
 * @param level {number}
 * @returns {string}
 */
function getLogLevelString(level) {
    switch (level) {
        case 0:
            return 'VBOS';
        case 1:
            return 'DBUG';
        case 2:
            return 'INFO';
        case 3:
            return 'WARN';
        case 4:
            return 'ERRR';
        case 5:
            return 'FTAL';
        default:
            return 'UKNN';
    }
}
/**
 * @param level {number}
 * @returns {string}
 */
function getLogLevelConsoleStyle1(level) {
    let style = 'color: white; background: ';
    switch (level) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
    return style;
}
/**
 * @param level {number}
 * @returns {string}
 */
function getLogLevelConsoleStyle2(level) {
    let style = 'color: ';
    switch (level) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
    return style;
}
/**
 * @param level {number}
 * @param log {string}
 * @returns {void}
 */
function logToConsole(level, log) {
    console.log(`%c ${getLogLevelString(level)} %c ${getLogTimeString(new Date())} - ${log}`, getLogLevelConsoleStyle1(level), getLogLevelConsoleStyle2(level));
}
class Logger {
    constructor(level) {
        this.level = level;
    }
    trace(log) {
        this.log(0, log);
    }
    debug(log) {
        this.log(1, log);
    }
    info(log) {
        this.log(2, log);
    }
    warn(log) {
        this.log(3, log);
    }
    error(log) {
        this.log(4, log);
    }
    fatal(log) {
        this.log(5, log);
    }
    obj(name, obj) {
        if (2 < this.level) {
            return;
        }
        logToConsole(2, `Inspecting ${name}:`);
        console.log(obj);
    }
    log(level, log) {
        if (level < this.level) {
            return;
        }
        logToConsole(level, log);
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map