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
@import "style/style.less";
</style>
