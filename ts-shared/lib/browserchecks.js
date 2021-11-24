"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isBrowserSupported() {
    return 'Promise' in window && 'isFinite' in Number;
}
exports.isBrowserSupported = isBrowserSupported;
//# sourceMappingURL=browserchecks.js.map