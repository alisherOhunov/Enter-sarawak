<template>
  <div>
    <v-toolbar dark flat>
      <div
        class="d-flex flex-column align-center"
        style="width: 100%; height: 100%"
      >
        <coat-of-arms width="22px" height="22px" class="mb-2" />
        <p class="ma-n1 ml-2 enter-sarawak-title">
          <span class="red--text font-weight-bold">enter</span
          ><span class="font-weight-bold">SARAWAK</span>
        </p>
      </div>

      <template v-slot:img>
        <div class="enter-sarawak-header" />
      </template>
    </v-toolbar>
  </div>
</template>

<script>
import CoatOfArms from "./cot-of-arms"

export default {
  name: "page-header",
  components: {
    CoatOfArms
  }
}
</script>
<style scoped>
.enter-sarawak-header {
  height: 300px;
  background: linear-gradient(90deg, #6a0000, #010156);
}
.enter-sarawak-title {
  letter-spacing: 1px;
  font-size: 19px;
}
</style>
