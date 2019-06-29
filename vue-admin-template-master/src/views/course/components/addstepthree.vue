<template>
  <div>
    <el-row><h3>课程目录:</h3></el-row>
    <el-row>
      <el-collapse accordion>
        <el-collapse-item :title="title" name="1">
          <el-row>
            <el-input v-model="title" placeholder="请输入阶段名" />
            <el-button type="primary" icon="el-icon-edit">修改</el-button>
            <el-button type="primary" icon="el-icon-delete">删除</el-button>
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
            <el-col>
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
          <el-row>
            <el-input v-model="brainXy.x" placeholder="请输入脑图x坐标" />
          </el-row>
          <el-row>
            <el-input v-model="brainXy.y" placeholder="请输入脑图y坐标" />
          </el-row>
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

    }
  }
}
</script>
<style lang="sass" scoped>

</style>

