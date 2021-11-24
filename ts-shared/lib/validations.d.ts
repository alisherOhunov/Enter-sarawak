declare type ValidatableType = string | number | Date;
declare class Validator {
    private _result;
    constructor(value: ValidatableType);
    get originalValue(): ValidatableType;
    get errorMessages(): string[];
    get isValid(): boolean;
    notNull(errorMessage: string): this;
    notEmpty(errorMessage: string): this;
    eMail(errorMessage: string): this;
    regex(pattern: string, errorMessage: string): this;
    equals(other: ValidatableType, errorMessage: string): this;
    notEquals(other: ValidatableType, errorMessage: string): this;
    minLength(length: number, errorMessage: string): this;
    maxLength(length: number, errorMessage: string): this;
    minUppercase(count: number, errorMessage: string): this;
    minLowercase(count: number, errorMessage: string): this;
    minDigit(count: number, errorMessage: string): this;
    minSymbol(count: number, errorMessage: string): this;
    range(min: number | Date, max: number | Date, errorMessage: string): this;
    lessThan(comparison: number | Date, errorMessage: string): this;
    lessThanOrEqualsTo(comparison: number | Date, errorMessage: string): this;
    greaterThan(comparison: number | Date, errorMessage: string): this;
    greaterThanOrEqualsTo(comparison: number | Date, errorMessage: string): this;
    mustExistIn(items: ValidatableType[], errorMessage: string): this;
}
declare function validate(value: ValidatableType): Validator;
export default validate;
