<template>
  <div>
    <el-collapse-item :name="stageIndex" class="aaaa">
      <template slot="title">
        <el-col :span="5">
          <span class="inner-title">第{{ stageIndex }}阶段:&nbsp;&nbsp;{{ title }}</span>
        </el-col>
        <el-col :span="3" :offset="19">
          <el-button type="danger" icon="el-icon-delete" @click="Delete()">删除</el-button>
        </el-col>
      </template>
      <div class="main-container-of-stepthree" />
      <el-row type="flex" justify="start">
        <el-col :span="3">
          <span class="little-star">*</span>阶段名称：
        </el-col>
        <el-col :span="9">
          <el-input v-model="title" placeholder="请输入阶段名" />
        </el-col>
      </el-row>

      <el-row type="flex" align="middle">
        <el-col :span="3">
          <span class="little-star">*</span>视频地址：
        </el-col>
        <el-col :span="19">
          <el-input v-model="input" placeholder="请输入视频地址" />
        </el-col>
      </el-row>

      <el-row type="flex" align="middle">
        <el-col :span="3">
          <span class="little-star">*</span>任务名称：
        </el-col>
        <el-col :span="19">
          <el-input v-model="input" placeholder="请输入任务名称" />
        </el-col>
      </el-row>

      <el-row type="flex" align="top">
        <el-col :span="3">
          <span class="little-star">*</span>脑图：
        </el-col>
        <el-col :offset="2" class="naotu">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
      </el-row>
      <el-row style="margin-left:12.5%;"><el-button plain>添加脑图坐标</el-button></el-row>
    </el-collapse-item>
  </div>

</template>
<script>
export default {
  props: { stageIndex: { type: Number, default: 1 }},
  data() {
    return {
      title: '',
      urlAddress: '',
      taskName: '',
      brainXy: { x: '', y: '' },
      brainCoordinate: [],
      sections: [
      ]
    }
  },
  methods: {
    Delete() {
      this.$store.commit('course/DELET_STAGE')
    }
  }
}
</script>

<style lang="scss" scoped>
.little-star{
  color: red;
}
.el-col.el-col-3{
  font-size: 16px
}
.naotu.el-col.el-col-24.el-col-offset-2{
  margin-left: 1.33333%
}
.el-row {
  margin-bottom: 20px;
  margin-left:10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.inner-title{
  text-indent: 5px;
  font-size: 16px;
  font-weight: bolder;
}
.el-collapse-item.aaaa{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>

