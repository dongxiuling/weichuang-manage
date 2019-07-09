<template>
  <div class="addstepthree">
    <h3>课程目录:</h3>
    <el-row>
      <el-collapse v-if="flag" accordion :value="classStageArr.length">
        <template v-for="(item,index) in classStageArr">
          <el-collapse-item :key="index" :name="index+1" class="add-shadow">
            <template slot="title">
              <el-col :span="10">
                <span class="inner-title">第{{ index+1 }}小节:&nbsp;&nbsp;{{ item.classStateName }}</span>
              </el-col>
              <el-col :span="3" :offset="10">
                <el-button type="danger" icon="el-icon-delete" @click="Delete(index)">删除</el-button>
              </el-col>
            </template>
            <div class="main-container-of-stepthree" />
            <el-row type="flex" justify="start">
              <el-col :span="3">
                <span class="little-star">*</span>小节名称：
              </el-col>
              <el-col :span="9">
                <el-input v-model="item.classStateName" placeholder="请输入小节名" />
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="3">
                <span class="little-star">*</span>视频地址：
              </el-col>
              <el-col :span="19">
                <el-input v-model="item.classVideoUrl" placeholder="请输入视频地址" />
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="3">
                <span class="little-star">*</span>任务名称：
              </el-col>
              <el-col :span="19">
                <el-input v-model="item.classTaskName" placeholder="请输入任务名称" />
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
            <template v-for="(coorItem,coorIndex) in item.brain.brainPosition">
              <el-row :key="coorIndex" style="margin-left:12.5%;">
                <el-col :span="4">坐标{{ coorIndex+1 }}：{{ coorItem.brainCoor }}</el-col>
                <el-col :span="5"><el-button type="primary" @click="eventTarget = 'change';dialogFormVisible=true;changeBrain(index, coorIndex, brainObj)">修改脑图坐标</el-button></el-col>
                <el-col :span="3"><el-button type="danger" @click="deleteBrain(index, coorIndex)">删除该坐标</el-button></el-col>
              </el-row>
            </template>
            <el-row style="margin-left:12.5%;"><el-button type="text" @click="dialogFormVisible=true;eventTarget='add'">添加脑图坐标</el-button>
            </el-row>
            <!--下面是弹出的脑图-->
            <el-dialog title="脑图坐标" :visible.sync="dialogFormVisible" :before-close="handleClose">
              <el-form :model="pushEmptyObj.brain">
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
                  <el-input v-model="webResource.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="链接地址" :label-width="formLabelWidth">
                  <el-input v-model="webResource.address" autocomplete="off" />
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="handleCancel">取 消</el-button>
                <el-button type="primary" @click="saveBrain(brainObj,index)">保 存</el-button>
              </div>
            </el-dialog>
            <el-row style="margin-left:12.5%;"><el-button type="primary" @click="saveStageMessage(classStageArr)">保存</el-button></el-row>
          </el-collapse-item>
        </template>
      </el-collapse>
    </el-row>
    <el-row><el-button type="text" @click="show(pushEmptyObj)">+&nbsp;新增一节</el-button></el-row>
  </div>

</template>
<script>
export default {
  name: 'StepThree',
  data() {
    return {
      flag: false,
      eventTarget: 'add',
      tepmStageIdx: 0,
      tempBrainPosIdx: 0,
      brainCoor: '',
      brainConcept: '',
      brainExample: '',
      webResource: {
        name: '',
        address: ''
      },
      brainObj: {}, // 为了暂存
      pushEmptyObj: { // 每次点击新增一节推进去的空对象用于循环
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
    classStageArr() {
      return this.$store.getters.classInformation.classStage // 从vuex中获取的课程阶段数组
    }
  },
  created() {
    if (this.classStageArr.length !== 0) {
      this.flag = true
    }
  },
  methods: {
    show(val) {
      this.flag = true
      var pushVal = JSON.parse(JSON.stringify(val))
      this.$store.commit('course/ADD_STAGE', pushVal)
    },
    Delete(index) {
      // this.$store.commit('course/DELET_STAGE', index)
      this.classStageArr.splice(index, 1)
      this.$store.commit('course/REPLACE_CLASSSTAGE', this.classStageArr)
    },
    saveBrain(obj, idx) {
      this.dialogFormVisible = false
      obj.brainCoor = this.brainCoor
      obj.brainConcept = this.brainConcept
      obj.brainExample = this.brainExample
      obj.webResource = this.webResource
      var trueObj = { ...obj }
      if (this.eventTarget === 'add') {
        this.classStageArr[idx].brain.brainPosition.push(trueObj)
      } else if (this.eventTarget === 'change') {
        this.classStageArr[this.tepmStageIdx].brain.brainPosition.splice(this.tempBrainPosIdx, 1, trueObj)
      }
      this.brainCoor = ''
      this.brainConcept = ''
      this.brainExample = ''
      this.webResource = {
        name: '',
        address: ''
      }
      obj = {}
    },
    saveStageMessage(val) {
      this.$store.commit('course/REPLACE_CLASSSTAGE', val)
    },
    changeBrain(stageIdx, idx, brainObj) {
      this.tepmStageIdx = stageIdx
      this.tempBrainPosIdx = idx
      this.brainCoor = this.classStageArr[stageIdx].brain.brainPosition[idx].brainCoor
      this.brainConcept = this.classStageArr[stageIdx].brain.brainPosition[idx].brainConcept
      this.brainExample = this.classStageArr[stageIdx].brain.brainPosition[idx].brainExample
      this.webResource.name = this.classStageArr[stageIdx].brain.brainPosition[idx].webResource.name
      this.webResource.address = this.classStageArr[stageIdx].brain.brainPosition[idx].webResource.address
      this.dialogFormVisible = true
    },
    deleteBrain(stageIdx, idx) {
      this.classStageArr[stageIdx].brain.brainPosition.splice(idx, 1)
    },
    handleCancel() {
      this.dialogFormVisible = false
      this.brainCoor = ''
      this.brainConcept = ''
      this.brainExample = ''
      this.webResource = {
        name: '',
        address: ''
      }
      this.brainObj = {}
    },
    handleClose(done) {
      this.$confirm('确认关闭？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '关闭成功!'
          })
          this.brainCoor = ''
          this.brainConcept = ''
          this.brainExample = ''
          this.webResource = {
            name: '',
            address: ''
          }
          this.brainObj = {}
          this.dialogFormVisible = false
        })
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

