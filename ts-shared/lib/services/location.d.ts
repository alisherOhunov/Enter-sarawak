/// <reference types="googlemaps" />
declare function initialiseGoogleMaps(apiKey: string): Promise<void>;
declare function getCurrentLocation(options: PositionOptions): Promise<GetCurrentLocationResult>;
declare function reverseGeocode(lat: number, lng: number): Promise<google.maps.GeocoderResult | string>;
declare function distanceBetween(p1: Coordinate, p2: Coordinate): number;
declare enum GetCurrentLocationError {
    BROWSER_DOES_NOT_SUPPORT_GEOLOCATION = 0,
    ACCESS_DENIED = 1,
    POSITION_UNAVAILABLE = 2,
    TIMED_OUT = 3
}
interface GetCurrentLocationResult {
    isSuccess: boolean;
    data?: Position;
    error?: GetCurrentLocationError;
}
interface Coordinate {
    latitude: number;
    longitude: number;
}
declare const LocationService: {
    distanceBetween: typeof distanceBetween;
    getCurrentLocation: typeof getCurrentLocation;
    initialiseGoogleMaps: typeof initialiseGoogleMaps;
    reverseGeocode: typeof reverseGeocode;
};
export default LocationService;
