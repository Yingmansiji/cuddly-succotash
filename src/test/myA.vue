<template>
  <my-b name="zhangsan" :age="25" hobby="badminton" :weight="60" :height="170" @send="getFunction"/>
</template>

<script>
import myB from "@/test/myB";

export default {
  name: "myA",
  components: {myB},
  methods: {
    getFunction() {
      console.log("hello");
    }
  }
}
</script>

<style scoped>

</style>
