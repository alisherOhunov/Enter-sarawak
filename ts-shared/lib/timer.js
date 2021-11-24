"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} ms
 * @return {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.delay = delay;
//# sourceMappingURL=timer.js.map