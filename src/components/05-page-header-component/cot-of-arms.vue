<template>
  <img
    src="@/assets/coa-sarawak.png"
    :style="{
      width: width,
      height: height
    }"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "107px"
    }
  }
}
</script>
