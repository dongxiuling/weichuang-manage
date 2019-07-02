<template>
  <div>
    <!-- <keep-alive> -->
    <el-collapse-item :name="stageIndex" class="add-shadow">
      <template slot="title">
        <el-col :span="10">
          <span class="inner-title">第{{ stageIndex }}小节:&nbsp;&nbsp;{{ classStage.classStateName }}</span>
        </el-col>
        <el-col :span="3" :offset="10">
          <el-button type="danger" icon="el-icon-delete" @click="Delete(stageIndex)">删除</el-button>
        </el-col>
      </template>
      <div class="main-container-of-stepthree" />
      <el-row type="flex" justify="start">
        <el-col :span="3">
          <span class="little-star">*</span>小节名称：
        </el-col>
        <el-col :span="9">
          <el-input v-model="classStage.classStateName" placeholder="请输入小节名" />
        </el-col>
      </el-row>

      <el-row type="flex" align="middle">
        <el-col :span="3">
          <span class="little-star">*</span>视频地址：
        </el-col>
        <el-col :span="19">
          <el-input v-model="classStage.classVideoUrl" placeholder="请输入视频地址" />
        </el-col>
      </el-row>

      <el-row type="flex" align="middle">
        <el-col :span="3">
          <span class="little-star">*</span>任务名称：
        </el-col>
        <el-col :span="19">
          <el-input v-model="classStage.classTaskName" placeholder="请输入任务名称" />
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
      <el-row style="margin-left:12.5%;"><el-button type="text" @click="dialogFormVisible = true">添加脑图坐标</el-button>
      </el-row>
      <!--下面是弹出的脑图-->
      <el-dialog title="脑图坐标" :visible.sync="dialogFormVisible">
        <el-form :model="classStage.brain">
          <el-form-item label="坐标" :label-width="formLabelWidth">
            <el-input v-model="brainCoor" autocomplete="off" />
          </el-form-item>
          <el-form-item label="概念" :label-width="formLabelWidth">
            <el-input v-model="brainConcept" type="textarea" placeholder="请输入脑图概念" />
          </el-form-item>
          <el-form-item label="示例" :label-width="formLabelWidth">
            <el-input v-model="brainExample" autocomplete="off" />
          </el-form-item>
          <el-form-item label="网络资源" :label-width="formLabelWidth">
            <el-input v-model="webResource" autocomplete="off" />
          </el-form-item>
          <el-form-item label="链接地址" :label-width="formLabelWidth">
            <el-input v-model="webUrlAdd" autocomplete="off" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveBrain(brainObj)">保 存</el-button>
        </div>
      </el-dialog>

      <el-row style="margin-left:12.5%;"><el-button type="primary" @click="saveStageMessage(stageIndex,classStage)">保存</el-button></el-row>

    </el-collapse-item>

    <!-- </keep-alive> -->

  </div>

</template>
<script>
export default {
  props: { stageIndex: { type: Number, default: 1 }},
  data() {
    return {
      brainCoor: '',
      brainConcept: '',
      brainExample: '',
      webResource: '',
      webUrlAdd: '',
      brainObj: {},
      classStage: {
        classStateName: '',
        classVideoUrl: '',
        classTaskName: '',
        brain: {
          brainImg: '',
          brainPosition: [
          ]
        }
      },
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  computed: {
    classInformation() {
      return this.$store.getters.classInformation
    }
  },
  created() {
    this.classStage = { ...this.classInformation.classStage[this.stageIndex - 1] }
  },
  methods: {
    Delete(index) {
      this.$store.commit('course/DELET_STAGE', index)
    },
    saveBrain(obj) {
      this.dialogFormVisible = false
      obj.brainCoor = this.brainCoor
      obj.brainConcept = this.brainConcept
      obj.brainExample = this.brainExample
      obj.webResource = this.webResource
      obj.webUrlAdd = this.webUrlAdd
      var trueObj = { ...obj }
      this.classStage.brain.brainPosition.push(trueObj)
      this.brainCoor = ''
      this.brainConcept = ''
      this.brainExample = ''
      this.webResource = ''
      this.webUrlAdd = ''
    },
    saveStageMessage(index, val) {
      this.$store.commit('course/REPLACE_CLASSSTAGE', { index, val })
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
.el-collapse-item.add-shadow{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>

