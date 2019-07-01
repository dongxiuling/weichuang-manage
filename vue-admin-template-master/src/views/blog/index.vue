<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理文章" name="first">
        <ul>
          <li>
            <h2>青春</h2>
            <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪...</span>
            <el-badge :value="99" class="item" type="primary">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="99" class="item" type="warning">
              <el-button size="small">阅读</el-button>
            </el-badge>
            <i class="el-icon-edit" @click="blogChange()" />
            <i class="el-icon-share" />
            <i class="el-icon-delete" />
          </li>
        </ul>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="50" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="发表文章" name="second">
        <div id="main">
          <mavon-editor v-model="value" />
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="cancel()">取消</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      value: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    blogChange() {
      this.activeName = 'second'
    },
    cancel() {
      this.activeName = 'first'
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
