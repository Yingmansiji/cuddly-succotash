<template>
  <custom-table :form-inline="formInline" :table-column="column" :table-data="tableData" :currentPage="currentPage"
                :pageSize="pageSize" :total="total"
                @search="onSearch" @pageChange="onPageChange" @selectChange="onSelectChange"/>
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
      formInline: [
        {
          formKey: "name", label: "名称", name: null,
        },
        {
          formKey: "id", label: "ID", id: null,
        }
      ],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 20,
      total: 0,
      column: [
        {
          title: '信使手机号',
          key: 'msgerMobile',
        }, {
          title: '终端名称',
          key: 'hospitalName',
        }, {
          title: '科室',
          key: 'departmentName',
        }, {
          title: '医生姓名',
          key: 'doctorName',
        }
      ],
      tableData: [{
        "id": 117197,
        "title": "1111111",
        "source": "医时",
        "weight": 0,
        "updateTime": "2022-09-29 17:48:40",
        "lables": [],
        "status": 0,
        "top": 0,
        "description": "",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117196,
        "title": "大好山河",
        "source": "医时医信",
        "weight": 0,
        "updateTime": "2022-09-29 15:57:00",
        "lables": [],
        "status": 0,
        "top": 0,
        "description": "",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117195,
        "title": "大好山河",
        "source": "医时医信",
        "weight": 0,
        "updateTime": "2022-09-29 15:56:54",
        "lables": [],
        "status": 1,
        "top": 0,
        "description": "",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 116165,
        "title": "第七十一期丨处方审核案例解析",
        "source": "合理用药百科",
        "weight": 1196,
        "updateTime": "2022-09-29 13:36:10",
        "lables": [],
        "status": 0,
        "top": 1,
        "description": "处方案例分析，带你学习更多处方药物使用问题。",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117194,
        "title": "睡眠不好如何调理 12个小妙招助你轻松入睡",
        "source": "三九养生堂",
        "weight": 0,
        "updateTime": "2022-09-27 09:46:30",
        "lables": [],
        "status": 0,
        "top": 0,
        "description": "睡眠不好是一种十分常见的情况，很多朋友因为习惯、工作、学习、生活等各方面的原因总是导致睡眠质量不高，那么睡眠不好如何调理呢?别着急，禁停啊就让我们一起看一看睡眠不好怎么办，睡眠不好饮食原则。",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117186,
        "title": "睡眠不好如何调理 12个小妙招助你轻松入睡",
        "source": "三九养生堂",
        "weight": 0,
        "updateTime": "2022-09-26 15:51:53",
        "lables": [],
        "status": 0,
        "top": 1,
        "description": "睡眠不好是一种十分常见的情况，很多朋友因为习惯、工作、学习、生活等各方面的原因总是导致睡眠质量不高，那么睡眠不好如何调理呢?别着急，禁停啊就让我们一起看一看睡眠不好怎么办，睡眠不好饮食原则。",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117191,
        "title": "解决睡眠质量不好的五大方法",
        "source": "医学媒体",
        "weight": 0,
        "updateTime": "2022-09-23 13:16:18",
        "lables": ["string1", "123"],
        "status": 0,
        "top": 1,
        "description": "解决睡眠质量不好的五大方法",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117193,
        "title": "投入心脏介入30余载，率领“一站式”冠状动脉杂交手术开展",
        "source": "医学界心血管频道",
        "weight": 0,
        "updateTime": "2022-09-23 13:02:57",
        "lables": [],
        "status": 0,
        "top": 0,
        "description": "林先和教授分享30年心内科从医历程。",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 117192,
        "title": "关注心血管代谢，跨领域提升患者综合获益",
        "source": "医学界心血管频道",
        "weight": 0,
        "updateTime": "2022-09-23 13:02:56",
        "lables": [],
        "status": 0,
        "top": 0,
        "description": "关注代谢异常与CVD之间的相互作用，合理管理CVD患者的代谢稳态。",
        "html": null,
        "cover": null,
        "keywords": []
      }, {
        "id": 116058,
        "title": "重灾区！又一三甲医院科主任被抓",
        "source": "医客",
        "weight": 5898,
        "updateTime": "2022-09-20 18:14:20",
        "lables": [],
        "status": 2,
        "top": 1,
        "description": "设备科室成医疗腐败“重灾区”。",
        "html": null,
        "cover": null,
        "keywords": []
      }]
    }
  },
  methods: {
    getList() {
      let param = {
        page: this.currentPage,
        pageSize: this.pageSize
      }
      for (let item of this.formInline) {
        if (item[item.formKey] !== null && item[item.formKey] !== "") {
          param[item.formKey] = item[item.formKey]
        }
      }
      console.log(param);
      // 调用接口
    },
    onSearch(form) {
      this.formInline = form;
      this.getList()
    },
    onPageChange(val) {
      this.currentPage = val;
      this.getList()
    },
    onSelectChange(val) {
      this.multipleSelection = val;
    },
  }
}
</script>
