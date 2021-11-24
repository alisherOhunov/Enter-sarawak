import { StorageKeys } from "../constants"
/**
 * App global state.
 */
export class AppState {
  constructor() {
    this.serverErrors = {}
    this.stepper = 1
    this.emailError = ""
    this.phoneError = ""
    this.accountDetails = {}
    this.corporateDetails = {}
    this.countries = []
    this.businessServices = []
    this.appToken = new AppToken()
  }
  /** @type {String} */
  serverErrors
  /** @type {number} */
  stepper
  /** @type {Object[]} */
  countries
  /** @type {Object[]} */
  businessServices
  /** @type {Object} */
  accountDetails
  /** @type {Object} */
  corporateDetails
  /** @type {AppToken} */
  appToken
  /** @type {string} */
  emailError
  /** @type {string} */
  phoneError
}
export class AppToken {
  set expiry(date) {
    if (date == null) {
      localStorage.removeItem(StorageKeys.TOKEN_EXPIRY)
      return
    }
    localStorage.setItem(StorageKeys.TOKEN_EXPIRY, date.toISOString())
  }

  set token(token) {
    if (token == null) {
      localStorage.removeItem(StorageKeys.APP_TOKEN)
      return
    }
    localStorage.setItem(StorageKeys.APP_TOKEN, token)
  }

  set accountToken(token) {
    if (token == null) {
      localStorage.removeItem(StorageKeys.ACCOUNT_TOKEN)
      return
    }
    localStorage.setItem(StorageKeys.ACCOUNT_TOKEN, token)
  }

  /** @type {Date} */
  get expiry() {
    return new Date(localStorage.getItem(StorageKeys.TOKEN_EXPIRY))
  }

  /** @type {String} */
  get token() {
    return localStorage.getItem(StorageKeys.APP_TOKEN)
  }

  /** @type {String} */
  get accountToken() {
    return localStorage.getItem(StorageKeys.ACCOUNT_TOKEN)
  }

  /** @type {User} */
  user

  get needRefresh() {
    return this.user == null
  }

  get isExpired() {
    return this.expiry < new Date()
  }
  get isAuthenticated() {
    return !this.isExpired && this.token != null && this.accountToken != null
  }
}
export class User {
  constructor(apiModel) {
    this.profileId = apiModel.profile_id
    this.type =
      apiModel.type === 1
        ? "STAFF"
        : apiModel.type === 2
        ? "APPLICANT"
        : "UNKNOWN"
    this.createdAt = new Date(apiModel.created_at)
    this.updatedAt = new Date(apiModel.updated_at)
    this.permissions = apiModel.permissions
  }

  /** @type {number} */
  profileId
  /** @type {'STAFF'|'APPLICANT'} */
  type
  /** @type {Date} */
  createdAt
  /** @type {Date} */
  updatedAt
  /** @type {string[]} */
  permissions
}
