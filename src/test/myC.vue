<template>
  <el-button @click="sendMessage">发送</el-button>
</template>

<script>
export default {
  name: "myC",
  mounted() {
    console.log(this.$attrs.age)
  },
  methods: {
    sendMessage() {
      this.$attrs.onSend()
    }
  }
}
</script>

<style scoped>

</style>
