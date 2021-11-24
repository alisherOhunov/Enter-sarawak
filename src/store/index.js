import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import { AppState } from "./model"
import { Mutations, Actions, Urls } from "../constants"
Vue.use(Vuex)

/** @type {AppState} */
const state = new AppState()
/** @type {import('vuex').MutationTree<AppState>} */
const mutations = {
  [Mutations.SET_ACCOUNT_DETAILS](state, payload) {
    state.accountDetails = payload
  },
  [Mutations.SET_SERVER_ERRORS](state, payload) {
    let msg = payload.message
    msg += "\r\n\r\n"

    for (let i = 0; i < payload.errors.length; i++) {
      const err = payload.errors[i]
      msg += `${i + 1}: ${err.message}\r\n`
    }
    console.log(msg)
    state.serverErrors = msg
    return msg
  },
  [Mutations.SET_CORPORATE_DETAILS](state, payload) {
    state.corporateDetails = payload
  },
  [Mutations.FETCH_COUNTRIES](state, payload) {
    state.countries = payload ? payload : []
  },
  [Mutations.FETCH_BUSINESS_SERVICES](state, payload) {
    state.businessServices = payload ? payload : []
  },
  [Mutations.SET_TOKEN_EXPIRY](state, payload) {
    state.appToken.expiry = payload
  },
  [Mutations.SET_TOKEN](state, payload) {
    state.appToken.token = payload
  },
  [Mutations.SET_ACCOUNT_TOKEN](state, payload) {
    state.appToken.accountToken = payload
  },
  [Mutations.SET_USER](state, payload) {
    state.appToken.user = payload
  }
}
/** @type {import('vuex').ActionTree<AppModels.AppState>} */
const actions = {
  [Actions.FETCH_COUNTRIES](ctx) {
    if (state.countries.length === 0) {
      axios.get(`${Urls.ACCOUNT_BASE_URLS}/countries`).then(response => {
        ctx.commit(Mutations.FETCH_COUNTRIES, response.data.data)
      })
    }
  },
  [Actions.FETCH_BUSINESS_SERVICES](ctx) {
    if (state.businessServices.length === 0) {
      axios
        .get(`${Urls.ACCOUNT_BASE_URLS}/business-services`)
        .then(response => {
          ctx.commit(Mutations.FETCH_BUSINESS_SERVICES, response.data.data)
        })
    }
  },
  [Actions.SET_ACCOUNT_DETAILS](ctx, payload) {
    ctx.commit(Mutations.SET_ACCOUNT_DETAILS, payload)
  },
  [Actions.SET_CORPORATE_DETAILS](ctx, payload) {
    ctx.commit(Mutations.SET_CORPORATE_DETAILS, payload)
  },
  [Actions.SET_SERVER_ERRORS](ctx, payload) {
    ctx.commit(Mutations.SET_SERVER_ERRORS, payload)
  },
  [Actions.LOGIN](ctx, payload) {
    const expiryTime = new Date()
    if (payload.user?.permissions?.length > 0) {
      expiryTime.setHours(expiryTime.getHours() + 4)
    } else {
      expiryTime.setMinutes(expiryTime.getMinutes() + 15)
    }
    ctx.commit(Mutations.SET_TOKEN_EXPIRY, expiryTime)
    ctx.commit(Mutations.SET_TOKEN, payload.token)
    ctx.commit(Mutations.SET_ACCOUNT_TOKEN, payload.accountToken)
    ctx.commit(Mutations.SET_USER, payload.user)
  },
  [Actions.REFRESH_ACCOUNT](ctx, payload) {
    ctx.commit(Mutations.SET_USER, payload.user)
  }
}
export default new Vuex.Store({
  mutations,
  state,
  actions
})
