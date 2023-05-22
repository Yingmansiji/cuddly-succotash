<template>
  <div class="operations_bar">
    <custom-search-form :form-collapse-num="formCollapseNum" :collapse="collapse" :hasForm="hasForm"
                        :form-inline="formInline" :moreButtons="moreButtons"
                        @operate="searchOperation">
      <template #tip>
        <slot name="tip"></slot>
      </template>
    </custom-search-form>
  </div>
  <slot name="default"></slot>
  <el-table :data="tableData" stripe border style="width: 100%" :height="tableHeight"
            ref="multipleTableRef" @filter-change="val=>tableOperation('filterChange',val)"
            @selection-change="val=>tableOperation('onSelectChange',val)">
    <template v-slot:empty>
      <el-empty description="暂无数据"/>
    </template>
    <el-table-column v-if="hasSelection" type="selection" align="center" width="55"/>
    <el-table-column v-for="item in tableColumn" :filters="item.filters" :column-key="item.key"
                     :filterMultiple="item.filterMultiple" :key="item.key" :label="item.title"
                     :prop="item.key" :width="item.width" :minWidth="item.minWidth" :align="item.align"
                     :sortable="item.sortable">
      <template #default="scope">
        <template v-if="item.tags">
          <template v-for="(type) in item.tags" :key="type.key">
            <el-tag v-if="scope.row[item.key]==type.value" :type="type.type" :effect="type.effect">
              {{ type.originValueKey ? scope.row[type.originValueKey] : type.text }}
            </el-tag>
          </template>
        </template>
        <template v-else-if="item.key=='operation'">
          <template v-for="(operate,operationIndex) in operations" :key="operationIndex">
            <template v-if="operate.factor">
              <template v-for="(fact,factIndex) in operate.factor" :key="factIndex">
                <el-link :type="fact.type ? fact.type : 'primary'"
                         @click="tableOperation(operate.func,scope.row)"
                         v-if="fact.value==scope.row[fact.key]">{{ fact.name }}
                </el-link>
                <span v-else/>
              </template>
            </template>
            <template v-else>
              <el-link :type="operate.type ? operate.type : 'primary'" @click="tableOperation(operate.func,scope.row)">
                {{ operate.name ? operate.name : scope.row[operate.key] }}
              </el-link>
            </template>
          </template>
        </template>
        <template v-else-if="item.func">
          <el-link :type="item.type ? item.type : 'primary'" @click="tableOperation(item.func,scope.row)">
            {{ scope.row[item.key] }}
          </el-link>
        </template>
        <template v-else>{{ scope.row[item.key] }}</template>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination v-if="pagination"
                 :currentPage="currentPage"
                 :page-size="pageSize"
                 background
                 layout="total, prev, pager, next, jumper"
                 :total="total"
                 @current-change="val=>tableOperation('onPageChange',val)"/>
</template>

<script>
import customSearchForm from "@/components/custom_search_form";

export default {
  name: 'custom_table',
  emits: ["operate"],
  props: {
    collapse: {type: Boolean, default: false},
    formCollapseNum: {type: Number, default: 2},
    hasSelection: {type: Boolean, default: true},
    hasForm: {type: Boolean, default: true},
    formInline: {type: Object, default: {}},
    moreButtons: {type: Array, default: []},
    tableColumn: {type: [Object, Array], required: true},
    tableData: {type: Array, required: true},
    currentPage: {type: Number, required: true},
    pageSize: {type: Number, required: true},
    total: {type: Number, required: true},
    operations: {type: Array, default: []},
    buttonValidValue: {type: String, required: false, default: "status"},
    pagination: {type: Boolean, default: true},
    tableHeight: {type: [String, Number]}
  },
  components: {customSearchForm},
  data() {
    return {
      showMore: false
    }
  },
  methods: {
    tableOperation(type, value) {
      this.$emit("operate", {type, value})
    },
    searchOperation(val) {
      this.$emit("operate", val)
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
