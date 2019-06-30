<template>
  <div class="addstepthree">
    <h3>课程目录:</h3>
    <el-row>
      <el-collapse v-if="flag" accordion value="1">
        <el-collapse-item :title="title" name="1">
          <el-row>
            <el-col :span="3">
              <span class="little-star">*</span>阶段名称：
            </el-col>
            <el-col :span="8">
              <el-input v-model="title" placeholder="请输入阶段名" />
            </el-col>
            <el-col :span="2.5" :offset="6">
              <el-button type="primary" icon="el-icon-edit">修改</el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="danger" icon="el-icon-delete">删除</el-button>
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
          <el-row style="margin-left:12.5%;width:50%"><el-button plain>添加脑图坐标</el-button></el-row>
        </el-collapse-item>

        <el-collapse-item :title="title" name="2">
          <el-row>
            <el-col :span="3">
              <span class="little-star">*</span>阶段名称：
            </el-col>
            <el-col :span="8">
              <el-input v-model="title" placeholder="请输入阶段名" />
            </el-col>
            <el-col :span="2" :offset="7">
              <el-button type="primary" icon="el-icon-edit">修改</el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="danger" icon="el-icon-delete">删除</el-button>
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
          <el-row><el-button plain>添加脑图坐标</el-button></el-row>
        </el-collapse-item>
      </el-collapse>
    </el-row>
    <el-row><el-button type="text" @click="show()">+&nbsp;新增一节</el-button></el-row>
  </div>

</template>
<script>

export default {
  data() {
    return {
      flag: false,
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
    show() {
      this.flag = true
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col.el-col-3{
  font-size: 16px
}
.naotu.el-col.el-col-24.el-col-offset-2{
  margin-left: 1.33333%
}
</style>

