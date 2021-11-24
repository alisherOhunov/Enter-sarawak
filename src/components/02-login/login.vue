<template>
  <v-container>
    <div id="spacer" />
    <h2 class="text-center">Logging in.</h2>
  </v-container>
</template>

<script>
import { OAuth } from "../../constants"

export default {
  async mounted() {
    location.href = OAuth.LOGIN_URI
  }
}
</script>

<style lang="scss" scoped>
#spacer {
  margin-bottom: 5rem;
}
</style>
