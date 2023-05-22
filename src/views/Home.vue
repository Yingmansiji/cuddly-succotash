<template>
  <custom-table :collapse="true" :form-inline="formInline" :table-column="column" :table-data="tableData" :currentPage="currentPage"
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
            key: "state", label: "状态", value: ["approved"]
          },
          {
            key: "submitType", label: "提交人身份", value: null
          }
        ]
      },
      column: [
        {title: "医院名", key: "name", sortable: false},
        {title: "终端ID", key: "id", sortable: false},
        {title: "提交人", key: "submiterId", sortable: false},
        {
          title: "提交人身份",
          key: "submitType",
          width: 122,
          align: "center",
          sortable: false,
          filters: [
            {text: "信使", value: "msger", effect: "light", type: ""},
            {text: "医生", value: "doctor", effect: "plain", type: ""},
            {text: "管理员", value: "admin", effect: "dark", type: ""}
          ],
          filterMultiple: false,
          tags: [
            {text: "信使", value: "msger", effect: "light", type: ""},
            {text: "医生", value: "doctor", effect: "plain", type: ""},
            {text: "管理员", value: "admin", effect: "dark", type: ""}
          ]
        },
        {title: "省份", key: "provinceName", sortable: false},
        {title: "城市", key: "cityName", sortable: false},
        {
          title: "状态",
          key: "state",
          width: 84,
          align: "center",
          sortable: false,
          filters: [
            {text: "待审核", value: "draft", effect: "light", type: ""},
            {text: "已通过", value: "approved", effect: "light", type: "success"},
            {text: "已拒绝", value: "rejected", effect: "light", type: "danger"}
          ],
          filterMultiple: true,
          tags: [
            {text: "待审核", value: "draft", effect: "light", type: ""},
            {text: "已通过", value: "approved", effect: "light", type: "success"},
            {text: "已拒绝", value: "rejected", effect: "light", type: "danger"}
          ],
        },
        {title: "提交时间", key: "createTime", sortable: true},
        {title: "操作", key: "operation", width: 140, align: "center", sortable: false}
      ],
      operations: [
        {func: "onDetail", name: "查看"},
        {func: "onOpenDialog", name: "合并终端"},
      ],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 20,
      total: 0,
      tableData: [{
        "id": 225583,
        "name": "上海合并1号",
        "createTime": "2023-03-22 10:39:15",
        "categoryId": 2,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "医院",
        "subclass": "",
        "address": "无",
        "longitude": "",
        "latitude": "",
        "areaId": 2,
        "areaName": null,
        "provinceId": 7,
        "provinceName": "上海市",
        "cityId": 45,
        "cityName": "上海市",
        "countyId": 975,
        "countyName": null,
        "townId": 21775,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "7900095",
        "submitType": "msger",
        "gradeId": 2,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": ""
      }, {
        "id": 225564,
        "name": "测试调研医院",
        "createTime": "2022-11-21 11:40:39",
        "categoryId": 1,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "医院",
        "subclass": "",
        "address": "123",
        "longitude": "",
        "latitude": "",
        "areaId": 2,
        "areaName": null,
        "provinceId": 7,
        "provinceName": "上海市",
        "cityId": 45,
        "cityName": "上海市",
        "countyId": 0,
        "countyName": null,
        "townId": 0,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "7117969",
        "submitType": "msger",
        "gradeId": 3,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": ""
      }, {
        "id": 225560,
        "name": "测试终端添加",
        "createTime": "2022-11-21 11:32:16",
        "categoryId": 8,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "妇幼保健院",
        "subclass": "",
        "address": "13",
        "longitude": "",
        "latitude": "",
        "areaId": 2,
        "areaName": null,
        "provinceId": 18,
        "provinceName": "江西省",
        "cityId": 249,
        "cityName": "赣州市",
        "countyId": 2735,
        "countyName": null,
        "townId": 18128,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "7117969",
        "submitType": "msger",
        "gradeId": 2,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": ""
      }, {
        "id": 225558,
        "name": "kevin信使终端",
        "createTime": "2022-11-07 16:46:23",
        "categoryId": 1,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "医院",
        "subclass": "",
        "address": "kevin创建的终端",
        "longitude": "121.39345",
        "latitude": "31.173634",
        "areaId": 2,
        "areaName": null,
        "provinceId": 14,
        "provinceName": "江苏省",
        "cityId": 292,
        "cityName": "南京市",
        "countyId": 986,
        "countyName": null,
        "townId": 38511,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "300532",
        "submitType": "msger",
        "gradeId": 3,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "上海市上海市闵行区宜山路2010号"
      }, {
        "id": 225517,
        "name": "安庆皮肤研究所",
        "createTime": "2022-05-13 14:49:12",
        "categoryId": 3,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "医院",
        "subclass": "",
        "address": "星辰大海",
        "longitude": "",
        "latitude": "",
        "areaId": 4,
        "areaName": null,
        "provinceId": 25,
        "provinceName": "四川省",
        "cityId": 151,
        "cityName": "乐山市",
        "countyId": 1287,
        "countyName": null,
        "townId": 12353,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "8116571",
        "submitType": "doctor",
        "gradeId": 9,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "新疆维吾尔自治区北屯市犍为县金粟镇星辰大海"
      }, {
        "id": 225507,
        "name": "1312321",
        "createTime": "2022-05-09 14:03:33",
        "categoryId": 7,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "妇幼保健院",
        "subclass": "",
        "address": "qweqweq",
        "longitude": "121.480539",
        "latitude": "31.235929",
        "areaId": 2,
        "areaName": null,
        "provinceId": 7,
        "provinceName": "上海市",
        "cityId": 45,
        "cityName": "上海市",
        "countyId": 969,
        "countyName": null,
        "townId": 38250,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "",
        "submitType": "",
        "gradeId": 3,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "上海市上海市黄浦区人民大道200号-1321室"
      }, {
        "id": 225504,
        "name": "辛集市化工路医院",
        "createTime": "2022-05-04 10:40:11",
        "categoryId": 3,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "医院",
        "subclass": "",
        "address": "辛集市农贸街45号",
        "longitude": "115.229466",
        "latitude": "37.913293",
        "areaId": 3,
        "areaName": null,
        "provinceId": 9,
        "provinceName": "河北省",
        "cityId": 87,
        "cityName": "石家庄市",
        "countyId": 3201,
        "countyName": null,
        "townId": 41669,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "5016601",
        "submitType": "",
        "gradeId": 9,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "河北省石家庄市辛集市农贸街"
      }, {
        "id": 225500,
        "name": "巴南区龙洲湾街道社区卫生服务中心",
        "createTime": "2022-04-26 16:45:13",
        "categoryId": 14,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "社区卫生服务中心",
        "subclass": "",
        "address": "",
        "longitude": "106.544974",
        "latitude": "29.382456",
        "areaId": 4,
        "areaName": null,
        "provinceId": 8,
        "provinceName": "重庆市",
        "cityId": 373,
        "cityName": "重庆市",
        "countyId": 1297,
        "countyName": null,
        "townId": 42768,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "553990",
        "submitType": "msger",
        "gradeId": 9,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "重庆市重庆市巴南区渝南大道158号"
      }, {
        "id": 225499,
        "name": "浦城县枫溪卫生院",
        "createTime": "2022-04-24 20:37:20",
        "categoryId": 13,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "卫生院",
        "subclass": "",
        "address": "",
        "longitude": "117.653576",
        "latitude": "24.51893",
        "areaId": 2,
        "areaName": null,
        "provinceId": 17,
        "provinceName": "福建省",
        "cityId": 258,
        "cityName": "南平市",
        "countyId": 2363,
        "countyName": null,
        "townId": 27621,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "5890627",
        "submitType": "doctor",
        "gradeId": 9,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "福建省漳州市芗城区胜利西路120号"
      }, {
        "id": 225498,
        "name": "陕西凤酒股份有限公司卫生所",
        "createTime": "2022-04-24 13:43:53",
        "categoryId": 16,
        "categoryStandardName": null,
        "largeCategoryId": null,
        "category": "卫生室",
        "subclass": "",
        "address": "东大街1号院",
        "longitude": "107.318745",
        "latitude": "34.550678",
        "areaId": 4,
        "areaName": null,
        "provinceId": 28,
        "provinceName": "陕西省",
        "cityId": 50,
        "cityName": "宝鸡市",
        "countyId": 2769,
        "countyName": null,
        "townId": 9602,
        "townName": null,
        "villageId": 0,
        "villageName": null,
        "submiterId": "5570605",
        "submitType": "doctor",
        "gradeId": 12,
        "gradeName": null,
        "state": "approved",
        "standardId": 0,
        "standardName": "",
        "standardProvince": "",
        "standardCity": "",
        "standardCounty": "",
        "standardGrade": "",
        "standardKey": "",
        "active": true,
        "codeType": null,
        "gpsAddress": "陕西省宝鸡市凤翔区"
      }]
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
