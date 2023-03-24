<template>
  <custom-table :form-inline="formInline" :table-column="column" :table-data="tableData" :currentPage="currentPage"
                :pageSize="pageSize" :total="total" :operations="operations" @operate="onOperate"/>
</template>

<script>
import customTable from "@/components/custom_table"

export default {
  name: 'Home',
  components: {
    customTable
  },
  data() {
    return {
      formInline: {
        children: [
          {
            key: "name", label: "终端名", value: null
          },
          {
            key: "province", label: "身份", value: null
          },
          {
            key: "city", label: "城市", value: null
          },
          {
            key: "submiterId", label: "提交医生", value: null
          },
          {
            key: "id", label: "终端ID", value: null
          }
        ],
        filters: [
          {
            key: "state", label: "状态", value: null
          },
          {
            key: "submitType", label: "提交人身份", value: null
          }
        ]
      },
      multipleSelection: [],
      currentPage: 1,
      pageSize: 20,
      total: 0,
      column: [
        {title: "医院名", key: "name", sortable: false},
        {title: "终端ID", key: "id", sortable: false},
        {title: "提交人", key: "submiterId", sortable: false},
        {
          title: "提交人身份", key: "submitType", width: 122, align: "center", sortable: false, filters: [
            {text: "信使", value: "msger", effect: "light"},
            {text: "医生", value: "doctor", effect: "plain"},
            {text: "管理员", value: "admin", effect: "dark"}
          ],
          filterMultiple: false
        },
        {title: "省份", key: "provinceName", sortable: false},
        {
          title: "城市", key: "cityName", sortable: false
        },
        {
          title: "状态", key: "state", width: 84, align: "center", sortable: false,
          filters: [
            {text: "待审核", value: "draft", effect: "light"},
            {text: "已通过", value: "approved", effect: "plain"},
            {text: "已拒绝", value: "rejected", effect: "dark"}
          ],
          filterMultiple: true
        },
        {title: "提交时间", key: "createTime", sortable: true},
        {
          title: "操作", key: "operation", width: 140, align: "center", sortable: false
        }
      ],
      operations: [
        {func: "onDetail", name: "查看"},
        {func: "onOpenDialog", name: "合并终端"},
      ],
      tableData: []
    }
  },
  computed: {
    form() {
      return [...this.formInline.children, ...this.formInline.filters]
    }
  },
  methods: {
    getList() {
      console.log('computed:', this.form);

      let param = {
        page: this.currentPage,
        pageSize: this.pageSize
      }
      for (let child of this.form) {
        if (child.value !== null && child.value !== "") {
          param[child.key] = child.value
        }
      }
      console.log("param:", param);
      // 调用接口
    },
    onSearch(form) {
      console.log("onSearch", form);
      this.formInline = form;
      this.getList()
    },
    onPageChange(val) {
      console.log("onPageChange", val);
      this.currentPage = val;
      this.getList()
    },
    onSelectChange(val) {
      console.log("onSelectChange", val);
      this.multipleSelection = val;
    },
    onOperate(val) {
      this[val.type](val.value);
    },
    onDetail(val) {
      console.log("onDetail", val);
    },
    onOpenDialog(val) {
      console.log("openDialog", val);
    },
    filterChange(val) {
      console.log("filterChange", val);
      let name = Object.keys(val)[0];
      let value = Object.values(val)[0];
      let formObj = this.column.find(i => i.key == name);
      let index = this.formInline.filters.findIndex(i => i.key == name);
      this.formInline.filters[index].value = formObj.filterMultiple ? value : value[0]
      this.getList()
    }
  }
}
</script>
