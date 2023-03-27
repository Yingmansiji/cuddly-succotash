<template>
  <el-form :inline="true" ref="formInline" :model="formInline">
    <el-form-item v-for="(child,index) in formInline.children" :key="child.key" :label="child.label"
                  :prop="`children.${index}.value`">
      <el-input v-model="child.value" placeholder=" "/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">搜索</el-button>
      <el-button type="info" @click="onReset('formInline')">重置</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="tableData" stripe border style="width: 100%"
            ref="multipleTableRef" @filter-change="val=>handleOperation('filterChange',val)"
            @selection-change="val=>handleOperation('onSelectChange',val)">
    <template v-slot:empty>
      <el-empty description="暂无数据"/>
    </template>
    <el-table-column type="selection" align="center" width="55"/>
    <el-table-column v-for="item in tableColumn" :filters="item.filters" :column-key="item.key"
                     :filterMultiple="item.filterMultiple" :key="item.key" :label="item.title"
                     :prop="item.key" :width="item.width" :align="item.align" :sortable="item.sortable">
      <template #default="scope">
        <template v-if="item.tags">
          <template v-for="(type) in item.tags" :key="type.key">
            <el-tag v-if="scope.row[item.key]==type.value" :type="type.type" :effect="type.effect">
              {{ type.text }}
            </el-tag>
          </template>
        </template>
        <template v-else-if="item.key=='operation'">
          <template v-for="(operate,operationIndex) in operations" :key="operationIndex">
            <el-link type="primary" @click="handleOperation(operate.func,scope.row)">{{ operate.name }}</el-link>
          </template>
        </template>
        <template v-else>{{ scope.row[item.key] }}</template>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      background
      layout="total, prev, pager, next, jumper"
      :total="total"
      @current-change="val=>handleOperation('onPageChange',val)"/>
</template>

<script>
export default {
  name: 'custom_table',
  emits: ["operate"],
  props: {
    formInline: {type: Object, required: true},
    tableColumn: {type: [Array, Object], required: true},
    tableData: {type: Array, required: true},
    currentPage: {type: Number, required: true},
    pageSize: {type: Number, required: true},
    total: {type: Number, required: true},
    operations: {type: Array},
    buttonValidValue: {type: String, required: false, default: "status"}
  },
  methods: {
    handleOperation(type, value) {
      this.$emit("operate", {type, value})
    },
    onSearch() {
      this.handleOperation("onSearch", this.formInline)
    },
    onReset(formName) {
      this.$refs[formName].resetFields();
      this.onSearch()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-link {
  margin: 0 4px;
}
</style>
