<template>
  <my-c v-bind="$attrs"/>
</template>

<script>
import myC from "@/test/myC";

export default {
  name: "myB",
  components: {myC},
  props: {
    name: {type: String},
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
