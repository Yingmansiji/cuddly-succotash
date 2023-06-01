<template>
  <div class="operations_bar">
    <template v-if="hasForm">
      <el-form class="search_form" :inline="true" ref="formInline" :model="formInline" @submit.native.prevent>
        <template v-if="collapse&&formInline.children.length>formCollapseNum">
          <template v-for="(child,index) in formInline.children" :key="child.key">
            <el-form-item v-if="index<formCollapseNum" :label="child.label"
                          :prop="`children.${index}.value`">
              <el-select v-model="child.value" placeholder=" " v-if="child.select"
                         :remote="child.isRemote" clearable :disabled="child.disabled"
                         value-key="id"
                         :remote-method="e=>remoteMethod(e, child.key)"
                         filterable :multiple="child.isMultiple"
                         :reserve-keyword="false" @change="e=>selectChange(e, child.key)">
                <el-option
                    v-for="option in child.selectOptions"
                    :key="option.id"
                    :label="option.name"
                    :value="{id:option.id,label:option.name}"/>
              </el-select>
              <el-checkbox-group v-else-if="child.check" v-model="child.value">
                <el-checkbox v-for="(item,checkIndex) in child.checkOptions" :key="checkIndex" :label="item.value">
                  {{ item.label }}
                </el-checkbox>
              </el-checkbox-group>
              <el-date-picker v-else-if="child.date"
                              v-model="child.value"
                              :type="child.type" :value-format="child.valueFormat"
                              range-separator="至"
                              start-placeholder="开始"
                              end-placeholder="结束"/>
              <el-input v-model="child.value" placeholder=" " :disabled="child.disabled" v-else/>
            </el-form-item>
          </template>
          <el-form-item v-if="!showMore">
            <el-button type="primary" @click="onSearch">搜索</el-button>
            <el-button type="info" @click="onReset('formInline')">重置</el-button>
            <el-button type="text" @click="this.showMore=!this.showMore">
              展开
              <el-icon>
                <arrow-down/>
              </el-icon>
            </el-button>
          </el-form-item>
          <TransitionGroup
              :duration="{ enter: 0, leave: 0 }"
              enter-active-class="animate__animated animate__fadeInUp"
              leave-active-class="animate__animated animate__fadeOutUp">
            <template v-if="showMore">
              <template v-for="(child,index) in formInline.children" :key="child.key">
                <el-form-item v-if="index>=formCollapseNum" :label="child.label"
                              :prop="`children.${index}.value`">
                  <el-select v-model="child.value" placeholder=" " v-if="child.select"
                             :remote="child.isRemote" clearable :disabled="child.disabled"
                             value-key="id"
                             :remote-method="e=>remoteMethod(e, child.key)"
                             filterable :multiple="child.isMultiple"
                             :reserve-keyword="false" @change="e=>selectChange(e, child.key)">
                    <el-option
                        v-for="option in child.selectOptions"
                        :key="option.id"
                        :label="option.name"
                        :value="{id:option.id,label:option.name}"/>
                  </el-select>
                  <el-checkbox-group v-else-if="child.check" v-model="child.value">
                    <el-checkbox v-for="(item,checkIndex) in child.checkOptions" :key="checkIndex" :label="item.value">
                      {{ item.label }}
                    </el-checkbox>
                  </el-checkbox-group>
                  <el-date-picker v-else-if="child.date"
                                  v-model="child.value"
                                  :type="child.type"
                                  :value-format="child.valueFormat"
                                  range-separator="至"
                                  start-placeholder="开始"
                                  end-placeholder="结束"/>
                  <el-input v-model="child.value" placeholder=" " :disabled="child.disabled" v-else/>
                </el-form-item>
              </template>
              <el-form-item>
                <el-button type="primary" @click="onSearch">搜索</el-button>
                <el-button type="info" @click="onReset('formInline')">重置</el-button>
                <el-button v-if="formInline.children.length>2" type="text" @click="this.showMore=!this.showMore">
                  收起
                  <el-icon>
                    <arrow-up/>
                  </el-icon>
                </el-button>
              </el-form-item>
            </template>
          </TransitionGroup>
        </template>
        <template v-else>
          <el-form-item v-for="(child,index) in formInline.children" :key="child.key"
                        :label="child.label"
                        :prop="`children.${index}.value`">
            <el-select v-model="child.value" placeholder=" " v-if="child.select"
                       :remote="child.isRemote" clearable :disabled="child.disabled"
                       value-key="id"
                       :remote-method="e=>remoteMethod(e, child.key)"
                       filterable :multiple="child.isMultiple"
                       :reserve-keyword="false" @change="e=>selectChange(e, child.key)">
              <el-option
                  v-for="option in child.selectOptions"
                  :key="option.id"
                  :label="option.name"
                  :value="{id:option.id,label:option.name}"/>
            </el-select>
            <el-checkbox-group v-else-if="child.check" v-model="child.value">
              <el-checkbox v-for="(item,checkIndex) in child.checkOptions" :key="checkIndex" :label="item.value">
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
            <el-date-picker v-else-if="child.date"
                            v-model="child.value"
                            :type="child.type" :value-format="child.valueFormat"
                            range-separator="至"
                            start-placeholder="开始"
                            end-placeholder="结束"/>
            <el-input v-model="child.value" placeholder=" " :disabled="child.disabled" v-else/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">搜索</el-button>
            <el-button type="info" @click="onReset('formInline')">重置</el-button>
          </el-form-item>
        </template>
      </el-form>
    </template>
    <div class="some_buttons">
      <template v-for="(btn,index) in moreButtons" :key="index">
        <el-popconfirm v-if="btn.isPopconfirm"
                       confirm-button-text="确定"
                       cancel-button-text="取消"
                       :title="btn.title"
                       @confirm="handleOperation(btn.func)"
                       @cancel="()=>{}">
          <template #reference>
            <el-button :type="btn.type" :disabled="btn.disabled">{{ btn.name }}</el-button>
          </template>
        </el-popconfirm>
        <el-button v-else :type="btn.type" :disabled="btn.disabled"
                   @click="handleOperation(btn.func)">{{ btn.name }}
        </el-button>
      </template>
      <slot name="tip"></slot>
    </div>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: 'custom_search_form',
  emits: ["operate"],
  props: {
    formCollapseNum: {type: Number, default: 2},
    collapse: {type: Boolean, default: false},
    hasForm: {type: Boolean, default: true},
    formInline: {type: Object, default: {}},
    moreButtons: {type: Array, default: []}
  },
  data() {
    return {
      showMore: false
    }
  },
  methods: {
    onReset(formName) {
      this.$refs[formName].resetFields();
      this.onSearch();
    },
    onSearch() {
      this.handleOperation("onSearch", this.formInline)
    },
    remoteMethod(e, key) {
      this.handleOperation(key + "Search", e)
    },
    selectChange(e, key) {
      this.handleOperation(key + "SelectChange", e)
    },
    handleOperation(type, value) {
      this.$emit("operate", {type, value})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
