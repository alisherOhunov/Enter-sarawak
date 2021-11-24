<template>
  <v-app>
    <v-main>
      <page-header />
      <div>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from "./components/05-page-header-component/page-header.vue"

export default {
  name: "App",
  components: {
    PageHeader
  }
}
</script>
