<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>
<script>
import {defineComponent} from 'vue'
import {ElConfigProvider} from "element-plus"
import zhCN from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  setup() {
    return {
      locale: zhCN
    }
  }
})
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
