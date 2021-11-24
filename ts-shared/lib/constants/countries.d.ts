interface CountryInfo {
    name: string;
    countryCode: string;
    phoneCode: string;
}
declare class CountryConstant {
    get countries(): CountryInfo[];
    get countryCodes(): string[];
    get phoneCodes(): string[];
}
declare const Countries: CountryConstant;
export default Countries;
