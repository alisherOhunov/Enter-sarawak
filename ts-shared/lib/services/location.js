"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let googleMapsIsInitialized = !!window.google;
let initialiseGoogleMapsResolve;
let initialiseGoogleMapsReject;
let initialiseGoogleMapsPromise = new Promise((resolve, reject) => {
    initialiseGoogleMapsResolve = resolve;
    initialiseGoogleMapsReject = reject;
});
function initialiseGoogleMaps(apiKey) {
    var _a;
    if (googleMapsIsInitialized) {
        return initialiseGoogleMapsPromise;
    }
    googleMapsIsInitialized = true;
    window.googleMapsCallback = () => initialiseGoogleMapsResolve(window.google);
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=${apiKey}&callback=googleMapsCallback`;
    script.onerror = initialiseGoogleMapsReject;
    (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(script);
    return initialiseGoogleMapsPromise;
}
function getCurrentLocation(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = { isSuccess: false };
        if (!window.navigator.geolocation) {
            result.error = GetCurrentLocationError.BROWSER_DOES_NOT_SUPPORT_GEOLOCATION;
            return result;
        }
        if (window.navigator.permissions) {
            const status = yield window.navigator.permissions.query({ name: 'geolocation' });
            if (status.state === 'denied') {
                result.error = GetCurrentLocationError.ACCESS_DENIED;
                return result;
            }
        }
        const promise = new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition((e) => resolve(e), (e) => reject(e), options);
        });
        try {
            result.data = yield promise;
            result.isSuccess = true;
        }
        catch (e) {
            switch (e.code) {
                case 1:
                    result.error = GetCurrentLocationError.ACCESS_DENIED;
                    break;
                case 2:
                    result.error = GetCurrentLocationError.POSITION_UNAVAILABLE;
                    break;
                case 3:
                    result.error = GetCurrentLocationError.TIMED_OUT;
                    break;
                default:
                    throw e;
            }
        }
        return result;
    });
}
function reverseGeocode(lat, lng) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => {
            if (!window.google) {
                reject('Google Maps is not initialised!');
            }
            if (!window.geocoder) {
                window.geocoder = new google.maps.Geocoder();
            }
            const geocoder = window.geocoder;
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK && results[0]) {
                    resolve(results[0]);
                    return;
                }
                reject('Unable to reverse geocode the given coordinate.');
            });
        }));
    });
}
function distanceBetween(p1, p2) {
    const ll1 = new google.maps.LatLng(p1.latitude, p1.longitude);
    const ll2 = new google.maps.LatLng(p2.latitude, p2.longitude);
    return google.maps.geometry.spherical.computeDistanceBetween(ll1, ll2);
}
var GetCurrentLocationError;
(function (GetCurrentLocationError) {
    GetCurrentLocationError[GetCurrentLocationError["BROWSER_DOES_NOT_SUPPORT_GEOLOCATION"] = 0] = "BROWSER_DOES_NOT_SUPPORT_GEOLOCATION";
    GetCurrentLocationError[GetCurrentLocationError["ACCESS_DENIED"] = 1] = "ACCESS_DENIED";
    GetCurrentLocationError[GetCurrentLocationError["POSITION_UNAVAILABLE"] = 2] = "POSITION_UNAVAILABLE";
    GetCurrentLocationError[GetCurrentLocationError["TIMED_OUT"] = 3] = "TIMED_OUT";
})(GetCurrentLocationError || (GetCurrentLocationError = {}));
const LocationService = {
    distanceBetween,
    getCurrentLocation,
    initialiseGoogleMaps,
    reverseGeocode,
};
exports.default = LocationService;
//# sourceMappingURL=location.js.map