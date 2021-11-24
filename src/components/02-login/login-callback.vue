<template>
  <v-container>
    <div id="spacer" />
    <h2 class="text-center">{{ status }}</h2>
    <h5 v-if="isError" class="text-center mt-5">
      Please ensure that you are logging in using a valid and authorized
      credential.
    </h5>
  </v-container>
</template>

<script>
import axios from "axios"
import { Actions, OAuth, Routes, StorageKeys, Urls } from "../../constants"
export default {
  data() {
    return {
      tokenCode: "",
      status: "Logging in...",
      isError: false
    }
  },
  methods: {
    async fetchAccount() {
      try {
        const response = await axios.get(Urls.FETCH_ACCOUNT, {
          headers: {
            Authorization: `Bearer ${this.$store.state.appToken.token}`
          }
        })
        if (response.status !== 200) {
          this.status = "Unable to log you in."
          this.isError = true
          return
        }

        await this.$store.dispatch(Actions.REFRESH_ACCOUNT, response.data)
        await this.continue()
      } catch (e) {
        this.status = "Unable to log you in."
        this.isError = true
      }
    },
    async getAccessToken() {
      try {
        const payload = {
          redirect_uri: OAuth.REDIRECT_URI,
          code: this.tokenCode
        }

        const response = await axios.post(Urls.GET_AUTH_TOKEN, payload)
        if (response.status !== 200) {
          this.status = "Unable to log you in."
          this.isError = true
          return
        }
        await this.$store.dispatch(Actions.LOGIN, response.data)
        await this.continue()
      } catch (e) {
        this.status = "Unable to log you in."
        this.isError = true
      }
    },
    async continue() {
      const pathName = localStorage.getItem(StorageKeys.REDIRECT_TO)
      if (pathName) {
        const paramsRaw = localStorage.getItem(StorageKeys.REDIRECT_PARAMS)
        if (paramsRaw) {
          const params = JSON.parse(paramsRaw)
          await this.$router.push({ name: pathName, params: params })
        } else {
          await this.$router.push({ name: pathName })
        }
        localStorage.removeItem(StorageKeys.REDIRECT_TO)
        localStorage.removeItem(StorageKeys.REDIRECT_PARAMS)
      } else {
        await this.$router.push({ name: Routes.DEFAULT_ROUTE })
      }
    }
  },
  async mounted() {
    if (this.$store.state.appToken.isAuthenticated) {
      if (this.$store.state.appToken.needRefresh) {
        await this.fetchAccount()
      } else {
        await this.continue()
      }
      return
    }
    const urlParams = new URLSearchParams(window.location.search)
    const tokenCode = urlParams.get("code")
    if (!tokenCode) {
      return
    }
    this.tokenCode = tokenCode

    await this.getAccessToken()
  }
}
</script>

<style lang="scss" scoped>
#spacer {
  margin-bottom: 5rem;
}
</style>
