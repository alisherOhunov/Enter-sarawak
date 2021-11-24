// Routes.
export const Routes = {
  DEFAULT_ROUTE: "submit-employee",
  REGISTRATION: {
    name: "registration",
    path: "/",
    title: "register"
  },
  SUBMIT_EMPLOYEE: {
    name: "submit-employee",
    path: "/submit-employee",
    title: "submit employee"
  },
  APPROVE_CORPORATE_PROFILES: {
    name: "approve-corporate-profiles",
    path: "/approve-corporate-profiles",
    title: "Approve Corporate Profiles"
  },
  VIEW_APPLICATIONS: {
    name: "view-applications",
    path: "/view-applications",
    title: "View Applications"
  },
  PAGE_LOGIN: {
    name: "login",
    path: "/login",
    title: "Log in"
  },
  PAGE_LOGIN_CALLBACK: {
    name: "login-callback",
    path: "/login/callback",
    title: "Log in"
  }
}
export const Actions = {
  SET_SERVER_ERRORS: "SET_SERVER_ERRORS",
  REFRESH_ACCOUNT: "REFRESH_ACCOUNT",
  FETCH_COUNTRIES: "FETCH_COUNTRIES",
  FETCH_BUSINESS_SERVICES: "FETCH_BUSINESS_SERVICES",
  SET_ACCOUNT_DETAILS: "SET_ACCOUNT_DETAILS",
  SET_CORPORATE_DETAILS: "SET_CORPORATE_DETAILS",
  LOGIN: "LOGIN"
}
export const Mutations = {
  SET_SERVER_ERRORS: "SET_SERVER_ERRORS",
  SET_ACCOUNT_DETAILS: "SET_ACCOUNT_DETAILS",
  SET_CORPORATE_DETAILS: "SET_CORPORATE_DETAILS",
  FETCH_COUNTRIES: "FETCH_COUNTRIES",
  FETCH_BUSINESS_SERVICES: "FETCH_BUSINESS_SERVICES",
  SET_TOKEN: "SET_TOKEN",
  SET_TOKEN_EXPIRY: "SET_TOKEN_EXPIRY",
  SET_ACCOUNT_TOKEN: "SET_ACCOUNT_TOKEN",
  SET_USER: "SET_USER"
}
export const Urls = {
  FETCH_ACCOUNT: "/api/account",
  ACCOUNT_BASE_URLS: process.env.VUE_APP_BASE_ACCOUNT_URLS,
  GET_AUTH_TOKEN: "/api/auth/token"
}
export const NAME_SEPARATORS = [
  " bin ",
  " binti ",
  " b. ",
  " bt. ",
  " b ",
  " bt ",
  " a/l ",
  " a/p "
]
export const OAuth = {
  get LOGIN_URI() {
    const redirect = process.env.VUE_APP_URI_REDIRECT
    const clientId = process.env.VUE_APP_URI_OAUTH_CLIENT_ID

    let uri = process.env.VUE_APP_URI_OAUTH_LOGIN
    uri += `?client_id=${clientId}`
    uri += `&redirect_uri=${redirect}`
    uri += "&scope=profile&response_type=code"
    return uri
  },
  REDIRECT_URI: process.env.VUE_APP_URI_REDIRECT
}
export const StorageKeys = {
  APP_TOKEN: "APP_TOKEN",
  ACCOUNT_TOKEN: "ACCOUNT_TOKEN",
  TOKEN_EXPIRY: "TOKEN_EXPIRY",
  REDIRECT_TO: "REDIRECT_TO",
  REDIRECT_PARAMS: "REDIRECT_PARAMS"
}
