/// <reference types="googlemaps" />
import Countries from './constants/countries';
import LocationService from './services/location';
import Logger from './logger';
import validate from './validations';
import { delay } from './timer';
import { isBrowserSupported } from './browserchecks';
declare global {
    interface Window {
        googleMapsCallback: Function;
        geocoder: google.maps.Geocoder;
    }
}
export { Countries, LocationService, Logger, delay, isBrowserSupported, validate, };
