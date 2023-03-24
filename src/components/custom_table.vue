<template>
  <el-form :inline="true" ref="formInline" :model="formInline">
    <el-form-item v-for="form in formInline" :key="form.formKey" :label="form.label" :prop="form.formKey">
      <el-input v-model="form[form.formKey]" placeholder=" "/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">搜索</el-button>
      <el-button type="info" @click="onReset('formInline')">重置</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="tableData" stripe border style="width: 100%"
            ref="multipleTableRef"
            @selection-change="handleSelectionChange">
    <template v-slot:empty>
      <el-empty description="暂无数据"/>
    </template>
    <el-table-column type="selection" width="55" align="center"/>
    <el-table-column v-for="item in tableColumn" :key="item.key" :label="item.title"
                     :prop="item.key" align="center">
    </el-table-column>
  </el-table>
  <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      background
      layout="total, prev, pager, next, jumper"
      :total="total"
      @current-change="handleCurrentChange"/>
</template>

<script>
export default {
  name: 'custom_table',
  emits: ["search", "pageChange", "selectChange"],
  props: {
    formInline: {type: Array, required: true},
    tableColumn: {type: Array, required: true},
    tableData: {type: Array, required: true},
    currentPage: {type: Number, required: true},
    pageSize: {type: Number, required: true},
    total: {type: Number, required: true},
  },
  data() {
    return {}
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit("selectChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
    },
    onSearch() {
      this.$emit("search", this.formInline)
    },
    onReset(formName) {
      this.$refs[formName].resetFields();
      this.onSearch()
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
