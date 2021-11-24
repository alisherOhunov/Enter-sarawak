"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class ValidationResult {
    /** @param originalValue {ValidatableType} */
    constructor(originalValue) {
        this._originalValue = originalValue;
        this._errorMessages = [];
        this._isValid = true;
    }
    get originalValue() {
        return this._originalValue;
    }
    get errorMessages() {
        return this._errorMessages;
    }
    get isValid() {
        return this._isValid;
    }
    invalidate(errorMessage) {
        this._errorMessages.push(errorMessage);
        this._isValid = false;
    }
}
class Validator {
    constructor(value) {
        this._result = new ValidationResult(value);
    }
    get originalValue() {
        return this._result.originalValue;
    }
    get errorMessages() {
        return this._result.errorMessages;
    }
    get isValid() {
        return this._result.isValid;
    }
    notNull(errorMessage) {
        const value = this._result.originalValue;
        if (lodash_1.isNumber(value)) {
            return this;
        }
        if (value == null) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    notEmpty(errorMessage) {
        const value = this._result.originalValue;
        if (lodash_1.isNumber(value)) {
            return this;
        }
        if (value == null) {
            this._result.invalidate(errorMessage);
        }
        if (lodash_1.isString(value) && value.length === 0) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    eMail(errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        const match = value.match(/(\w+)@(\w+)\.[a-zA-Z]/);
        if (match == null) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    regex(pattern, errorMessage) {
        const value = this._result.originalValue;
        let str = value.toString();
        const match = str.match(pattern);
        if (match == null) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    equals(other, errorMessage) {
        const value = this._result.originalValue;
        if (value === other) {
            return this;
        }
        this._result.invalidate(errorMessage);
        return this;
    }
    notEquals(other, errorMessage) {
        const value = this._result.originalValue;
        if (value === other) {
            this._result.invalidate(errorMessage);
            return this;
        }
        return this;
    }
    minLength(length, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        if (value.length < length) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    maxLength(length, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        if (value.length > length) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    minUppercase(count, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        const matches = value.match(/[A-Z]/g);
        if (matches == null || matches.length < count) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    minLowercase(count, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        const matches = value.match(/[a-z]/g);
        if (matches == null || matches.length < count) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    minDigit(count, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        const matches = value.match(/[0-9]/g);
        if (matches == null || matches.length < count) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    minSymbol(count, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isString(value)) {
            return this;
        }
        const matches = value.match(/[^\w\s]/g);
        if (matches == null || matches.length < count) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    range(min, max, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isNumber(value) && !lodash_1.isDate(value)) {
            return this;
        }
        if (value < min || value > max) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    lessThan(comparison, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isNumber(value) && !lodash_1.isDate(value)) {
            return this;
        }
        if (value >= comparison) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    lessThanOrEqualsTo(comparison, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isNumber(value) && !lodash_1.isDate(value)) {
            return this;
        }
        if (value > comparison) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    greaterThan(comparison, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isNumber(value) && !lodash_1.isDate(value)) {
            return this;
        }
        if (value <= comparison) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    greaterThanOrEqualsTo(comparison, errorMessage) {
        const value = this._result.originalValue;
        if (!lodash_1.isNumber(value) && !lodash_1.isDate(value)) {
            return this;
        }
        if (value < comparison) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
    mustExistIn(items, errorMessage) {
        const value = this._result.originalValue;
        if (items.indexOf(value) < 0) {
            this._result.invalidate(errorMessage);
        }
        return this;
    }
}
function validate(value) {
    return new Validator(value);
}
exports.default = validate;
//# sourceMappingURL=validations.js.map