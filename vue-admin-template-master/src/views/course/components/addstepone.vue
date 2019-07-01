<template>
  <div class="stepone-container">
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <span class="little-star">*</span>课程名称：
      </el-col>
      <el-col :span="19">
        <el-input v-model="input" placeholder="请输入课程名称" @blur="saveClass(input)" />
      </el-col>
    </el-row>
    <el-row type="flex" align="top">
      <el-col :span="3">
        <span class="little-star">*</span>课程封面：
      </el-col>
      <el-col :span="19">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus" />
          <div slot="file" slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt>
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete" />
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <span class="little-star">*</span>课程简介：
      </el-col>
      <el-col :span="19">
        <el-input v-model="textarea" type="textarea" :rows="2" placeholder="请输入内容" @blur="saveBrif(textarea)" />
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <span>课程难度：</span>
      </el-col>
      <el-col :span="9">
        <el-select v-model="valuehard" placeholder="请选择课程难度" @change="saveHard(valuehard)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="3">
        <span>任课老师：</span>
      </el-col>
      <el-col :span="9">
        <el-select v-model="valueteacher" placeholder="请选择任课老师" @change="saveTeacher(valueteacher)">
          <el-option
            v-for="item in teachers"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="19" :offset="3">
        <el-radio v-model="radio" label="1" @change="saveIsFee(radio)">免费</el-radio>
        <el-radio v-model="radio" label="2" @change="saveIsFee(radio)">收费</el-radio>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="19" :offset="3">
        <el-input v-if="radio==2" v-model="money" placeholder="请输入价格" clearable @blur="saveFee(money)" />
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      textarea: '',
      options: [
        {
          value: '初级',
          label: '初级'
        },
        {
          value: '中级',
          label: '中级'
        },
        {
          value: '高级',
          label: '高级'
        }
      ],
      teachers: [
        {
          value: '老师1',
          label: '小吴'
        },
        {
          value: '老师2',
          label: '小董'
        },
        {
          value: '老师3',
          label: '小谢'
        },
        {
          value: '老师4',
          label: '小冯'
        }
      ],
      valuehard: '初级',
      valueteacher: '',
      radio: '1',
      money: ''
    }
  },
  computed: {
    classInformation() {
      return this.$store.getters.classInformation
    }
  },
  created() {
    this.input = this.classInformation.className
    this.textarea = this.classInformation.classBrif
    this.valuehard = this.classInformation.classHard
    this.valueteacher = this.classInformation.classTeacher
    this.radio = this.classInformation.classPayment
    this.money = this.classInformation.classFee
  },
  methods: {
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    },
    saveClass(val) {
      this.$store.commit('course/MAP_CLASSNAME', val)
    },
    saveBrif(val) {
      this.$store.commit('course/MAP_CLASSBRIF', val)
    },
    saveHard(val) {
      this.$store.commit('course/MAP_CLASSHARD', val)
    },
    saveTeacher(val) {
      this.$store.commit('course/MAP_CLASSTEACHER', val)
    },
    saveIsFee(val) {
      this.$store.commit('course/MAP_CLASSPAYMENT', val)
    },
    saveFee(val) {
      this.$store.commit('course/MAP_CLASSFEE', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.stepone-container {
    margin-top: 50px;
  .little-star {
    color: red;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
